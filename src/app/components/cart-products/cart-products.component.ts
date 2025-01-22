import { Component, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../model/product.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-products',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.scss',
})
export class CartProductsComponent {
  @Input() cartItems: Product[] = [];

  productsLength: number = JSON.parse(localStorage.getItem('cart')!).length;

  incrementQuantity(product: Product) {
    product.quantity++;

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  decrementQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;

      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
