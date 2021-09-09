import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDestinationComponent } from './travel-destination.component';

describe('TravelDestinationComponent', () => {
  let component: TravelDestinationComponent;
  let fixture: ComponentFixture<TravelDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
