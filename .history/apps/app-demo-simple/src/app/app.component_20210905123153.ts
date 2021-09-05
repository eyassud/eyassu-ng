import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Country } from './country';
import { Decision } from './decision';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedDecision!: string;
  decisions!: Decision[];

  displayCountryCtrl = false;
  selectedCountry!: Country;
  countries!: Country[];

  constructor(private readonly appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDecisions()
      .subscribe((data: Decision[]) => {
        this.decisions = data;
        this.selectedDecision = this.decisions[1].key;
      });

    this.appService.getCountries()
      .subscribe(
        (data: Country[]) => {
          this.countries = data;
        }
      )
  }

  //#region Decision
  onDecisionChange(decision: Decision): void {
    console.log(JSON.stringify(decision));

    if (decision.key === 'Yes') {
      this.displayCountryCtrl = true;
    } else {
      this.displayCountryCtrl = false;
    }
  }
  //#endregion

  //#region Country
  onCountryChange(country: string): void {
    console.log(country);
  }
  //#endregion
}
