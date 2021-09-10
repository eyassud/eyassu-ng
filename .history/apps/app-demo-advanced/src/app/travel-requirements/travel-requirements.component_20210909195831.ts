import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TextAreaComponent } from '../shared/text-area/text-area.component';
import { TravelRequirementsData } from './travel-requirements-data';

@Component({
  selector: 'eyassu-ng-travel-requirements',
  templateUrl: './travel-requirements.component.html',
  styleUrls: ['./travel-requirements.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true
    }
  ]
})
export class TravelRequirementsComponent implements ControlValueAccessor {

  value: TravelRequirementsData | undefined;

  onChange: any = () => { }
  onTouch: any = () => { }

  constructor() { }

  writeValue(value: TravelRequirementsData): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
}
