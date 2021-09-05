import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './country';
import { Decision } from './decision';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Country[]>('assets/countries');
  }

  getDecisions() {
    return this.http.get<Decision[]>('assets/decisions.json');
  }
}
