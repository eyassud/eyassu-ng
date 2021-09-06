import { Injectable } from "@angular/core";
import { Action, State, StateContext, StateToken } from "@ngxs/store";
import { AppService } from "../services/app.service";
import { ChoiceData } from "../shared/choice/choice-data";
import * as AppActionTypes from './app.actions';

export interface AppStateModel {
  //#region
  loading: boolean;
  error: string;
  hasError: boolean;
  //#endregion

  //#region Components
  choiceComponentState: ChoiceData;
  //#endregion
}

//#region Initial state
const _choiceComponentState: ChoiceData = {
  choices: [],
  configuration: {
    visible: false
  }
};

const initialState: AppStateModel = {
  loading: false,
  error: '',
  hasError: false,
  choiceComponentState: _choiceComponentState
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

    return choices$
      .pipe(
        map(choices => {
          ctx.patchState({
            choiceComponentState: { choices, configuration: {visible: true}}
          })
        }),
        catchError(() =>
          ctx.patchState({ loading: false, error: 'Load failed', hasError: true})
        ));
  }

}


