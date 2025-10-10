import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Product } from './../model/product';
import { ProductsService } from './../services/products-api.service';

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withDevtools('ProductsStore'),
  withState(initialState),
  withProps(() => ({
    productsService: inject(ProductsService),
  })),
  withMethods((store) => ({
    loadProducts: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() => {
          return store.productsService.getAll().pipe(
            tapResponse({
              next: (products) =>
                patchState(store, { items: products, loading: false }),
              error: (err: unknown) => {
                const msg =
                  err instanceof HttpErrorResponse
                    ? err.message
                    : ((err as any)?.message ??
                      'An issue happened loading the products');
                patchState(store, { error: msg, loading: false });
              },
            }),
          );
        }),
      ),
    ),
  })),
);
