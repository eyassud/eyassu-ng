import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AutoCompleteExRoutingModule } from './auto-complete-ex-routing.module';
import { AutoCompleteExComponent } from './auto-complete-ex.component';


@NgModule({
  declarations: [ AutoCompleteExComponent],
  imports: [
    AutoCompleteExRoutingModule,
    SharedModule
  ],
  exports: [
    AutoCompleteExComponent
  ]
})
export class AutoCompleteExModule { }
