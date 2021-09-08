import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from './state/app.state';
import * as AppActionTypes from './state/app.actions';

describe('App', () => {
  let store: Store;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState])]
    });

    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    store.dispatch(new AppActionTypes.Load());

    const travelType = store.selectSnapshot(state => state.travelTypeComponentData);
    expect(travelType).toBe(true);
  });
});
