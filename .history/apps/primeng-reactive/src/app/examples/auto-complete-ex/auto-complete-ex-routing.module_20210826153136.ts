import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AutoCompleteExComponent } from './auto-complete-ex.component';

const routes: Routes = [
  { path: '', component: AutoCompleteExComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  SharedModule],
  exports: [RouterModule]
})
export class AutoCompleteExRoutingModule { }
