import { NgModule } from '@angular/core';
import { GridExComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DataAccessJsonModule } from '@eyassu-ng/data-access-json';

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
    DataAccessJsonModule,
    HttpClientModule,
    SharedModule,
    TableModule
  ],
  exports: [
    GridExComponent
  ]
})
export class GridExModule { }
