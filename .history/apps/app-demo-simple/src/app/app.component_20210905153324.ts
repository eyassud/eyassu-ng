import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Country } from './country';
import { Decision } from './decision';
import { FormModel } from './form-model';

@Component({
  selector: 'eyassu-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  formModel!: FormModel;

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
        this.selectedDecision = this.decisions[1].key;
        this.formModel = {
          country: undefined,
          decision: this.decisions[1].key,
          explanation: undefined
        }
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

    if (country === 'Other')
    {
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

  onSubmit(model: FormModel) : void {
    console.log(JSON.stringify(model));
  }
  //#endregion
}
