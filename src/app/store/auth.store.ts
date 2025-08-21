import { computed, signal } from '@angular/core';

export interface User {
  username: string;
}

export const currentUser = signal<User | null>(null);
export const loggedIn = computed(() => currentUser() !== null);

export const login = (username: string) => {
  currentUser.set({ username });
};

export const logout = () => currentUser.set(null);

// And just like that we have our auth store setup,
// Pay attention to the way we handle logginig in and out, pretty handy
