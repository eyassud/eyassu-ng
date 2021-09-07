import { Configuration } from "../../model/configuration";
import { DropDown } from "./drop-down";

export interface DropDownData {
  choices: DropDown[];
  configuration: Configuration;
  label: string;
  selectedChoice: DropDown | undefined;
}
