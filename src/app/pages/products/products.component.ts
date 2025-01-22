import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  allProducts: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
}
