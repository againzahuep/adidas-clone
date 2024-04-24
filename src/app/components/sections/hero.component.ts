import {Injectable, computed, inject, signal, OnInit} from '@angular/core';
import {Component, OnInit, Input} from '@angular/core';
import { shoes, statistics } from "../../constants";
import { arrowRight } from "../../assets/icons";
import { CurrencyPipe, AsyncPipe } from '@angular/common';
import {Product} from "../../interfaces";
@Component({
  selector: 'hero-card',
  templateUrl: './hero.component.html',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class HeroComponent implements OnInit {
  ngOnInit(){}
  constructor() {}
  @Input product: Product;

  public bigShoeImg = signal(this.product.Image1);
}

