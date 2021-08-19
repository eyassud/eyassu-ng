import { NgModule } from '@angular/core';
import { DropDownComponent } from './drop-down.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown'; 'primeng/DropDownModule';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DropDownComponent
  }
];

@NgModule({
  declarations: [
    DropDownComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    //FormsModule,
    DropdownModule,
    ReactiveFormsModule
  ],
  exports: [
    DropDownComponent
  ],
  providers: []
})
export class DropDownModule { }
