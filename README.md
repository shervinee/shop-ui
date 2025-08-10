# shop-frontend (Angular) — README

Short blurb

> Angular 20 SSR app (standalone, with zone.js) for the Shop project. Includes strict TypeScript, ESLint, and ready SSR scripts.

## Tech stack

- Angular 20 + SSR, TypeScript, RxJS
- Tooling: ESLint, Prettier, Jest or Karma (pick one), Angular CLI

## Quickstart

### Prereqs

- Node 22 via nvm

### Install & run (dev)

```bash
nvm use 22
npm ci
npm start           # ng serve
```

### SSR

```bash
npm run build:ssr
npm run serve:ssr   # http://localhost:4000
```

## Scripts

Add to `package.json` (if not present):

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "build:ssr": "ng build && ng run shop-frontend:server",
    "serve:ssr": "node dist/shop-frontend/server/main.js"
  }
}
```

## Configuration

- Set API base URL in `src/environments/environment.development.ts`:

```ts
export const environment = {
  apiBaseUrl: 'http://localhost:8080',
};
```

- Production value goes in `environment.ts`

## Folder structure (key bits)

```
src/app/
├─ core/      // interceptors, services, models
├─ features/  // feature areas (e.g., products, cart)
├─ shared/    // reusable ui & utilities
└─ app.routes.ts
```

## Code style

- ESLint via `@angular-eslint`
- Prettier config `.prettierrc`
- Enforce `type-check` in CI

## Testing

- Component tests with Jest or Karma
- Basic e2e (optional) with Playwright

## Docker (optional)

```bash
docker build -t shop-frontend .
docker run -p 4000:4000 shop-frontend
```
