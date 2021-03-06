import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {City} from "../model/city.model";

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(
    private http: HttpClient
  ) { }

  getCities() {
    return this.http.get<City[]>(environment.API_URL + '/getCities');
  }

}
