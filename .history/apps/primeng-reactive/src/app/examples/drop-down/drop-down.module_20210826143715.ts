import { NgModule } from '@angular/core';
import { DropDownExComponent } from './drop-down.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';
import {} from '@eyassu-ng/data-access-json';

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
    SharedModule
  ],
  exports: [
    DropDownExComponent
  ],
  providers: []
})
export class DropDownExModule { }
