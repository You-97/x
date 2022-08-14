import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './components/features/features.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CollectionComponent } from './components/collection/collection.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    AboutusComponent,
    CollectionComponent,
    TestimonialsComponent,
    CollectionsComponent,
    CustomersComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ],
  bootstrap: [CustomersComponent],
  exports:[
    HeaderComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class CustomersModule { }
