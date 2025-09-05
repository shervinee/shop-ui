import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private http = inject(HttpClient);
  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }
}
