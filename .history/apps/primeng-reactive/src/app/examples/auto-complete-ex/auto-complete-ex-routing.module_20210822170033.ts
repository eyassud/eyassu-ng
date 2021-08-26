import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteExComponent } from './auto-complete-ex.component';

const routes: Routes = [
  { path: '', component: AutoCompleteExComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCompleteExRoutingModule { }
