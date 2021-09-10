import { Configuration } from "../model/configuration";

export interface TravelRequirementsData {
  configuration: Configuration;
  requirements: string[] | undefined;
}
