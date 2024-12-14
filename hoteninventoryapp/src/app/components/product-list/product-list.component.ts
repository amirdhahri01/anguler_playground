import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = signal<Product[]>([
    {
      id : 1,
      title : "Sheos",
      image : "https://brand.assets.adidas.com/image/upload/v1717007627/Training_FW_24_Dropset3_global_Launch_What_shoes_should_you_wear_to_the_gym_image_body1_5efeb22068.jpg",
      price : 20,
      stock  : 2, 
    }
  ]);
}
