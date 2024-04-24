import {Component, inject, Input} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {Product} from "../../interfaces";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'service-card',
  templateUrl: "./service-card.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class ServiceCard {
  @Input() product: Product;
  constructor( private route: Router) {}
  private productService = inject(ProductService);

  goToProductDetails(product: Product) {
    this.productService.selectedProduct = product;
    this.route.navigate(['product-detail', product]);
  }
}
