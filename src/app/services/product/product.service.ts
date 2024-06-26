import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createCategory(obj: any): Observable<any> {
    return this.http.post<any>(
      Constant.API_END_POINTS + Constant.METHODS.CREATE_NEW_CATEGORY,
      obj
    );
  }
  getAllCategory() {
    return this.http.get(
      Constant.API_END_POINTS + Constant.METHODS.GET_ALL_CATEGORY
    );
  }
  getAllProducts() {
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
  updateProduct(obj: any) {
    return this.http.post(
      Constant.API_END_POINTS + Constant.METHODS.UPDATE_PRODUCT,
      obj
    );
  }
  deleteProduct(id: any) {
    return this.http.delete(
      Constant.API_END_POINTS + Constant.METHODS.DELETE_PRODUCT,
      id
    );
  }
}
