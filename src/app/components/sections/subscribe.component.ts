import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';
@Component({
  selector: 'subscribe-card',
  templateUrl: `
      `,
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class SubscribeComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

}
