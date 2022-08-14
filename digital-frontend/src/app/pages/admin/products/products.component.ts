import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  conditionProduct: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateProduct() {
    this.conditionProduct = !this.conditionProduct;
  }

}
