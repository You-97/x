import { Component, OnInit } from '@angular/core';
import 'jquery';
import {NavbarComponent} from "../navbar/navbar.component";
import {CartService} from "../../service/cart.service";
import { ProductInterface } from '../../service/product.interface';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  itemID :any;
  public products : ProductInterface[] = [
    {
      id:"1",
      image:"./../../../assets/img_1.png",
      title:"Microsoft office 2016 Professional Plus",
      price:7.99,
      category:"special",
      description:"100% Genuine Office 2016 Professional Plus Product Key, One Key for One Computer\n" +
        "\n" +
        "For 1 PC Activate License Key for Permanent, this is not a subscription.\n" +
        "Both 32-bit and 64-bit Office Versions Support.\n" +
        "Global License, World-wide Availability, No Regional Restrictions. Can be used to activate Microsoft Office Professional Plus 2016 in any region.",
      x:0,
      oldPrice:199.00
    },
    {
      id:"2",
      image:"./../../../assets/img_2.png",
      title:"Microsoft Office 2019 – PC – Professional Plus",
      price:6.99,
      category:"special",
      description:"Office 2019 Pro Plus is the solution for an ultimate efficiency and flexibility\n" +
        "Are you a professional looking for an Office pack designed to improve your career and help you carry out your tasks? Don’t look any further as we’re giving you the ideal solution. Indeed, our online shop Productkey24 presents Office Professional Plus 2019, the perfect pack with a wide range of features to improve your productivity.",
      x:0,
      oldPrice:99.99
    },
    {
      id:"3",
      image:"./../../../assets/img_3.png",
      title:"Microsoft Office 2021 – PC – Professional Plus",
      price:7.99,
      category:"special",
      description:"Success Is Guaranteed With Office 2021 Professional Plus\n" +
        "With Office 2021 Professional Plus, you will get more done in less time. This new version is perfectly designed to satisfy all your professional needs by simplifying your task and job by offering you all you need in a one single package as well as it provides you with all the tools and flexibility to increase your productivity. Get your Office 2021 Professional Plus from our website Productkey24.com and take advantage of this special offer.",
      x:0,
      oldPrice:99.99
    },
    {
      id:"4",
      image:"./../../../assets/images/img_4.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      description:"Microsoft Office 2019 Professional Plus key online activation",
      x:0,
      oldPrice:99.99
    },
    {
      id:"5",
      image:"./../../../assets/images/img_1.png",
      title:"Microsoft Windows 11 Professional",
      price:6.99,
      category:"special",
      description:"Discover the New Windows 11 Professional\n" +
        "The Pro edition of Windows 11 is primarily aimed at professional users and includes a slew of extra features. This makes your job as a network administrator easier, especially if you have other tools at your disposal. Get your Windows 11 Professional from our website Productkey24 and be the first to run this new Microsoft operating system.",
      x:0,
      oldPrice:99.99
    },
    {
      id:"6",
      image:"./../../../assets/img_4.png",
      title:"Microsoft Windows 10 Professional",
      price:6.99,
      category:"special",
      description:"The new Windows 10 impressive design and enhanced performance\n" +
        "Experience Windows 10 high performance, excellent security, and great design.",
      x:0,
      oldPrice:99.99
    },
    {
      id:"7",
      image:"./../../../assets/images/img_3.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      description:"Microsoft Office 2019 Professional Plus key online activation",
      x:0,
      oldPrice:99.99
    },
    {
      id:"8",
      image:"./../../../assets/images/img_5.png",
      title:"Microsoft Office 2019 Professional Plus key online activation",
      price:18.99,
      category:"special",
      description:"Microsoft Office 2019 Professional Plus key online activation",
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



  constructor(public cartService: CartService) {}

  ngOnInit(): void {

  }

  itemParametre(item: any){
    this.itemID=item;
    this.cartService.selectProduct(this.itemID);
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
