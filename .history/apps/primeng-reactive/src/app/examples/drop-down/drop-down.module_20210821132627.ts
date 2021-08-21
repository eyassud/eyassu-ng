import { NgModule } from '@angular/core';
import { DropDownExComponent } from './drop-down.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DropDownExComponent
  }
];

@NgModule({
  declarations: [
    DropDownExComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    DropdownModule,
    SharedModule, ReactiveFormsModule
  ],
  exports: [
    DropDownExComponent
  ],
  providers: []
})
export class DropDownExModule { }
