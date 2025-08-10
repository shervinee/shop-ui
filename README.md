shop-frontend (Angular) — README

Short blurb

Angular 20 SSR app (standalone, with zone.js) for the Shop project. Includes strict TypeScript, ESLint, and ready SSR scripts.

Tech stack

Angular 20 + SSR, TypeScript, RxJS

Tooling: ESLint, Prettier, Jest or Karma (pick one), Angular CLI

Quickstart

Prereqs

Node 22 via nvm

Install & run (dev)

nvm use 22
npm ci
npm start           # ng serve

SSR

npm run build:ssr
npm run serve:ssr   # http://localhost:4000

Scripts

Add to package.json (if not present):

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

Configuration

Set API base URL in src/environments/environment.development.ts:

export const environment = {
  apiBaseUrl: 'http://localhost:8080',
};

Production value goes in environment.ts

Folder structure (key bits)

src/app/
├─ core/      // interceptors, services, models
├─ features/  // feature areas (e.g., products, cart)
├─ shared/    // reusable ui & utilities
└─ app.routes.ts

Code style

ESLint via @angular-eslint

Prettier config .prettierrc

Enforce type-check in CI

Testing

Component tests with Jest or Karma

Basic e2e (optional) with Playwright

Docker (optional)

docker build -t shop-frontend .
docker run -p 4000:4000 shop-frontend

Repo hygiene (both)

.editorconfig for consistent whitespace

.nvmrc with v22

.java-version with 21

.gitattributes to normalize line endings

CODE_OF_CONDUCT.md, CONTRIBUTING.md

PR template + Issue templates (bug/feature)

Conventional Commits (feat:, fix:) + simple branch model (main, feat/*)

GitHub Actions (drop into .github/workflows/)

api-ci.yml

name: API CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: '21'
          cache: gradle
      - name: Build
        run: ./gradlew clean build --no-daemon

ui-ci.yml

name: UI CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - name: Install
        run: npm ci
      - name: Lint
        run: npm run lint
      - name: Type Check
        run: npm run type-check
      - name: Build SSR
        run: npm run build:ssr

MVP scope suggestions (pick one)

Mini‑Shop: Products, Cart, Orders, Users

Lab Inventory: Items, Locations, Checkouts, Suppliers

Scenario Compare (Finance): Scenarios, Variables, Comparators, Reports

Each has a tight 4‑entity core to keep the first sprint small.
