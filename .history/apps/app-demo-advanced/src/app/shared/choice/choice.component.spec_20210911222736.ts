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
    const radioButtons: NodeList = compiled.querySelectorAll('[data-test^="option"]');

    (<HTMLInputElement>radioButtons?.item(0)).click();
    fixture.detectChanges();

    let count = 0;

    radioButtons.forEach((node) => {
      const radioButton = <HTMLInputElement>node;

      if (radioButton.checked) {
        count++;
      }
    });

    expect(count).toBe(1);
  });

  it('should call method onChoiceChange(event: any) when a radio button is checked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const radioButtons = compiled.querySelectorAll('[data-test^="option"]');
    jest.spyOn(component, 'onChoiceChange');
    console.log(JSON.stringify(component.value.selectedChoice));
    (<HTMLInputElement>radioButtons?.item(1)).click();
    (<HTMLInputElement>radioButtons?.item(0)).click();
    fixture.detectChanges();

    expect(component.onChoiceChange).toHaveBeenCalled();
  });
});
