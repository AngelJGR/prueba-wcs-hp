import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})

export class HpService {

  api_url:string = 'http://hp-api.herokuapp.com/api/characters'

  constructor(
    private _http: HttpClient
  ) { }

  getHouse(house:string):Observable<Person> {
    return this._http.get<Person>(`${this.api_url}/house/${house}`)
  }

  getStaff():Observable<Person> {
    return this._http.get<Person>(`${this.api_url}/staff`)
  }

  getStudents():Observable<Person> {
    return this._http.get<Person>(`${this.api_url}/students`)
  }
}
