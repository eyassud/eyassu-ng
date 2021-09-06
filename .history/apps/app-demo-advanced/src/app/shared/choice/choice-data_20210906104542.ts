import { Configuration } from "../../model/configuration";

export interface ChoiceData<T> {
  configuration: Configuration;
  choices: T[];
}
