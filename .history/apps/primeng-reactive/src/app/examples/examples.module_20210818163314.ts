import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    DropDownComponent
  ]
})
export class ExamplesModule { }
