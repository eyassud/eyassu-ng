import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropDownComponent
  ]
})
export class ExamplesModule { }
