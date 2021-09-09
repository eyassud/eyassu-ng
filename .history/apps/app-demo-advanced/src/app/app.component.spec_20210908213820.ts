import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { AppState } from './state/app.state';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
        ReactiveFormsModule,
        ToastModule,
        NgxsModule.forRoot([AppState])
      ],
      declarations: [AppComponent],
      providers:[]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
