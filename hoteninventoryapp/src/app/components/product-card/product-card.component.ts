import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  CartService = inject(CartService)
  product = input.required<Product>()
}
