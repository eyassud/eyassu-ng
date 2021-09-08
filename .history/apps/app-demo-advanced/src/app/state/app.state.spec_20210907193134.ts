import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './app.state';
import * as AppActionTypes from './app.actions';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../services/app.service';
import { Observable, of } from 'rxjs';
import { Country } from '../model/country';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { DropDown } from '../shared/drop-down/drop-down';
import { Choice } from '../shared/choice/choice';
import { AppModule } from '../app.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockAppService {
  getCountries(): Observable<DropDown[]> {
    return of([
      { "name": "Afghanistan", "code": "AF" },
      { "name": "Åland Islands", "code": "AX" },
      { "name": "Albania", "code": "AL" }
    ]).pipe(
      mergeMap(countries => countries),
      map((country: Country) => { return { value: country.code, label: country.name } }),
      toArray()
    );
  }

  getDecisions(): Observable<Choice[]> {
    return of([
      {
        "name": "Domestic",
        "key": "domestic"
      },
      {
        "name": "International",
        "key": "international"
      }
    ]).pipe(
        mergeMap(decisions => decisions),
        map(decision => {
          return { value: decision.key, label: decision.name };
        }),
        toArray()
      );
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

    const x = store.selectSnapshot(state => state.app);
    console.log(JSON.stringify(x));
    const travelTypeComponentData = store.selectSnapshot(state => state.app.travelTypeComponentData);
    console.log(JSON.stringify(travelTypeComponentData));
    expect(travelTypeComponentData.label).toBe('Are you traveling domestic or international?');
  });
});

