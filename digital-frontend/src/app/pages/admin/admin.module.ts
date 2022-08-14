import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { KeysComponent } from './keys/keys.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    ProductsComponent,
    KeysComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
