import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<any>('assets/decisions.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
  }
}
