import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInterface } from '../types/product.interface';

interface Cart {
  product: ProductInterface,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productSelect : ProductInterface = {
    id: 0,
    image: undefined,
    name: '',
    price: 0,
    category: '',
    description: '',
    oldPrice: 0,
    productImagePath: ''
  }
  public cartItemList : any[] = []
  public secondCartItemList : Cart[] = []
  public productList = new BehaviorSubject<Cart[]>([]);
  public search = new BehaviorSubject<string>("");
  public cartProducts: Cart[] = [];

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

  editLocalStorageData(list: any, product: ProductInterface) {

  }

  selectProduct(product : ProductInterface) {
    this.productSelect = product;
  }

  addToCart(product : ProductInterface): ProductInterface[] {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    return this.cartItemList;
  }

  secondAddToCart(product : ProductInterface): Cart[] {
    for (const item of this.secondCartItemList) {
      if (item.product.id === product.id) {
        item.quantity +=1;
        let foundIndex = this.secondCartItemList.findIndex(x => x.product.id == product.id);
        this.secondCartItemList[foundIndex] = item;
        this.productList.next(this.secondCartItemList);
        return this.secondCartItemList;
      }
    }
    this.secondCartItemList.push({product: product, quantity: 1});
    this.productList.next(this.secondCartItemList);
    return this.secondCartItemList
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.secondCartItemList.map((a:any)=>{
      grandTotal += a.product.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any): Cart[] {
    this.secondCartItemList.map((a:any, index:any)=>{
      if(product.id=== a.product.id){
        this.secondCartItemList.splice(index,1);
      }
    })
    this.productList.next(this.secondCartItemList);
    this.getProducts();
    return this.secondCartItemList;
  }

  removeAllCart(): Cart[] {
    this.secondCartItemList = []
    this.productList.next(this.secondCartItemList);
    this.getProducts();
    return this.secondCartItemList;
  }
}
