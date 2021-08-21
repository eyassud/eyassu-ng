import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'eyassu-ng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownExComponent implements OnInit {

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      dropDown: this.cities[2] // preselect a value
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange(event: Event) {
    // Obtain selected value
    const selectedCity = this.formGroup.get('dropDown')?.value;
    console.log(JSON.stringify(selectedCity));
  }
}

interface City {
  name: string,
  code: string
}
