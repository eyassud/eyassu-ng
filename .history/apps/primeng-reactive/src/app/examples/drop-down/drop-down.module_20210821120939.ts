import { NgModule } from '@angular/core';
import { DropDownExComponent } from './drop-down.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { Routes, RouterModule } from '@angular/router';

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
    FormsModule,
    DropdownModule
  ],
  exports: [
    DropDownExComponent
  ],
  providers: []
})
export class DropDownExModule { }
