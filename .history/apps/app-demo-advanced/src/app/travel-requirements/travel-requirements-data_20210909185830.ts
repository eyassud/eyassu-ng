import { Configuration } from "../model/configuration";

export interface TravelRequirementsData {
  configuration: Configuration;
  label: string;
  requirements: string[];
}
