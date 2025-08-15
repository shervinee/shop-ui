// eslint.config.mjs
// @ts-check
import js from "@eslint/js";
import angular from "angular-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // TS + Angular
  {
    files: ["**/*.{js,ts,mjs,cjs}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        { type: "attribute", prefix: "app", style: "camelCase" },
      ],
      "@angular-eslint/component-selector": [
        "error",
        { type: "element", prefix: "app", style: "kebab-case" },
      ],
      "@typescript-esllint/no-empty-interface": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prettier/prettier": "warn",
    },
  },

  // HTML templates
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },

  // SSR/Node files
  {
    files: ["src/server.ts", "src/**/*.server.ts", "server.ts"],
    languageOptions: { globals: globals.node },
  },
  eslintConfigPrettier,
  prettierRecommended
);
