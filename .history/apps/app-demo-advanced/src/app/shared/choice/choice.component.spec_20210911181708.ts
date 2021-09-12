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
    const radioButtonsElement: HTMLUListElement = compiled.querySelector('[label[for="choice"]');

    expect(radioButtonsElement.childElementCount).toBe(value.choices.length);
  });

  it(`should have the label "${value.label}"`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const asteriskElement = compiled.querySelector('[data-test="choice-label"]');
    console.log(JSON.stringify(asteriskElement));
    //expect(asteriskElement.textContent()).toBe(value.label);
  });

  it('should be required and red asterisk visible', () => {
    const compiled = fixture.debugElement.nativeElement;
    const asteriskElement = compiled.querySelector('[data-test="choice-asterisk"]');

    expect(asteriskElement).toBeTruthy();
  });

  it('should not be required and red asterisk invisible', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.writeValue({
      ...value,
      configuration: {
        ...value.configuration,
        required: false
      }
    });
    fixture.detectChanges();
    const asteriskElement = compiled.querySelector('[data-test="choice-asterisk"]');

    expect(asteriskElement).toBeFalsy();
  });

  it('should only have one radio button checked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const yesRadioElement = compiled.querySelector('[data-test="Yes"]');
    const noRadioElement = compiled.querySelector('[data-test="No"]');
    yesRadioElement.click();
    fixture.detectChanges();

    expect(yesRadioElement.checked).toBeTruthy();
    expect(noRadioElement.checked).toBeFalsy();
  });
});
