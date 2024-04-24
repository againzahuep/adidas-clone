import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { services } from "../../constants";
import {Product} from "../../interfaces";

@Component({
  selector: 'services-section',
  templateUrl: "./services.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class ServicesComponent implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input() product: Product;
  @Input() routerLink: (any[] | string | null | undefined);

}




