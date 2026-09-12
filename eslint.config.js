import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import js from '@eslint/js';

export default defineConfig([
  {
    files: ['**/*.{js, ts}'],
    plugins: {
      js,
      tseslint,
    },
    extends: [js.configs.recommended, tseslint.configs.recommended, eslintConfigPrettier],
    rules: {
      'no-unused-vars': 'warn',
      'prefer-const': 'warn',
      'no-console': 'warn',
    },
    ignores: ['node_modules/', '.git/', './.gitignore'],
  },
]);
