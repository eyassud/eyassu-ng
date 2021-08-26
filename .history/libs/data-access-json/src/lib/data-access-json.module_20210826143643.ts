import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';


@NgModule({
  imports: [CommonModule],
  providers: [CountryService]
})
export class DataAccessJsonModule {}
