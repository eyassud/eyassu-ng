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

  it('should be only one checked radio button', () => {

    const compiled = fixture.debugElement.nativeElement;
    const yesRadioElement = compiled.querySelector('[data-test="Yes"]');
    const noRadioElement = compiled.querySelector('[data-test="No"]');
    yesRadioElement.click();
    fixture.detectChanges();

    expect(yesRadioElement.checked).toBeTruthy();
    expect(noRadioElement.checked).toBeFalsy();
  });
});
