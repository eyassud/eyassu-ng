import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.prod';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './shared/choice/choice.component';

@NgModule({
  declarations: [AppComponent, ChoiceComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
