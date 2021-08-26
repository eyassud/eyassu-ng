import { Component, OnInit } from '@angular/core';
import { FilterService } from 'primeng/api';
//import { CountryService } from './countriesservice';
import { CountryService } from 'libs/data-access-json/src/lib/country.service';

@Component({
  selector: 'eyassu-ng-auto-complete-ex',
  templateUrl: './auto-complete-ex.component.html',
  styleUrls: ['./auto-complete-ex.component.scss']
})
export class AutoCompleteExComponent implements OnInit {

  selectedCountry: any;

  countries!: any[];

  filteredCountries!: any[];

  constructor(
    private readonly countryService: CountryService,
    private readonly filterService: FilterService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
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
}
