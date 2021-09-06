import { Country } from "../model/country";
import { Decision } from "../model/decision";
import { TextArea } from "../shared/text-area/text-area";

export enum AppActionTypes {
  Load = '[App] Load',
  UpdateDestination = '[App] Update Destination',
  UpdateTextArea = '[App] Update Text Area',
  UpdateTravel = '[App] Update Travel Type'
}

export class Load {
  static readonly type = AppActionTypes.Load;
}

export class UpdateDestination {
  static readonly type = AppActionTypes.UpdateDestination;

  constructor(public country: Country) {  }
}

export class UpdateTextArea {
  static readonly type = AppActionTypes.UpdateTextArea;

  constructor(public textArea: TextArea) {  }
}
export class UpdateTravelType {
  static readonly type = AppActionTypes.UpdateTravel;

  constructor(public travelType: Decision) {  }
}
