import { Component, Input, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import { ProductInterface } from '../../types/product.interface';
import {ApiService} from "../../service/api.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

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

  //value from input
  product :ProductInterface = {
    id: 0,
    image: undefined,
    name: '',
    price: 0,
    category: '',
    description: '',
    oldPrice: 0,
    productImagePath: ''
  };

  constructor(public cartService: CartService,
              private apiService: ApiService,
              private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("selectedProduct")) {
      this.product = JSON.parse(localStorage.getItem('selectedProduct') as any);
    } else {
      this.router.navigateByUrl("/home");
    }
    this.initializeData();
  }

  initializeData(): void {
    this.products = 1;
    this.subTotal = this.products * this.product.price;
  }

  addProduct(){
    this.products += 1;
    this.subTotal = this.products * this.product.price;
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

  toPurchase() {
    this.purshase = true;
    this.paymentMethod = false;
    this.paymentEmail = false;
   }

  buyProductForm(total: number, form: NgForm) {
    this.apiService.puyProduct(total).subscribe(
      (response: any) => {
        window.location.href = response.redirect_url;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
