import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';

@Injectable()
export class CatService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(fact:any): Observable<CatModel> {
    return this._httpClient.get<CatModel>('https://catfact.ninja/fact')
  }
}
