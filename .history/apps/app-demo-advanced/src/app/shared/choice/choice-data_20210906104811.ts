import { Configuration } from "../../model/configuration";
import { Choice } from "./choice";

export interface ChoiceData {
  configuration: Configuration;
  choices: Choice[];
}
