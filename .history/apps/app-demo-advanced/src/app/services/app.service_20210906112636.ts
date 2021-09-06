import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('assets/countries.json');
  }

  getDecisions(): Observable<Decision[]> {
    return this.http.get<Decision[]>('assets/decisions.json');
  }
}
