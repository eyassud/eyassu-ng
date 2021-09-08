import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './app.state';
import * as AppActionTypes from './app.actions';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../services/app.service';
import { Observable, of } from 'rxjs';
import { DropDown } from '../shared/drop-down/drop-down';
import { Choice } from '../shared/choice/choice';
import { AppModule } from '../app.module';
import { Injectable } from '@angular/core';

const countries = [
  { "label": "Afghanistan", "value": "AF" },
  { "label": "Åland Islands", "value": "AX" },
  { "label": "Albania", "value": "AL" }
];
const travelTypes = [
  {
    "label": "Domestic",
    "value": "domestic"
  },
  {
    "label": "International",
    "value": "international"
  }
];

@Injectable({
  providedIn: 'root'
})
export class MockAppService {
  getCountries(): Observable<DropDown[]> {
    return of(countries);
  }

  getDecisions(): Observable<Choice[]> {
    return of(travelTypes);
  }
}
describe('App', () => {
  let store: Store;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AppState]),
        HttpClientModule,
        AppModule
      ],
      providers: [
        { provide: AppService, useExisting: MockAppService }
      ]
    });

    store = TestBed.inject(Store);
  });

  it('should load lookups', async () => {
    await store.dispatch(new AppActionTypes.Load()).toPromise();

    const app = store.selectSnapshot(state => state.app);
    console.log(JSON.stringify(app));

    expect(app.travelTypeComponentData.choices).toBe(travelTypes);
    expect(app.destinationComponentData.choices).toBe(countries);
  });

  it('should travel types', async () => {
    const type = {key: 'Domestic', name: 'Domestic'};
    await store.dispatch(new AppActionTypes.Load()).toPromise();
    await store.dispatch(new AppActionTypes.UpdateTravelType(type)).toPromise();

    const travelTypeComponentData = store.selectSnapshot(state => state.app.travelTypeComponentData);
    console.log(JSON.stringify(travelTypeComponentData.selectedChoice));

    expect(travelTypeComponentData.selectedChoice).toBe({label:'Domestic',value: 'Domestic'});
  });
});

