import { Injectable } from "@angular/core";
import { Action, State, StateToken } from "@ngxs/store";
import { asapScheduler } from "rxjs";
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
  organizationService: any;

  @Action(AppActionTypes.Load)
  load(ctx: StateContext<OrganizationStateModel>) {
    ctx.patchState({ loading: true });

    return this.organizationService.getOrganizations()
      .pipe(
        map(orgs => {
          asapScheduler.schedule(() => ctx.dispatch(new AppActionTypes.LoadSuccess(orgs)));
        }),
        catchError(() =>
          throwError(asapScheduler.schedule(() => ctx.dispatch(
            new AppActionTypes.LoadFail('Failed to load organizations')))
        )));
  }

}


