import { NgModule } from '@angular/core';
import { DropDownExComponent } from './drop-down.component';
import { DropdownModule } from 'primeng/dropdown';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

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
    DropdownModule, FormsModule,
    SharedModule
  ],
  exports: [
    DropDownExComponent
  ],
  providers: []
})
export class DropDownExModule { }
