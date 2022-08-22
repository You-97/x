import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalItem: number = 0;

  constructor(public cartService: CartService ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
  }

  onClick() {
    this.totalItem += 1;
  }



}
