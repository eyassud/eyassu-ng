import { Configuration } from "../model/configuration";
import { TravelRequirement } from "../model/travel-requirement";

export interface TravelRequirementsData {
  configuration: Configuration;
  requirements: TravelRequirement[] | undefined;
}
