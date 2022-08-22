import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CollectionComponent} from "./pages/customers/components/collection/collection.component";
import {NavbarComponent} from "./pages/customers/components/navbar/navbar.component";
import {CartService} from "./pages/customers/service/cart.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [CollectionComponent,NavbarComponent,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
