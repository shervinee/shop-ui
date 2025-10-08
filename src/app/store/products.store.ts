import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { signalStore, withState } from '@ngrx/signals';
import { Product } from '../model/product';

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string;
}

export const initialState: ProductsState = {
  items: null,
  loading: false,
  error: null,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withDevtools('ProductsStore'),
  withState(initialState),
);
