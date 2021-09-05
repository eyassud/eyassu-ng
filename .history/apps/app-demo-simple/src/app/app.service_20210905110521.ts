import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Decision } from './decision';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Decision[]>('assets/decisions.json')
      .toPromise()
      .then(res => <Decision[]>res)
      .then(data => { return data; });
  }
}
