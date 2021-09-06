import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { Country } from '../model/country';
import { Decision } from '../model/decision';
import { Choice } from '../shared/choice/choice';
import { DropDown } from '../shared/drop-down/drop-down';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<DropDown[]> {
    return this.http.get<Country[]>('assets/countries.json')
      .pipe(
        mergeMap(countries => countries),
        map((country: Country) => { return { value: country.code, label: country.name } }),
        toArray()
      );
  }

  getDecisions(): Observable<Choice[]> {
    return this.http.get<Decision[]>('assets/decisions.json')
      .pipe(
        mergeMap(decisions => decisions),
        map(decision => {
          return { value: decision.key, label: decision.name };
        }),
        toArray()
      );
  }
}
