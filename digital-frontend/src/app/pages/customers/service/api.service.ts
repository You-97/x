import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from "rxjs";
import {ProductInterface} from "../types/product.interface";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  findAllProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>("http://localhost:8085/products");
  }
}
