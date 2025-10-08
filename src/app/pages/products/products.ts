import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductsStore } from './../../store/products.store';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  providers: [ProductsStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Products {
  readonly productsStore = inject(ProductsStore);
}
