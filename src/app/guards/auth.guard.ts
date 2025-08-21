// src/app/guards/auth.guard.ts
// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthStore } from '../stores/auth.store';

// TEMP: auth guard disabled. Allow all routes.
export type CanActivateFn = (route: any, state: any) => boolean;
export const authGuard: CanActivateFn = () => true;

// RE-ENABLE LATER:
/*
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../stores/auth.store';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthStore);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  return router.createUrlTree(['/login'], { queryParams: { redirect: state.url } });
};
*/
