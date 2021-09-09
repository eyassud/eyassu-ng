import { Country } from "../model/country";
import { Decision } from "../model/decision";
import { TextArea } from "../shared/text-area/text-area";

export enum AppActionTypes {
  LoadLookups = '[App] Load Lookups',
  ResetTravelForm = '[App] Reset Travel Form',
  SaveTravelForm = '[App] Save Travel Form',
  SetDestination = '[App] Set Destination',
  SetTravelExplanation = '[App] Set Travel Explanation',
  SetTravelType = '[App] Set Travel Type'
}

export class LoadLookups {
  static readonly type = AppActionTypes.LoadLookups;
}

export class SaveTravelForm {
  static readonly type = AppActionTypes.SaveTravelForm;
}

export class ResetTravelForm {
  static readonly type = AppActionTypes.ResetTravelForm;
}

export class SetDestination {
  static readonly type = AppActionTypes.SetDestination;

  constructor(public destination: Country) {  }
}

export class SetTravelExplanation {
  static readonly type = AppActionTypes.SetTravelExplanation;

  constructor(public explanation: TextArea) {  }
}
export class SetTravelType {
  static readonly type = AppActionTypes.SetTravelType;

  constructor(public travelType: Decision) {  }
}
