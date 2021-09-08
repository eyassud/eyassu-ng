import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './state/app.state';
import * as AppActionTypes from './state/app.actions';
import { HttpClientModule } from '@angular/common/http';

describe('App', () => {
  let store: Store;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot([AppState]),
        HttpClientModule
      ]
    });

    store = TestBed.inject(Store);
  });

  it('should load lookups', () => {
    store.dispatch(new AppActionTypes.Load());

    const travelType = store.selectSnapshot(state => state.travelTypeComponentData);
    expect(travelType).toBe(true);
  });
});

