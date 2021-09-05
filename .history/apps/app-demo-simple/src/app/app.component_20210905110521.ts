import { Component, OnInit } from '@angular/core';
import { Decision } from './decision';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedDecision!: string;

  decisions: Decision[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }];

  ngOnInit(): void {
    this.selectedDecision = this.decisions[1].key;
  }
}
