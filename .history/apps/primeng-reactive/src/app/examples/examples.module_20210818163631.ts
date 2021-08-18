import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [
    DropDownComponent
  ]
})
export class ExamplesModule { }
