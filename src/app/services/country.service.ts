import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDetailModel } from '../models/country-detail.model';

@Injectable()
export class CountryService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name:string): Observable<CountryDetailModel> {
    return this._httpClient.get<CountryDetailModel>('https://api.nationalize.io?name=' + name);
  }
  }
