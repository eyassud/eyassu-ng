import { Configuration } from "../../model/configuration";
import { Choice } from "./choice";

export interface ChoiceData {
  choices: Choice[];
  configuration: Configuration;
}
