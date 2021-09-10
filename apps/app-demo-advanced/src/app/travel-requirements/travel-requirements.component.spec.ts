import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRequirementsComponent } from './travel-requirements.component';

describe('TravelRequirementsComponent', () => {
  let component: TravelRequirementsComponent;
  let fixture: ComponentFixture<TravelRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
