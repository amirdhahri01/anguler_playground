import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([])

  addToCart(product : Product){
    console.log("Ok.");
    
    this.cart.set([...this.cart() , product])
  }
  constructor() { 

  }

}
