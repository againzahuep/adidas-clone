import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {star} from '../../assets/icons/star.svg'
@Component({
  selector: 'popular-product-card',
  template: ``,
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class PopularProductCard implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input() imgURL;
  @Input() name;
  @Input() price;
}
