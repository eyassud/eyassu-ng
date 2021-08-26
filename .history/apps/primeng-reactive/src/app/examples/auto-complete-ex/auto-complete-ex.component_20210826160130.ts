import { Component, OnInit } from '@angular/core';
import { CountryService } from '@eyassu-ng/data-access-json';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'eyassu-ng-auto-complete-ex',
  templateUrl: './auto-complete-ex.component.html',
  styleUrls: ['./auto-complete-ex.component.scss']
})
export class AutoCompleteExComponent implements OnInit {

  formGroup!: FormGroup;
  countries!: any[];
  filteredCountries!: any[];

  constructor(
    private readonly countryService: CountryService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });

    this.formGroup = this.fb.group({
      'autoComplete': {"name":"United States","code":"US"} // Prepopulate value
    })
  }

  filterCountry(event: any) {
    const filtered: any[] = [];
    const query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      const country = this.countries[i];

      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  onSelect(value: any) {
    const selectedCountry = this.formGroup.get('autoComplete')?.value;
    console.log(JSON.stringify(selectedCountry));
  }
}
