import { NgModule } from '@angular/core';
import { GridExComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ProductService } from './product.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

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
    HttpClientModule,
    SharedModule,
    TableModule
  ],
  exports: [
    GridExComponent
  ],
  providers: [ProductService]
})
export class GridExModule { }
