import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {star} from '../../assets/icons/star.svg'
@Component({
  selector: 'review-card',
  templateUrl: "./review-card.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class ReviewCard implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input() imgURL;
  @Input() customerName;
  @Input()  rating;
  @Input()  feedback;
}
