/* eslint-disable */
import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { DropDownData } from './drop-down-data';

@Component({
  selector: 'eyassu-ng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true
    }
  ]
})
export class DropDownComponent implements ControlValueAccessor, Validator {
  disabled = false;
  value: Partial<DropDownData> = {};

  onChange: any = () => { }
  onTouch: any = () => { }

  constructor() { }

  writeValue(value: DropDownData): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;

    if (this.value?.configuration) {
      this.value.configuration.disabled = this.disabled;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return !this.value.selectedChoice && this.value.configuration?.required ? { choice: false } : null;
  }

  onDropDownChange(event: any): void {
    this.value.selectedChoice = this.value.choices?.find(c => c.label === event.target.value);
    this.onChange(this.value.selectedChoice);
    this.onTouch();
  }
}
