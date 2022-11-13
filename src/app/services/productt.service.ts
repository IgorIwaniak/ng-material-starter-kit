import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProducttService {
  constructor(private _httpClient: HttpClient) {
  }

  create(productt: Omit<ProductModel, 'id'>): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', productt);
  }
}
