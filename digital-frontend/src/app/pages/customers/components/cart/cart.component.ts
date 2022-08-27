import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any[] = [];
  public grandTotal !: number;
  Total: number =0;
  qte: number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('productsList') as any);
  }

  removeItem(item: any){
    const list = this.cartService.removeCartItem(item);
    localStorage.setItem("productsList", JSON.stringify(list));
    this.products = JSON.parse(localStorage.getItem('productsList') as any);
  }

  emptyCart(){
    const list = this.cartService.removeAllCart();
    localStorage.setItem("productsList", JSON.stringify(list));
    this.products = JSON.parse(localStorage.getItem('productsList') as any);
  }

  calcul(itemElement: number, value: number) {
    this.Total=itemElement*value;
  }

  onChange(quantity: number) {
    this.qte = quantity;
  }
}
