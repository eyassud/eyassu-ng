import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChoiceComponent } from './choice.component';

describe('ChoiceComponent', () => {
  let component: ChoiceComponent;
  let fixture: ComponentFixture<ChoiceComponent>;
  const value = {
    choices: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'N/A', value: 'N/A' }],
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

  it(`should have ${value.choices.length} radio buttons`, () => {
    const compiled = fixture.debugElement.nativeElement;
    const radioButtons = compiled.querySelectorAll('input[type="radio"]');

    expect(radioButtons.length).toBe(value.choices.length);
  });

  it(`should have the label "${value.label}"`, () => {
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const asteriskElement: HTMLLabelElement = compiled.querySelector('[data-test="choice-label"]');

    expect(asteriskElement.textContent).toBe(value.label);
  });

  it('should have a red asterisk visible when input is required', () => {
    const compiled = fixture.debugElement.nativeElement;
    const asteriskElement = compiled.querySelector('[data-test="choice-asterisk"]');

    expect(asteriskElement).toBeTruthy();
  });

  it('should not have a red asterisk visible when not required', () => {
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
    //const yesRadioElement = compiled.querySelector('[data-test="Yes"]');
    //const noRadioElement = compiled.querySelector('[data-test="No"]');
    const radioButtons: NodeList = compiled.querySelectorAll('[data-test^="option"]');
    console.log(Object.prototype.toString.call(radioButtons));
    //radioButtons?.item(0)?.simulate('click', { target: { checked: true } });
    fixture.detectChanges();

    //expect(radioButtons.findAll(r => r.checked).length).toBe(1);
    //expect(noRadioElement.checked).toBeFalsy();
  });
});
