import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'dropdown', loadChildren: () => import('./examples/drop-down/drop-down.module').then (m => m.DropDownModule) },
  { path: 'grid', loadChildren: () => import('./examples/grid/grid.module').then (m => m.GridModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
