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


// import { TestBed } from '@angular/core/testing';
// import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AppComponent],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'app-demo-advanced'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('app-demo-advanced');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('h1')?.textContent).toContain(
//       'Welcome to app-demo-advanced!'
//     );
//   });
// });
