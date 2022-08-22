import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: number = 0;
  price: number = 16.5;
  subTotal: number = 0;
  paymentMethod: boolean = false;
  purshase: boolean = true;
  paymentEmail: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.subTotal = this.price;
  }

  addProduct(){
    this.products += 1;
    this.subTotal = this.products * this.price;
  }

  popProduct() {
    if(this.products > 0) {
      this.products -= 1;
    } else if(this.products < 0) {
      this.products = 0;
    } else {
      this.products = 0;
    }
    this.subTotal = this.products * this.price;
  }

  toPayment() {
    this.purshase = false;
    this.paymentMethod = true;
    this.paymentEmail = false;
  }

  toPaymentEmail() {
    this.purshase = false;
    this.paymentMethod = false;
    this.paymentEmail = true;
  }
   toPurshase() {
    this.purshase = true;
    this.paymentMethod = false;
    this.paymentEmail = false;
   }

}
