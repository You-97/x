import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductInterface } from '../../customers/types/product.interface';
import { AdministratorService } from "./../services/administrator.service";
import {NotificationType} from "../../../enum/notification-type.enum";
import {NotificationService} from "../../../service/notification.service";

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


  constructor(private adminService: AdministratorService,
              private notificationService: NotificationService) {}

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
        this.sendNotification(NotificationType.SUCCESS, `Product added successfully`);
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
    $('#editModal').modal('show');
  }

  onDeleteProduct(id: number) {
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
    $('#deleteModal').modal('show');
  }

  closeDeleteModal() {
    $('#deleteModal').modal('hide');
  }

  onCreateNewKey(form: NgForm) {
    const formData = this.adminService.createKeyFormData(form.value);
    this.adminService.createKey(formData).subscribe(
      (response) => {
        this.sendNotification(NotificationType.SUCCESS, `key for product ${form.value.productId} added successfully`);
        $('#keyModal').modal('hide');
        form.resetForm();
      },
      (err) => {
        this.sendNotification(NotificationType.ERROR, `ERROR key for product ${form.value.productId} !!`);
        $('#keyModal').modal('hide');
      }
    )
  }

  openKeyModalWithSelectedProduct(product: any) {
    this.product = product;
    $('#keyModal').modal('show');
  }

  closeKeyModal() {
    $('#keyModal').modal('hide');
  }

  public onProductImageChange(fileName: string, profileImage: File): void {
    this.fileName =  fileName;
    this.productImage = profileImage;
  }

  sendNotification(notificationType: NotificationType, message: string) {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
}
