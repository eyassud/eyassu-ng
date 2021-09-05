import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Decision } from './decision';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedDecision!: string;

  decisions!: Decision[];

  constructor(private readonly appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDecisions()
      .subscribe((data: Decision[]) => {
        this.decisions = data;
        this.selectedDecision = this.decisions[1].key;
      });
  }
}
