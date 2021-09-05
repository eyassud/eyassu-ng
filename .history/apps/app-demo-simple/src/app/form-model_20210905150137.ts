import { Country } from "./country";
import { Decision } from "./decision";

export interface FormModel {
  decision?: Decision;
  country?: Country;
  explanation?: string;
}
