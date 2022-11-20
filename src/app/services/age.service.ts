import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAgeModel } from '../models/create-age.model';

@Injectable()
export class AgeService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(age:number): Observable<CreateAgeModel> {
    return this._httpClient.get<CreateAgeModel>('https://api.agify.io/?name=john')
  }
}
