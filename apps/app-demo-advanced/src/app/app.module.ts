import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.prod';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './shared/choice/choice.component';
import { AppState } from './state/app.state';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { TextAreaComponent } from './shared/text-area/text-area.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { TravelRequirementsComponent } from './travel-requirements/travel-requirements.component';

@NgModule({
  declarations: [AppComponent, ChoiceComponent, DropDownComponent, TextAreaComponent, TravelRequirementsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
