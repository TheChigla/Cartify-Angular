import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  getCartItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    const productInCart = this.cart.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: Product): void {
    const productIndex = this.cart.findIndex((item) => item.id === product.id);

    if (productIndex > -1) {
      this.cart.splice(productIndex, 1);
    }
  }

  clearCart(): void {
    this.cart = [];
  }
}
