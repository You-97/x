import { Component, Input, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import { ProductInterface } from '../../types/product.interface';
import {ApiService} from "../../service/api.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public payPalConfig ?: IPayPalConfig;

  products: number = 0;
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
    this.initConfig();
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
    this.subTotal = this.products * this.product.price;
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

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'ARVegu43K5qlI65PGDVdA87ehCyaUTpVXxnB1F68RZAWMfyTrfel2COGWfaAIxmwjIhuJ', // add paypal clientId here
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '0.01',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '0.01'
              }
            }
          },
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        color: 'gold',
        shape: 'pill'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }
}
