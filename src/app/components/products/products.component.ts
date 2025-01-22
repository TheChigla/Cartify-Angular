import { Component, Input } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() title: string = '';
  @Input() products: Product[] = [];
}
