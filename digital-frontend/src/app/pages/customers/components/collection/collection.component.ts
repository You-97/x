import { Component, OnInit } from '@angular/core';
import 'jquery';
import {NavbarComponent} from "../navbar/navbar.component";
import {CartService} from "../../service/cart.service";
import { ProductInterface } from '../../service/product.interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
/*kolchi mn back end abro product 3la hsab type dyalo ID */
  public products : ProductInterface[] = [
    {
      id:"1",
      image:"./../../../assets/images/img_1.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"1",
      image:"./../../../assets/images/img_3.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"1",
      image:"./../../../assets/images/img_2.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"1",
      image:"./../../../assets/images/img_4.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"2",
      image:"./../../../assets/images/img_1.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"3",
      image:"./../../../assets/images/img_2.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"4",
      image:"./../../../assets/images/img_3.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    },
    {
      id:"1",
      image:"./../../../assets/images/img_5.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      x:0,
      oldPrice:99.99
    }
  ];
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

  addtocart(item: ProductInterface){
    this.cartService.addtoCart(item);
    //this.products[i].x = 1;
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
