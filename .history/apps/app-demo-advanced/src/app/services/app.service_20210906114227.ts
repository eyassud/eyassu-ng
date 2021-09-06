import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, toArray} from 'rxjs/operators';
import { Country } from '../model/country';
import { Decision } from '../model/decision';
import { Choice } from '../shared/choice/choice';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Choice[]> {
    return this.http.get<Country[]>('assets/countries.json')
      .pipe(
        map((country: Country) => return { } as Choice),
        toArray()
      );
  }

  getDecisions(): Observable<Decision[]> {
    return this.http.get<Decision[]>('assets/decisions.json');
  }
}
