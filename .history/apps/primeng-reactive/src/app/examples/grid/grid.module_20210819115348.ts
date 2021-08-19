import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ProductService } from './product.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GridComponent
  }
];

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    CommonModule,
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
