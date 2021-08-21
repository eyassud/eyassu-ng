import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridExComponent;
  let fixture: ComponentFixture<GridExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
