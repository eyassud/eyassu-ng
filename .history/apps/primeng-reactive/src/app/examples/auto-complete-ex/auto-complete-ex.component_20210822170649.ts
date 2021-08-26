import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eyassu-ng-auto-complete-ex',
  templateUrl: './auto-complete-ex.component.html',
  styleUrls: ['./auto-complete-ex.component.scss']
})
export class AutoCompleteExComponent implements OnInit {

  selectedCountry: any;

  countries!: any[];

  filteredCountries!: any[];

  constructor(private countryService: CountryService,
    private filterService: FilterService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

}
