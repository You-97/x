import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../customers/types/product.interface';
import {KeyInterface} from "../../customers/types/key.interface";

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  constructor(private http: HttpClient) { }

  createProduct(formData: FormData): Observable<ProductInterface> {
    return this.http.post<ProductInterface>("http://localhost:8085/products/new", formData);
  }

  findAllProducts(): Observable<any[]> {
    return this.http.get<ProductInterface[]>("http://localhost:8085/products");
  }

  deleteProduct(id: number): Observable<string> {
    return this.http.delete<string>("http://localhost:8085/products/" + id);
  }

  updateProduct(formData: FormData): Observable<ProductInterface> {
    return this.http.put<ProductInterface>("http://localhost:8085/products/update", formData);
  }

  createKey(form: FormData): Observable<KeyInterface> {
    return this.http.post<KeyInterface>("http://localhost:8085/keys", form);
  }

  public createProductFormData(product: any, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('type', product.type);
    formData.append('price', product.price);
    formData.append('oldPrice', product.oldPrice);
    formData.append('description', product.description);
    formData.append('image', profileImage);
    return formData;
  }

  public updateProductFormData(product: any, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('id', product.id);
    formData.append('name', product.name);
    formData.append('type', product.type);
    formData.append('price', product.price);
    formData.append('oldPrice', product.oldPrice);
    formData.append('description', product.description);
    if(profileImage != undefined) {
      formData.append('image', profileImage);
    }
    return formData;
  }

  public createKeyFormData(key: any): FormData {
    const formData = new FormData();
    formData.append('productKey', key.productKey);
    formData.append('email', key.email);
    formData.append('password', key.password);
    formData.append('validityTime', key.validityTime);
    formData.append('productId', key.id);

    return formData;
  }

}
