import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AutoCompleteExRoutingModule } from './auto-complete-ex-routing.module';
import { AutoCompleteExComponent } from './auto-complete-ex.component';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessJsonModule } from '@eyassu-ng/data-access-json';


@NgModule({
  declarations: [AutoCompleteExComponent],
  imports: [
    AutoCompleteModule,
    AutoCompleteExRoutingModule,
    DataAccessJsonModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    AutoCompleteExComponent
  ]
})
export class AutoCompleteExModule { }
