import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";

import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'special-offer-card',
  templateUrl: "./special-offer.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class SpecialOfferComponent implements OnInit {
  constructor(){
  }
  ngOnInit(){}
}
