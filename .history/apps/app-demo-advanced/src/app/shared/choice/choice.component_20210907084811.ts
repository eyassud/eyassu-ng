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
  selectedValue: Choice | undefined;

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
    return !this.selectedValue && this.value?.configuration.required ? { choice: false} : null;
  }

  ngOnInit(): void {

  }

  onChoiceChange(event: any): void {
    this.selectedValue = this.value?.choices.find(c => c.value === event.target.value);
    this.onChange(this.selectedValue);
    this.onTouch();
  }
}
