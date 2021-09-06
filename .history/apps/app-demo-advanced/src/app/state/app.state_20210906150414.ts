import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AppService } from "../services/app.service";
import { ChoiceData } from "../shared/choice/choice-data";
import { catchError, map } from 'rxjs/operators';
import * as AppActionTypes from './app.actions';
import { combineLatest, of } from "rxjs";
import { Decision } from "../model/decision";
import { Country } from "../model/country";

export interface AppStateModel {
  //#region
  loading: boolean;
  error: string;
  hasError: boolean;
  //#endregion

  //#region Components
  choiceComponent: ChoiceData;
  //#endregion

  //#region Form Data
  countryDecision: Country | undefined;
  travelDecision: Decision | undefined;
  //#endregion
}

//#region Initial state
const _choiceComponentInitialState: ChoiceData = {
  choices: [],
  configuration: {
    visible: false
  }

};

const initialState: AppStateModel = {
  loading: false,
  error: '',
  hasError: false,

  choiceComponent: _choiceComponentInitialState,

  countryDecision: undefined,
  travelDecision: undefined
};
//#endregion

export const APP_STATE_TOKEN = new StateToken<AppStateModel>('app');
@State<AppStateModel>({
  name: APP_STATE_TOKEN,
  defaults: initialState
})
@Injectable()
export class AppState {

  constructor(private readonly appService: AppService) {

  }

  @Action(AppActionTypes.Load)
  load(ctx: StateContext<AppStateModel>) {
    ctx.patchState({ loading: true });

    const choices$ = this.appService.getDecisions();
    const countries$ = this.appService.getCountries();

    return combineLatest([choices$, countries$])
      .pipe(
        map(([choices, countries]) => {
          ctx.patchState({
            choiceComponent: { choices: choices, configuration: { visible: true } }
          });

        return of();
        }),
        catchError(() => {
          ctx.patchState({ loading: false, error: 'Load failed', hasError: true });

          return of();
        })
      );

    return decisions$
      .pipe(
        map(choices => {
          ctx.patchState({
            choiceComponent: { choices: choices, configuration: { visible: true } }
          });

         return of();
        }),
        catchError(() => {
          ctx.patchState({ loading: false, error: 'Load failed', hasError: true });

          return of();
        })
      );
  }

  @Action(AppActionTypes.UpdateDecision)
  UpdateDecision(ctx: StateContext<AppStateModel>, payload: AppActionTypes.UpdateDecision) {
    ctx.patchState({ travelDecision: payload.decision });
  }
}


