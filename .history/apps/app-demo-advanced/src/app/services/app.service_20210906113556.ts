import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Choice } from '../shared/choice/choice';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/countries.json');
  }

  getDecisions(): Observable<Choice[]> {
    return this.http.get<Decision[]>('assets/decisions.json');
  }
}
