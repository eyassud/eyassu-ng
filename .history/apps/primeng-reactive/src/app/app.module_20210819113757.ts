import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { DropDownComponent } from './examples/drop-down/drop-down.component';
import { ExamplesModule } from './examples/examples.module';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'dropdown', component: DropDownComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ExamplesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
