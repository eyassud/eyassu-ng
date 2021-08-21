import { NgModule } from '@angular/core';
import { DropDownExComponent } from './drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

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
    //FormsModule,
    DropdownModule,
    //ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    DropDownExComponent
  ],
  providers: []
})
export class DropDownExModule { }
