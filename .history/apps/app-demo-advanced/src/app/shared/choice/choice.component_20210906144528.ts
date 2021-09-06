import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
    }
  ]
})
export class ChoiceComponent implements OnInit, ControlValueAccessor {
  disabled = false;
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

  ngOnInit(): void {

  }

  onDecisionChange(event: any): void {
    const selectedValue = this.value?.choices.find(c => c.value === event.target.value);
    this.onChange(selectedValue);
  }
}
