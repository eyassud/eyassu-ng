/* eslint-disable */
import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { TextArea } from './text-area';
import { TextAreaData } from './text-area-data';

@Component({
  selector: 'eyassu-ng-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TextAreaComponent implements ControlValueAccessor, Validator {
  disabled = false;
  textArea: TextArea | undefined;
  value: TextAreaData | undefined;

  onChange: any = () => { }
  onTouch: any = () => { }

  constructor() { }

  writeValue(value: TextAreaData): void {
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

    if (this.value?.configuration){
      this.value.configuration.disabled = this.disabled;
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return (!this.textArea || this.textArea?.text.length === 0) && this.value?.configuration.required ? { textArea: false } : null;
  }

  onTextAreaChange(event: any): void {
    this.textArea = { text: event.target.value };
    this.onChange(this.textArea);
    this.onTouch();
  }
}
