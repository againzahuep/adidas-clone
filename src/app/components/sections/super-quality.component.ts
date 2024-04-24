import { shoe8 } from "../../assets/images/shoe8.svg";
import { Button } from "../atoms/button-atom";
import {Component, OnInit} from "@angular/core";
import {AsyncPipe, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'super-quality-card',
  templateUrl: "./super-quality.component.html",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe]
})

export class SuperQualityComponent implements OnInit {
  constructor()
  {
  }
  ngOnInit()
  {
  }
}
