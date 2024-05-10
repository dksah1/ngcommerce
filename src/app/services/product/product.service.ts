import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get(
      Constant.API_END_POINTS + Constant.METHODS.GET_ALL_CATEGORY
    );
  }
  getProducts() {
    return this.http.get(
      Constant.API_END_POINTS + Constant.METHODS.GET_ALL_PRODUCT
    );
  }
  saveProduct(obj: any) {
    return this.http.post(
      Constant.API_END_POINTS + Constant.METHODS.CREATE_PRODUCT,
      obj
    );
  }
}
