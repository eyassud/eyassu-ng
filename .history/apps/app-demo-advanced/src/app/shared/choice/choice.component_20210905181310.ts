import { Component, OnInit, forwardRef, HostBinding, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Configurable } from '../../model/configurable';
import { ChoiceConfig } from './choice-config';

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
export class ChoiceComponent implements OnInit, ControlValueAccessor, Configurable<ChoiceConfig> {
  config: ChoiceConfig | undefined;
  disabled = false;
  val : ChoiceConfig | undefined;

  onChange: any = () => { }
  onTouch: any = () => { }

  set value(val: ChoiceConfig) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val
    this.onChange(val)
    this.onTouch(val)
  }

  constructor() {
    this.config = undefined;
  }

  setConfiguration(config: ChoiceConfig): void {
    this.config = config;
  }


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
}
