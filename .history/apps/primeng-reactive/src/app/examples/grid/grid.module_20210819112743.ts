import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ProductService } from './product.service';


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
    TableModule
  ],
  exports: [
    GridComponent
  ],
  providers: [ProductService]
})
export class GridModule { }
