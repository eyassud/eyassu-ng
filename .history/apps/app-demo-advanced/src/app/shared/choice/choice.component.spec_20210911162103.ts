import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceComponent],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.value = {
      choices: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }],
      label: 'Do you want to take a trip?',
      configuration: {
        disabled: false,
        readOnly: false,
        required: true,
        visible: true
      }
    }

    expect(component).toBeTruthy();
  });
});
