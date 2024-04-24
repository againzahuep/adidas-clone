import {Component, inject, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {Product} from "../../interfaces";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'shoe-atom',
  templateUrl: "./shoe-atom.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class ShoeAtom implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input() imgURL;
  @Input() changeBigShoeImage;
  @Input()  bigShoeImg;

  @Input() product: Product;
  constructor( private route: Router) {}
  private productService = inject(ProductService);

  goToProductDetails(product: Product) {
    this.productService.selectedProduct = product;
    this.route.navigate(['products-detail', product]);
  }  handleClick = () => {
    if (this.bigShoeImg !== this.imgURL) {
      this.changeBigShoeImage(this.imgURL);
    }
  };
}


