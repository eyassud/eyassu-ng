import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [AppComponent, ChoiceComponent, DropDownComponent, TextAreaComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
