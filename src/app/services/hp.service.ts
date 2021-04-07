import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HpService {

  api_url:string = 'http://hp-api.herokuapp.com/api/characters/house/'

  constructor(
    private _http: HttpClient
  ) { }

  getHouse(house:string):Observable<any> {
    return this._http.get<any>(`${this.api_url}${house}`)
  }
}
