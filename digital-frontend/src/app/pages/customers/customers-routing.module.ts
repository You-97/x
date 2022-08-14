import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CustomersComponent } from './customers.component';
import { HomeComponent } from './home/home.component';
import {CartComponent} from "./components/cart/cart.component";

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
      },
      {
        path:"cart",
        component: CartComponent
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
