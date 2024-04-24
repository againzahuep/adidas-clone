import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'button-atom',
  template: ``,
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class ButtonAtom implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input label;
  @Input iconURL;
  @Input backgroundColor;
  @Input textColor;
  @Input borderColor;
  @Input fullWidth;
}
