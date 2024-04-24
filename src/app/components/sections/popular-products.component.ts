import { products } from "../../constants";

import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {Product} from "../../interfaces";
import {PopularProductCard} from "../atoms/popular-product-card";
@Component({
  selector: 'popular-products',
  templateUrl: "./popular-products.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})


export class PopularProductsComponent implements OnInit {
  @Input products: Product[];
  ngOnInit(){}
  constructor() {}
}
