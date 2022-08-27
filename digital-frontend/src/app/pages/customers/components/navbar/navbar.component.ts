import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {AuthenticationService} from "../../../../service/authentication.service";
import {Role} from "../../../../enum/role.enum";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalItem: number = 0;

  constructor(private cartService: CartService,
              private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  public get isAdmin(): boolean {
    return this.getUserRole() === Role.USER;
  }

  private getUserRole(): string {
    if (this.authenticationService.getUserFromLocalCache()) {
      return this.authenticationService.getUserFromLocalCache().role;
    }
    return null as any;
  }



}
