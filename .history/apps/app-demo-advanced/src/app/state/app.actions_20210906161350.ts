import { Country } from "../model/country";
import { Decision } from "../model/decision";

export enum AppActionTypes {
  Load = '[App] Load',
  UpdateDestination = '[App] UpdateDestination',
  UpdateTravel = '[App] Update Travel Type'
}

export class Load {
  static readonly type = AppActionTypes.Load;
}

export class UpdateDestination {
  static readonly type = AppActionTypes.UpdateDestination;

  constructor(public country: Country) {  }
}


export class UpdateTravelType {
  static readonly type = AppActionTypes.UpdateTravel;

  constructor(public decision: Decision) {  }
}
