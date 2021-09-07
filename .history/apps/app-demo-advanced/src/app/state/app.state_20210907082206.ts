import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AppService } from "../services/app.service";
import { ChoiceData } from "../shared/choice/choice-data";
import { catchError, map } from 'rxjs/operators';
import * as AppActionTypes from './app.actions';
import { combineLatest, of } from "rxjs";
import { Decision } from "../model/decision";
import { Country } from "../model/country";
import { DropDownData } from "../shared/drop-down/drop-down-data";
import { TextAreaData } from "../shared/text-area/text-area-data";

export interface AppStateModel {
  //#region
  loading: boolean;
  error: string;
  hasError: boolean;
  //#endregion

  //#region Components
  travelTypeComponentData: ChoiceData;
  destinationComponentData: DropDownData;
  explanationData: TextAreaData;
  //#endregion

  //#region Form Data
  // destination: Country | undefined;
  // travelType: Decision | undefined;
  // explanation: string | undefined;
  //#endregion
}

//#region Initial state
const _travelTypeInitialState: ChoiceData = {
  choices: [],
  configuration: {
    visible: true,
    required: true
  },
  label: 'Are you traveling domestic or international?',
  selectedChoice: undefined
};

const _destinationInitialState: DropDownData = {
  choices: [],
  configuration: {
    visible: false,
    required: false
  },
  label: 'Which country?',
  selectedChoice: undefined
}

const _explanationInitialState: TextAreaData = {
  selectedText: '',
  configuration: {
    visible: false,
    required: false
  },
  label: 'Please describe where you are going domestically'
}

const initialState: AppStateModel = {
  loading: false,
  error: '',
  hasError: false,

  destinationComponentData: _destinationInitialState,
  travelTypeComponentData: _travelTypeInitialState,
  explanationData: _explanationInitialState,

  // destination: undefined,
  // travelType: undefined,
  // explanation: undefined
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

  @Action(AppActionTypes.ResetForm)
  resetForm(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...ctx.getState(),
      travelTypeComponentData: {
        ...state.travelTypeComponentData,
        selectedChoice: undefined,
      },
      destinationComponentData: {
        ...state.destinationComponentData,
        selectedChoice: undefined
      }
    });
  }

  @Action(AppActionTypes.UpdateDestination)
  UpdateDestination(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateDestination) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      travelTypeComponentData: {
        ...state.travelTypeComponentData,
        selectedChoice: undefined
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
        selectedText: undefined
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
          selectedChoice: undefined
        },
        destinationComponentData: {
          ...state.destinationComponentData,
          configuration: {
            visible: true,
            required: true
          }
        },
        explanationData: {
          ...state.explanationData,
          configuration: {
            visible: false,
            required: false
          }
        }
      });
    } else {
      ctx.setState({
        ...state,
        destinationComponentData: {
          ...state.destinationComponentData,
          configuration: {
            visible: false,
            required: false
          }
        },
        explanationData: {
          ...state.explanationData,
          configuration: {
            visible: true,
            required: true
          }
        }
      });
    }
  }
}


