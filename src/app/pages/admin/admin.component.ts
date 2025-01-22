import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {
  addProductForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addProductForm.valid) {
      const products = JSON.parse(localStorage.getItem('products') || '[]');
      products.push(this.addProductForm.value);
      localStorage.setItem('products', JSON.stringify(products));
    } else {
      alert('Please fill all the fields');
    }
  }
}
