import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownExComponent } from './drop-down.component';

describe('DropDownComponent', () => {
  let component: DropDownExComponent;
  let fixture: ComponentFixture<DropDownExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
