import { createSelector } from "@ngxs/store";
import { AppState, AppStateModel } from "./app.state";

export class AppSelectors {

  static getDecisionComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.choiceComponent;
    });
  }
}
