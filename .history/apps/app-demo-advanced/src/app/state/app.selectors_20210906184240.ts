import { createSelector } from "@ngxs/store";
import { AppState, AppStateModel } from "./app.state";

export class AppSelectors {

  static getExplanationComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.explanationData;
    });
  }

  static getTravelDestinationComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.destinationComponentData;
    });
  }

  static getTravelTypeComponent() {
    return createSelector([AppState], (state: AppStateModel) => {
      return state.travelTypeComponentData;
    });
  }
}
