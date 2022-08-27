import { Component, OnInit } from '@angular/core';
import 'jquery';
import {NavbarComponent} from "../navbar/navbar.component";
import {CartService} from "../../service/cart.service";
import { ProductInterface } from '../../types/product.interface';
import {ProductComponent} from "../product/product.component";
import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public products : ProductInterface[] = [];
  public idAttr : string ="special" ;
  public class : string[] =["Special","Microsoft","Netflix","Windows","Spotify","Deezer","AmazonPrime"]
  public activeCouleur: any="active-filter-btn";
  public activeCouleur1: any;
  public activeCouleur2: any ;
  public activeCouleur3: any;
  public activeCouleur4: any ;
  public activeCouleur5: any ;
  public activeCouleur6: any ;
  public productList : any ;



  constructor(public cartService: CartService,
              private apiService: ApiService) {}

  ngOnInit(): void {
    this.initializeProducts();
  }

  itemParameter(item: ProductInterface  ) {
    this.cartService.selectProduct(item);
    localStorage.setItem("selectedProduct", JSON.stringify(item));
  }

  initializeProducts() {
    this.apiService.findAllProducts().subscribe(
      (response: ProductInterface[]) => {
        console.log(response);
        this.products = response;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  addToCart(item: ProductInterface) {
    /*const list = this.cartService.addToCart(item);*/
    const list = this.cartService.secondAddToCart(item);
    localStorage.setItem("productsList", JSON.stringify(list));
  }


  toggle(event: any) {
    this.idAttr = event.target.attributes.id.value;
    if(this.idAttr=="special"){this.activeCouleur="active-filter-btn";}
    else{this.activeCouleur=null;}
    if(this.idAttr=="microsoft"){this.activeCouleur1="active-filter-btn";}
    else{this.activeCouleur1=null;}
    if(this.idAttr=="netflix"){this.activeCouleur2="active-filter-btn";}
    else{this.activeCouleur2=null;}
    if(this.idAttr=="Windows"){this.activeCouleur3="active-filter-btn";}
    else{this.activeCouleur3=null;}
    if(this.idAttr=="Spotify"){this.activeCouleur4="active-filter-btn";}
    else{this.activeCouleur4=null;}
    if(this.idAttr=="Deezer"){this.activeCouleur5="active-filter-btn";}
    else{this.activeCouleur5=null;}
    if(this.idAttr=="AmazonPrime"){this.activeCouleur6="active-filter-btn";}
    else{this.activeCouleur6=null;}
  }

}
