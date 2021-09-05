import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Decision } from './decision';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getDecisions() {
    return this.http.get<Decision[]>('assets/decisions.json');
  }
}
