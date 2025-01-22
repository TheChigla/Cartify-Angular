import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { CartProductsComponent } from '../../components/cart-products/cart-products.component';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CartProductsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems: Product[] = [];

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart')!);
  }
}
