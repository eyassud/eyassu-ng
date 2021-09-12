import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceComponent],
      //imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
    component.writeValue({
      choices: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }],
      label: 'Do you want to take a trip?',
      configuration: {
        disabled: false,
        readOnly: false,
        required: true,
        visible: true
      },
      selectedChoice: undefined
    });
    fixture.detectChanges();
  });

  it('should yes and no choice button', () => {
    let options: DebugElement = fixture.debugElement.query(By.css('[input=data-choice'));
    expect(component).toBeTruthy();
  });
});
