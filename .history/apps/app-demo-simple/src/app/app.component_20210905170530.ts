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

  countries!: Country[];
  countryRequired = false;
  displayCountryCtrl = false;

  explanationRequired = false;

  btnClearEnabled = true;
  btSaveEnabled = false;

  constructor(private readonly appService: AppService) { }

  ngOnInit(): void {
    this.appService.getDecisions()
      .subscribe((data: Decision[]) => {
        this.decisions = data;
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

    this.explanationRequired = false;

    if (decision.key === 'Yes') {
      this.countryRequired = true;
    } else {
      this.countryRequired = false;
    }

    this.initModel();
  }
  //#endregion

  //#region Country
  onCountryChange(country: string): void {
    console.log(country);

    if (country === 'Other') {
      this.explanationRequired = true;
    } else {
      this.explanationRequired = false;
      this.tripModel.explanation = '';
    }
  }
  //#endregion

  //#region Buttons
  onClear(form: NgForm): void {
    this.countryRequired = false;
    this.explanationRequired = false;
    this.initModel();
    form.resetForm();
  }

  onSubmit(form: NgForm): void {
    alert('Trip was saved.');
  }
  //#endregion

  //#region Private methods
  private initModel(): void {
    this.tripModel = {
      country: undefined,
      decision: undefined,
      explanation: undefined
    }
  }
  //#endregion
}
