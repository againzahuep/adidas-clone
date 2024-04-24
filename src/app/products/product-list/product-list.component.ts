import {Component, inject, Input, OnInit} from '@angular/core';

import { NgClass, AsyncPipe } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';
import {Router} from "@angular/router";
import {routes} from "../../app.routes";
import {Product} from "../../interfaces";
import {Observable} from "rxjs";
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [AsyncPipe, NgClass, ProductDetailComponent]
})
export class ProductListComponent  implements OnInit {

  constructor( private route: Router) { }

  pageTitle = 'products-list';
  products: Product[];
  productSelected:  Product;

  private productService = inject(ProductService);

  public routes = routes[0].children?.filter( (route) => route.data );

  ngOnInit() {
    this.products = this.productService.productsRequest();
  }

  get product(): Product | undefined {
    return this.productService.selectedProduct;
  }
  goToProductDetails(product: Product) {
    this.productService.selectedProduct = product;
    this.route.navigate(['details', product]);
  }
}
