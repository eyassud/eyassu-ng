import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;
  const value = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceComponent);
    component = fixture.componentInstance;
    component.writeValue(value);
    fixture.detectChanges();
  });

  it('should have two radio buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    const radioButtonsElement: HTMLUListElement = compiled.querySelector('[data-test="choice-radio-buttons"]');

     expect(radioButtonsElement.childElementCount).toBe(value.choices.length);
  });

  it('should be required', () => {
    const compiled = fixture.debugElement.nativeElement;
    const radioButtonsElement = compiled.querySelector('[data-test="Yes"]');
    console.log(JSON.stringify(radioButtonsElement));

     //expect(radioButtonsElement.childElementCount).toBe(value.choices.length);
  });

  it('should only have radio button checked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const yesRadioElement = compiled.querySelector('[data-test="Yes"]');
    const noRadioElement = compiled.querySelector('[data-test="No"]');
    yesRadioElement.click();
    fixture.detectChanges();

    expect(yesRadioElement.checked).toBeTruthy();
    expect(noRadioElement.checked).toBeFalsy();
  });
});
