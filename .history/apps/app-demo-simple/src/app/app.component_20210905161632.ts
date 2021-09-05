import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';
import { Country } from './country';
import { Decision } from './decision';
import { TripModel } from './trip';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  tripModel!: TripModel;

  decisions!: Decision[];
  selectedDecision!: string;

  countries!: Country[];
  countryRequired = false;
  displayCountryCtrl = false;
  selectedCountry: Country | undefined;

  explanationRequired = false;

  btnClearEnabled = true;
  btSaveEnabled = false;


  constructor(private readonly appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDecisions()
      .subscribe((data: Decision[]) => {
        this.decisions = data;
        //this.selectedDecision = this.decisions[1].key;
        this.initModel();
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

    this.selectedCountry = undefined;

    if (decision.key === 'Yes') {
      this.countryRequired = true;
    } else {
      this.countryRequired = false;
    }
  }
  //#endregion

  //#region Country
  onCountryChange(country: string): void {
    console.log(country);

    if (country === 'Other') {
      this.explanationRequired = true;
    } else {
      this.explanationRequired = false;
    }
  }
  //#endregion

  //#region Buttons
  onClear(): void {
    this.countryRequired = false;
    this.explanationRequired = false;
    this.selectedCountry = undefined;
    this.selectedDecision = this.decisions[1].key;
  }

  onSubmit(model: NgForm): void {
    console.log(JSON.stringify(model));
  }
  //#endregion

  //#region Private methods
  initModel(): void {
    this.tripModel = {
      country: undefined,
      decision: this.decisions[1].key,
      explanation: undefined
    }
  }
  //#endregion
}
