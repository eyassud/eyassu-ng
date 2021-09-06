import { createSelector } from "@ngxs/store";
import { AppState, AppStateModel } from "./app.state";

export class AppSelectors {

  static getTravelDestinationComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.travelDecisionComponent;
    });
  }

  static getTravelTypeComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.travelDecisionComponent;
    });
  }
}
