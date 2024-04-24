import {Injectable, computed, inject, signal} from '@angular/core';
import { Router } from '@angular/router';
import {Product} from '../interfaces'
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import fs from 'fs';
import {toObservable} from "@angular/core/rxjs-interop";
import {response} from "express";

@Injectable({providedIn: 'root'})
export class ProductService {

  dbPath = '../db/DatosScraping.json';

  public products$: Product[];
  public  selectedProduct: Product;

    constructor() {
    }


  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) {
  }


get products$(): Product[] {
  return [...this.products$];
}

productsRequest(): Product[] {
  if( !fs.existsSync( this.dbPath ) ) return;

  const info = fs.readFileSync( this.dbPath, { encoding: 'utf-8' });
  this.products$ = JSON.parse( info );

  return this.products$;
}



}
