import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../customers/types/product.interface';
import { AdministratorService } from "./../services/administrator.service";

declare var $ : any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  conditionProduct: boolean = false;
  product: any = {
    id: 0,
    image: undefined,
    name: '',
    price: 0,
    category: '',
    description: '',
    oldPrice: 0,
    productImagePath: ''
  }
  private subscriptions: Subscription[] = [];
  fileName: string | undefined;
  productImage: File | undefined;
  products: any[] = [];
  cond: boolean = false;
  deleteProduct: number = 0;
  str: string = ""
  deleteStr: string = "";
  keyStr: string = "";


  constructor(private adminService: AdministratorService) {}

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
        this.getAllProducts();
        this.conditionProduct = !this.conditionProduct;
      }
    ));
  };

  getAllProducts() {
    this.adminService.findAllProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      }
    )
  }

  onUpdateProduct(form: NgForm) {
    const formData = this.adminService.updateProductFormData(form.value, this.productImage as any);
    this.subscriptions.push(
    this.adminService.updateProduct(formData).subscribe(
      (response: ProductInterface) => {
        this.getAllProducts();
        $('#editModal').modal('hide');
      }
    ));
  }

  openUpdateModalWithSelectedProduct(product: any) {
    this.product = product;
    this.str = "#editModal"
  }

  onDeleteproduct(id: number) {
    this.subscriptions.push(
      this.adminService.deleteProduct(id).subscribe(
        (response: string) => {
          this.getAllProducts();
        },
        (err)=> {
          this.getAllProducts();
          $('#deleteModal').modal('hide');
        }
      )
    );
  }

  openDeleteModalWithSelectedProduct(product: any) {
    this.product = product;
    this.deleteStr = "#deleteModal";
  }

  closeDeleteModal() {
    $('#deleteModal').modal('hide');
  }

  onCreateNewKey(form: NgForm) {
    const formData = this.adminService.createKeyFormData(form.value);
    this.adminService.createKey(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  openKeyModalWithSelectedProduct(product: any) {
    this.product = product;
    this.keyStr = "#keyModal";
  }

  closeKeyModal() {
    $('#keyModal').modal('hide');
  }

  public onProductImageChange(fileName: string, profileImage: File): void {
    this.fileName =  fileName;
    this.productImage = profileImage;
  }
}
