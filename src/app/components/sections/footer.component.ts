import { copyrightSign } from "../../assets/icons";
import { footerLogo } from "../assets/images/";
import { footerLinks, socialMedia } from "../../constants";


import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'footer-card',
  templateUrl: "./footer.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class FooterComponent implements OnInit {
  ngOnInit(){}
  constructor() {}
}
