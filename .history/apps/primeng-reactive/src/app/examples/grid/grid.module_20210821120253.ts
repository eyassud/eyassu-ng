import { NgModule } from '@angular/core';
import { GridExComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProductService } from './product.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: GridExComponent
  }
];

@NgModule({
  declarations: [
    GridExComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule
  ],
  exports: [
    GridExComponent
  ],
  providers: [ProductService]
})
export class GridExModule { }
