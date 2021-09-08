import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './state/app.state';
import * as AppActionTypes from './state/app.actions';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './services/app.service';
import { Observable, of } from 'rxjs';
import { Country } from './model/country';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { DropDown } from './shared/drop-down/drop-down';
import { Choice } from './shared/choice/choice';

class MockAppService {
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
        HttpClientModule
      ],
      providers: [
        { provide: AppService, MockAppService }
      ]
    });

    store = TestBed.inject(Store);
  });

  it('should load lookups', async () => {
    await store.dispatch(new AppActionTypes.Load()).toPromise();

    const travelType = store.selectSnapshot(state => state.travelTypeComponentData);
    expect(travelType).toBe(true);
  });
});

