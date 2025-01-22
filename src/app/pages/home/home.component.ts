import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { ProductsComponent } from '../../components/products/products.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PartnersComponent, ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  splittedFirstFour = JSON.parse(
    localStorage.getItem('products') || '[]'
  ).slice(0, 4);
  splittedLastFour = JSON.parse(localStorage.getItem('products') || '[]').slice(
    4,
    8
  );
}
