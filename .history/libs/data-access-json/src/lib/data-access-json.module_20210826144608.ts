import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { ProductService } from './product.service';


@NgModule({
  imports: [CommonModule],
  providers: [CountryService, ProductService]
})
export class DataAccessJsonModule {}
