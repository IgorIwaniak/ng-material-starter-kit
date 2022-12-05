import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartDetailModel } from '../models/cart-detail.model';

@Injectable()
export class CartDetailService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id:number): Observable<CartDetailModel> {
    return this._httpClient.get<CartDetailModel>('https://fakestoreapi.com/carts/'+ id)
  }
}
