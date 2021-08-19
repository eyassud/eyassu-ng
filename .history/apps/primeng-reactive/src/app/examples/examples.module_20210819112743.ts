import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { DropDownModule } from '../examples/drop-down/drop-down.module';
import { GridModule } from './grid/grid.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DropDownModule,
    GridModule
  ],
  exports: [
    DropDownModule,
    GridModule
  ],
  providers: []
})
export class ExamplesModule { }
