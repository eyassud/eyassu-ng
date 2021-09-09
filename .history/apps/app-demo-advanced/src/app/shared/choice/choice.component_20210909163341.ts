import { Component, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
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
  value : Partial<ChoiceData> = {};

  onChange: any = () => { }
  onTouch: any = () => { }

  constructor() { }

  writeValue(value: ChoiceData): void {
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
    return !this.value?.selectedChoice && this.value?.configuration?.required ? { choice: false} : null;
  }

  ngOnInit(): void {

  }

  onChoiceChange(event: any): void {
    this.value.selectedChoice = this.value?.choices?.find(c => c.value === event.target.value);
    this.onChange(this.value?.selectedChoice);
    this.onTouch();
  }
}
