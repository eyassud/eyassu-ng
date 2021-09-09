import { Country } from "./country";
import { Decision } from "./decision";

export interface TravelForm {
  tripType: Decision;
  destination?: Country;
  explanation?: string;
}
