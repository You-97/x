import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../customers/types/product.interface';

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
}
