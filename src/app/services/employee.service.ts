import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeFormModel } from '../models/employee-form.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  create(employee: EmployeeFormModel,): Observable<EmployeeFormModel> {
    return this._httpClient.post<EmployeeFormModel>('https://dummy.restapiexample.com/create', employee);
  }
}
