import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AppService } from "../services/app.service";
import { ChoiceData } from "../shared/choice/choice-data";
import { catchError, filter, map, tap } from 'rxjs/operators';
import * as AppActionTypes from './app.actions';
import { combineLatest, EMPTY } from "rxjs";
import { DropDownData } from "../shared/drop-down/drop-down-data";
import { TextAreaData } from "../shared/text-area/text-area-data";
import { TravelForm } from "../model/travel-form";
import { Decision } from "../model/decision";
import { Country } from "../model/country";
import { AppData } from "./app-data";
import { TravelRequirementsData } from "../travel-requirements/travel-requirements-data";
import { SAMPLE_TRAVEL_REQUIREMENTS } from "./sample-travel-requirements";

export interface AppStateModel {
  //#region Components
  appData: AppData;
  travelTypeComponentData: ChoiceData;
  destinationComponentData: DropDownData;
  explanationData: TextAreaData;
  //#endregion

  //#region Extra
  travelRequirementComponentData: TravelRequirementsData;
  //#endregion
}

//#region Initial state
const _appDataInitialState: AppData = {
  loading: false,
  error: '',
  hasError: false,
  saved: false
}

const _travelTypeInitialState: ChoiceData = {
  choices: [],
  configuration: {
    disabled: false,
    readOnly: false,
    required: true,
    visible: true,
  },
  label: 'Are you traveling domestic or international?',
  selectedChoice: undefined
};

const _destinationInitialState: DropDownData = {
  choices: [],
  configuration: {
    disabled: false,
    readOnly: false,
    visible: false,
    required: false
  },
  label: 'Which country?',
  selectedChoice: undefined
}

const _explanationInitialState: TextAreaData = {
  selectedText: '',
  configuration: {
    disabled: false,
    readOnly: false,
    visible: false,
    required: false
  },
  label: 'Please describe where you are going domestically'
}

const _travelRequirementsInitialState: TravelRequirementsData = {
  configuration: {
    disabled: false,
    readOnly: false,
    visible: false,
    required: false
  },
  requirements: []
}

const initialState: AppStateModel = {
  appData: _appDataInitialState,
  destinationComponentData: _destinationInitialState,
  travelTypeComponentData: _travelTypeInitialState,
  explanationData: _explanationInitialState,

  //#region Extra
  travelRequirementComponentData: _travelRequirementsInitialState
  //#endregion
};
//#endregion

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');
@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initialState
})
@Injectable()
export class AppState {

  constructor(private readonly appService: AppService) { }

  @Action(AppActionTypes.LoadLookups)
  loadLookups(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ appData: { ...state.appData, loading: true} });

    const travelTypes$ = this.appService.getDecisions();
    const countries$ = this.appService.getCountries();

    return combineLatest([travelTypes$, countries$])
      .pipe(
        tap(([travelTypes, countries]) => {
          ctx.patchState({
            appData: { ...state.appData, loading: false},
            travelTypeComponentData: {
              ...state.travelTypeComponentData,
              choices: travelTypes
            },
            destinationComponentData: {
              ...state.destinationComponentData,
              choices: countries
            }
          });
        }),
        catchError(() => {
          ctx.patchState({ appData: { ...state.appData, loading: false, error: 'Loading lookup failed', hasError: true} });

          return EMPTY;
        })
      );
  }

  @Action(AppActionTypes.ResetTravelForm)
  resetTravelForm(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      appData: _appDataInitialState,
      travelTypeComponentData: {
        ...state.travelTypeComponentData,
        selectedChoice: undefined
      },
      destinationComponentData: {
        ...state.destinationComponentData,
        selectedChoice: undefined,
        configuration: {
          ...state.destinationComponentData.configuration,
          required: false,
          visible: false
        }
      },
      explanationData: _explanationInitialState,
    });
  }

  @Action(AppActionTypes.SaveTravelForm)
  saveTravelForm(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();
    const tripType: Decision = {
      key: state.travelTypeComponentData?.selectedChoice?.value as string,
      name: state.travelTypeComponentData?.selectedChoice?.label as string
    };
    const destination: Country | undefined = state.destinationComponentData.selectedChoice?.value ? {
      code: state.destinationComponentData.selectedChoice?.value as string,
      name: state.destinationComponentData.selectedChoice?.label as string,
    } : undefined;
    const explanation = state.explanationData.selectedText;
    const travelForm: TravelForm = { tripType, destination, explanation }

    return this.appService.saveTravelForm(travelForm)
      .pipe(
        filter(saved => saved === true),
        map(saved => ctx.setState({
          ...state,
          appData: { ...state.appData, saved }
        }))
      );
  }

  @Action(AppActionTypes.SetDestination)
  setDestination(ctx: StateContext<AppStateModel>, payload: AppActionTypes.SetDestination) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      destinationComponentData: {
        ...state.destinationComponentData,
        selectedChoice: {
          label: payload.destination.name,
          value: payload.destination.code
        }
      }

      //#region Extra
      ,
      travelRequirementComponentData: {
        ...state.travelRequirementComponentData,
        configuration: {
          ...state.travelRequirementComponentData.configuration,
          visible: SAMPLE_TRAVEL_REQUIREMENTS.findIndex(r => r.countryCode === payload.destination.code) != -1 ?
            true : false
        },
        requirements: SAMPLE_TRAVEL_REQUIREMENTS.findIndex(r => r.countryCode === payload.destination.code) != -1 ?
          SAMPLE_TRAVEL_REQUIREMENTS.find(r => r.countryCode === payload.destination.code)?.requirements : undefined
      }
      //#endregion
    });
  }

  @Action(AppActionTypes.SetTravelExplanation)
  setTravelExplanation(ctx: StateContext<AppStateModel>, payload: AppActionTypes.SetTravelExplanation) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      explanationData: {
        ...state.explanationData,
        selectedText: payload.explanation.text
      }
    });
  }

  @Action(AppActionTypes.SetTravelType)
  SetTravelType(ctx: StateContext<AppStateModel>, payload: AppActionTypes.SetTravelType) {
    const state = ctx.getState();
    const isInternational = payload.travelType.key === 'international';

    ctx.setState({
      ...state,
      travelTypeComponentData: {
        ...state.travelTypeComponentData,
        selectedChoice: {
          label: payload.travelType.name,
          value: payload.travelType.key
        }
      },
      destinationComponentData: {
        ...state.destinationComponentData,
        configuration: {
          ...state.destinationComponentData.configuration,
          visible: isInternational,
          required: isInternational
        }
      },
      explanationData: {
        ...state.explanationData,
        configuration: {
          ...state.explanationData.configuration,
          visible: !isInternational,
          required: !isInternational
        },
        selectedText: ''
      }
    });
  }
}


