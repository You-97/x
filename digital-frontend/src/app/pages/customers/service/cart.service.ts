import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productSelect : any =[]
  public cartItemList : any =[]
  public productList = new BehaviorSubject<ProductInterface[]>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }

  getProduct(){
    return this.productSelect;
  }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  selectProduct(product : any) {
    this.productSelect=product;
  }

  addtoCart(product : ProductInterface){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
