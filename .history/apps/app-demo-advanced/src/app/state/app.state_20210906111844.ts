import { Injectable } from "@angular/core";
import { State, StateToken } from "@ngxs/store";
import { ChoiceData } from "../shared/choice/choice-data";

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

}
