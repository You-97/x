import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CollectionComponent} from "./pages/customers/components/collection/collection.component";
import {NavbarComponent} from "./pages/customers/components/navbar/navbar.component";
import {CartService} from "./pages/customers/service/cart.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NotificationModule} from "./notification.module";
import {NotificationService} from "./service/notification.service";
import {AuthenticationService} from "./service/authentication.service";
import { AuthenticationGuard } from './guard/authentication.guard';
import {UserService} from "./service/user.service";
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotificationModule,
    FormsModule
  ],
  providers: [CollectionComponent,
    NavbarComponent,CartService,
    NotificationService, AuthenticationGuard,
    AuthenticationService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
