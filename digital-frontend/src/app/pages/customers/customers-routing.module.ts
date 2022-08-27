import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CustomersComponent } from './customers.component';
import { HomeComponent } from './home/home.component';
import {CartComponent} from "./components/cart/cart.component";
import {ContactusComponent} from "./components/contactus/contactus.component";
import {PrivacypolicyComponent} from "./components/privacypolicy/privacypolicy.component";
import {FreequentlyqstComponent} from "./components/fandq/freequentlyqst.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {
    path:"",
    component: CustomersComponent,
    children: [
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:"aboutus",
        component: AboutusComponent
      },
      {
        path:"collections",
        component: CollectionsComponent
      }/*,
      {
        path:"cart",
        component: CartComponent
      }*/,
      {
        path:"contactus",
        component: ContactusComponent
      },
      {
        path:"privacypolicy",
        component: PrivacypolicyComponent
      },
      {
        path:"freequentlyqst",
        component: FreequentlyqstComponent
      },
      {
        path:"product",
        component: ProductComponent
      },
      {
        path:"",
        redirectTo: 'home', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
