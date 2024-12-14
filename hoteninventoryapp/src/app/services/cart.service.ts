import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([{
    id: 1,
    title: "Sheos",
    image: "https://brand.assets.adidas.com/image/upload/v1717007627/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_body1_5efeb22068.jpg",
    price: 20,
    stock: 0,
  },
  {
    id: 2,
    title: "T-shirt",
    image: "https://brand.assets.adidas.com/image/upload/v1717007627/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_body1_5efeb22068.jpg",
    price: 20,
    stock: 5,
  },
  {
    id: 3,
    title: "hat",
    image: "https://brand.assets.adidas.com/image/upload/v1717007627/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_body1_5efeb22068.jpg",
    price: 1200,
    stock: 10,
  },
  {
    id: 4,
    title: "Sheos",
    image: "https://brand.assets.adidas.com/image/upload/v1717007627/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_body1_5efeb22068.jpg",
    price: 50,
    stock: 1,
  }])

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product])
  }

  constructor() {

  }

}
