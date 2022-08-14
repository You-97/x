import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { KeysComponent } from './keys/keys.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:"",
    component: AdminComponent,
    children: [
      {
        path:"",
        component: OrdersComponent
      },
      {
        path:"products",
        component: ProductsComponent
      },
      {
        path:"keys",
        component: KeysComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
