import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { Choice } from './choice';
import { ChoiceData } from './choice-data';

@Component({
  selector: 'eyassu-ng-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoiceComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ChoiceComponent),
      multi: true
    }
  ]
})
export class ChoiceComponent implements OnInit, ControlValueAccessor, Validator {
  disabled = false;
  selectedValue!: Choice;

  value : ChoiceData | undefined;

  onChange: any = () => { }
  onTouch: any = () => { }

  constructor() { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void{
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && this.value?.configuration.required ? null : { choice: false};
  }

  ngOnInit(): void {

  }

  onDecisionChange(event: any): void {
    const selectedValue = this.value?.choices.find(c => c.value === event.target.value);
    this.onChange(selectedValue);
    this.onTouch();
  }
}
