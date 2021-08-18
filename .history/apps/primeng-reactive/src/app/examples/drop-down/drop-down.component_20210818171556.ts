import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'eyassu-ng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  cities: City[] = [];
  dropDown?: FormControl;
  selectedCity?: City;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.fb.group({
      dropDown: this.cities
    });
  }
}

interface City {
  name: string,
  code: string
}
