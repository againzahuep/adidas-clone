import {adiclub } from "../../assets/icons/adiclub-logo.svg";
import {hamburger } from "../../assets/icons/adiclub-logo.svg";
import {navLinks} from '../../constants';
import {Component, Input, OnInit} from '@angular/core';
import { CurrencyPipe, AsyncPipe } from '@angular/common';

@Component({
  selector: 'nav-section',
  templateUrl: './nav.component.html',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class NavComponent implements OnInit {
  ngOnInit(){}
  constructor() {}
}


