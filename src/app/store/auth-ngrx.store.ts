import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { computed, Inject, InjectionToken } from '@angular/core';
import {
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { AuthApiService } from './../services/auth-api.service';
import { User } from './auth.store';
export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// for later use of having injection token overriding the initial state if needed
export const AUTH_INITIAL_STATE = new InjectionToken<Partial<AuthState>>(
  'AUTH_INITIAL_STATE',
);

// work in progress
export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('AuthStore'),
  withProps(() => ({
    authApiService: Inject(AuthApiService),
  })),
  withState<AuthState>(initialState),
  withMethods((store) => ({})),
  withComputed((store) => ({
    isLoggedIn: computed(() => store.user !== null),
    username: computed(() => store.user()?.username),
  })),
);
