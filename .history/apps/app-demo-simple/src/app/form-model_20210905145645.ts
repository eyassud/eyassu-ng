import { Country } from "./country";
import { Decision } from "./decision";

export interface Model {
  decision: Decision;
  country: Country;
  explanation: string;
}
