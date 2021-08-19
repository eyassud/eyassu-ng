import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';
import {TableModule} from 'primeng/table';
import { ProductService } from './grid/product.service';
import { HttpClientModule } from '@angular/common/http';
import { DropDownModule } from '../examples/drop-down/drop-down.module';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DropDownModule
  ],
  exports: [
    GridComponent
  ],
  providers: [ProductService]
})
export class ExamplesModule { }
