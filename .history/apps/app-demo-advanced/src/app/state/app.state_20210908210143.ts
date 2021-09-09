import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AppService } from "../services/app.service";
import { ChoiceData } from "../shared/choice/choice-data";
import { catchError, map } from 'rxjs/operators';
import * as AppActionTypes from './app.actions';
import { combineLatest, of } from "rxjs";
import { DropDownData } from "../shared/drop-down/drop-down-data";
import { TextAreaData } from "../shared/text-area/text-area-data";
import { TravelForm } from "../model/travel-form";
import { Decision } from "../model/decision";

export interface AppStateModel {
  //#region
  loading: boolean;
  error: string;
  hasError: boolean;
  saved: boolean;
  //#endregion

  //#region Components
  travelTypeComponentData: ChoiceData;
  destinationComponentData: DropDownData;
  explanationData: TextAreaData;
  //#endregion
}

//#region Initial state
const _travelTypeInitialState: ChoiceData = {
  choices: [],
  configuration: {
    enabled: true,
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
    enabled: true,
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
    enabled: true,
    readOnly: false,
    visible: false,
    required: false
  },
  label: 'Please describe where you are going domestically'
}

const initialState: AppStateModel = {
  loading: false,
  error: '',
  hasError: false,
  saved: false,

  destinationComponentData: _destinationInitialState,
  travelTypeComponentData: _travelTypeInitialState,
  explanationData: _explanationInitialState,
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

  @Action(AppActionTypes.Load)
  load(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ loading: true });

    const travelTypes$ = this.appService.getDecisions();
    const countries$ = this.appService.getCountries();

    return combineLatest([travelTypes$, countries$])
      .pipe(
        map(([travelTypes, countries]) => {
          ctx.patchState({
            loading: false,
            travelTypeComponentData: {
              ...state.travelTypeComponentData,
              choices: travelTypes
            },
            destinationComponentData: {
              ...state.destinationComponentData,
              choices: countries
            }
          });

          return of();
        }),
        catchError(() => {
          ctx.patchState({ loading: false, error: 'Load failed', hasError: true });

          return of();
        })
      );
  }

  @Action(AppActionTypes.ResetTravelForm)
  resetTravelForm(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      travelTypeComponentData: {
        ...state.travelTypeComponentData,
        selectedChoice: undefined
      },
      destinationComponentData: {
         ...state.destinationComponentData,
         selectedChoice: undefined,
         configuration : {
           ...state.destinationComponentData.configuration,
           required: false,
           visible: false
         }
      },
      explanationData: _explanationInitialState
    });
  }

  @Action(AppActionTypes.ResetTravelForm)
  saveTravelForm(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();
    const tripType: Decision = {
      key: state.travelTypeComponentData?.selectedChoice?.value as string,
      name: state.travelTypeComponentData?.selectedChoice?.label as string
    };
    const destination = state.destinationComponentData.selectedChoice?.value ? {
      code: state.destinationComponentData.selectedChoice?.value as string,
      name: state.destinationComponentData.selectedChoice?.label as string,
    } : undefined;
    const explanation = state.explanationData.selectedText;
    const travelForm: TravelForm = { tripType, destination, explanation }

    return this.appService.saveTravelForm(travelForm)
      .pipe(
        map(saved => ctx.setState({
          ...state,
          saved
        }))
      );
  }

  @Action(AppActionTypes.UpdateDestination)
  UpdateDestination(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateDestination) {
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
    });
  }

  @Action(AppActionTypes.UpdateExplanation)
  UpdateExplanation(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateExplanation) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      explanationData: {
        ...state.explanationData,
        selectedText: payload.explanation.text
      }
    });
  }

  @Action(AppActionTypes.UpdateTravelType)
  UpdateTravelType(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateTravelType) {
    const state = ctx.getState();

    if (payload.travelType.key === 'international') {
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
            visible: true,
            required: true
          }
        },
        explanationData: {
          ...state.explanationData,
          configuration: {
            ...state.explanationData.configuration,
            visible: false,
            required: false
          },
          selectedText: undefined
        }
      });
    } else {
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
            visible: false,
            required: false
          }
        },
        explanationData: {
          ...state.explanationData,
          configuration: {
            ...state.explanationData.configuration,
            visible: true,
            required: true
          },
          selectedText: ''
        }
      });
    }
  }
}


