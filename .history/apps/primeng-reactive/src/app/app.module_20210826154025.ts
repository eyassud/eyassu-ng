import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from '../nav/nav.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autocomplete', loadChildren: () => import('./examples/auto-complete-ex/auto-complete-ex.module').then(m => m.AutoCompleteExModule) },
  { path: 'dropdown', loadChildren: () => import('./examples/drop-down/drop-down.module').then(m => m.DropDownExModule) },
  { path: 'grid', loadChildren: () => import('./examples/grid/grid.module').then(m => m.GridExModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule,
    PanelMenuModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
