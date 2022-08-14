import { Component, OnInit } from '@angular/core';
import 'jquery';
import {NavbarComponent} from "../navbar/navbar.component";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
/*kolchi mn back end abro product 3la hsab type dyalo ID */
  public products : any = [["1,./../../../assets/images/blog_1.jpg","MICROS0FT 0FFICE PROFESSIONAL Plus 2019 Download Link For Win(1PC/1User)","$ 45.50","add to bag","special"],["2,./../../../assets/images/blog_1.jpg","MICROS0FT 0FFICE PROFESSIONAL Plus 2019 Download Link For Win(1PC/1User)","$ 45.50","add to bag","special"]];
  public idAttr : any ="special" ;
  public class : any =["Special","Microsoft","Netflix","Windows","Spotify","Deezer","AmazonPrime"]
  public activeCouleur: any="active-filter-btn";
  public activeCouleur1: any;
  public activeCouleur2: any ;
  public activeCouleur3: any;
  public activeCouleur4: any ;
  public activeCouleur5: any ;
  public activeCouleur6: any ;

  public productList : any ;


  constructor(public cartService: CartService ) {}

  ngOnInit(): void {

  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
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
