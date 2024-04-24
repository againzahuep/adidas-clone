import { ReviewCard } from "../atoms/review-card";
import { reviews } from "../../constants";

import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'custom-reviews',
  templateUrl: "./customer-reviews.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class CuustomerReviewsComponent implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input() imgURL;
  @Input() label;
  @Input()  subtext;
}

