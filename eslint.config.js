import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import simpleSortPlugin from 'eslint-plugin-simple-import-sort';
import eslintPluginVue from 'eslint-plugin-vue';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  globalIgnores(['.nuxt', '.output', 'node_modules']),
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue', '*.ts', '**/*.ts', '*.js', '**/*.js'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        useI18n: 'readonly',
        useHead: 'readonly',
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleSortPlugin,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  eslintPluginPrettier
);
