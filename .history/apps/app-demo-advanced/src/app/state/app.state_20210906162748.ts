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

export interface AppStateModel {
  //#region
  loading: boolean;
  error: string;
  hasError: boolean;
  //#endregion

  //#region Components
  travelTypeComponentData: ChoiceData;
  destinationComponentData: DropDownData;
  //#endregion

  //#region Form Data
  destination: Country | undefined;
  travelType: Decision | undefined;
  //#endregion
}

//#region Initial state
const _travelTypeInitialState: ChoiceData = {
  choices: [],
  configuration: {
    visible: true,
    required: true
  },
  label: 'Are you traveling domestic or international?'
};

const _destinationInitialState: DropDownData = {
  choices: [],
  configuration: {
    visible: false,
    required: false
  },
  label: 'Which country??'
}

const initialState: AppStateModel = {
  loading: false,
  error: '',
  hasError: false,

  destinationComponentData: _destinationInitialState,
  travelTypeComponentData: _travelTypeInitialState,

  destination: undefined,
  travelType: undefined
};
//#endregion

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');
@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initialState
})
@Injectable()
export class AppState {

  constructor(private readonly appService: AppService) {  }

  @Action(AppActionTypes.Load)
  load(ctx: StateContext<AppStateModel>) {
    const state = ctx.getState();
    ctx.patchState({ loading: true });

    const choices$ = this.appService.getDecisions();
    const countries$ = this.appService.getCountries();

    return combineLatest([choices$, countries$])
      .pipe(
        map(([choices, countries]) => {
          ctx.patchState({
            loading: false,
            travelTypeComponentData: {
              ...state.travelTypeComponentData,
              choices: choices,
              configuration: { ...state.travelTypeComponentData.configuration, visible: true, required: true }
            },
            destinationComponentData: {
              ...state.destinationComponentData,
              choices: countries,
              //configuration: { ...state.destinationComponentData.configuration, visible: false }
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

  @Action(AppActionTypes.UpdateDestination)
  UpdateDestination(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateDestination) {
    const state = ctx.getState();

    ctx.patchState({
      destination: payload.country
    });
  }

  @Action(AppActionTypes.UpdateTravelType)
  UpdateTravelType(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateTravelType) {
    const state = ctx.getState();

    if (payload.decision.key === 'International') {
      ctx.patchState({
        destination: undefined,
        travelType: payload.decision,
        destinationComponentData: {
          ...state.destinationComponentData,
          configuration: {
            visible: true,
            required: true
          }
        }
      });
    } else {
      ctx.patchState({
        destination: undefined,
        travelType: payload.decision,
        destinationComponentData: {
          ...state.destinationComponentData,
          configuration: {
            visible: false,
            required: false
          }
        }
      });
    }
  }
}


