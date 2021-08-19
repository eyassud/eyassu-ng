import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownComponent } from './drop-down.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DropDownComponent
  ],
  providers: []
})
export class DropDownModule { }
