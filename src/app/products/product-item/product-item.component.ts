import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() routerLink: (any[] | string | null | undefined);
  @Input() product: Product;

  constructor() {
  }

  ngOnInit(): void {
  }

}
