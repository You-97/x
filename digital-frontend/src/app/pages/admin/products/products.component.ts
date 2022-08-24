import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../customers/types/product.interface';
import { AdministratorService } from "./../services/administrator.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  conditionProduct: boolean = false;
  product: ProductInterface | undefined;
  private subscriptions: Subscription[] = [];
  fileName: string | undefined;
  productImage: File | undefined;
  products: any[] = [];

  constructor(private adminService: AdministratorService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  onCreateProduct() {
    this.conditionProduct = !this.conditionProduct;
  }

  onCreateNewProduct(form: NgForm) {
    const formData = this.adminService.createProductFormData(form.value, this.productImage as any);
    this.subscriptions.push(
    this.adminService.createProduct(formData).subscribe(
      (response: ProductInterface) => {
        this.product = response;
        this.getAllProducts();
        this.conditionProduct = !this.conditionProduct;
      }
    ));
  };

  getAllProducts() {
    this.adminService.findAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    )
  }


  public onProductImageChange(fileName: string, profileImage: File): void {
    this.fileName =  fileName;
    this.productImage = profileImage;
  }
}
