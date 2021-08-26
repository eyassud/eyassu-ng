import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from './country.service';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CountryService, ProductService]
})
export class DataAccessJsonModule {}
