import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationGuard} from "./guard/authentication.guard";

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
      }, {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
        canActivate: [AuthenticationGuard]
      },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
  /* {
    path:"aboutus",
    component: AboutusComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"collections",
    component: CollectionsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
