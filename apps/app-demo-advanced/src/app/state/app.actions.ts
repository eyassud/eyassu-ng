import { Country } from "../model/country";
import { Decision } from "../model/decision";
import { TextArea } from "../shared/text-area/text-area";

export enum AppActionTypes {
  Load = '[App] Load',
  ResetTravelForm = '[App] Reset Travel Form',
  SaveTravelForm = '[App] Save Travel Form',
  UpdateDestination = '[App] Update Destination',
  UpdateExplanation = '[App] Update Explanation',
  UpdateTravel = '[App] Update Travel Type'
}

export class Load {
  static readonly type = AppActionTypes.Load;
}

export class SaveTravelForm {
  static readonly type = AppActionTypes.SaveTravelForm;
}

export class ResetTravelForm {
  static readonly type = AppActionTypes.ResetTravelForm;
}

export class UpdateDestination {
  static readonly type = AppActionTypes.UpdateDestination;

  constructor(public destination: Country) {  }
}

export class UpdateExplanation {
  static readonly type = AppActionTypes.UpdateExplanation;

  constructor(public explanation: TextArea) {  }
}
export class UpdateTravelType {
  static readonly type = AppActionTypes.UpdateTravel;

  constructor(public travelType: Decision) {  }
}
