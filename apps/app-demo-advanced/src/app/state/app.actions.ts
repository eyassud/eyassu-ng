import { Decision } from "../model/decision";

export enum AppActionTypes {
  Load = '[App] Load',
  UpdateDecision = '[App] Update Decision'
}

export class Load {
  static readonly type = AppActionTypes.Load;
}

export class UpdateDecision {
  static readonly type = AppActionTypes.UpdateDecision;

  constructor(public decision: Decision) {  }
}
