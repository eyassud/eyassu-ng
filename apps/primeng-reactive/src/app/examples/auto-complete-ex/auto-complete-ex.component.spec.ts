import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteExComponent } from './auto-complete-ex.component';

describe('AutoCompleteExComponent', () => {
  let component: AutoCompleteExComponent;
  let fixture: ComponentFixture<AutoCompleteExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
