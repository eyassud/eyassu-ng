import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyassu-ng-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  cities: City[];

    selectedCity?: City;
  constructor() { }

  ngOnInit(): void {
  }

}


interface City {
  name: string,
  code: string
}
