import {Component, computed, inject, Input} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {Product} from "../../interfaces";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})
export class ProductDetailComponent {

  constructor(private location: Location,
              private activatedRoute: ActivatedRoute
  ) { }

  @Input() product: Product;


  private productService = inject(ProductService);


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.product = this.productService.selectedProduct;
  }
}
