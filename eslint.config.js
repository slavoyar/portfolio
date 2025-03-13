import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginVue from 'eslint-plugin-vue';
import typescriptEslint from 'typescript-eslint';

export default typescriptEslint.config(
  globalIgnores(['.nuxt', '.output', 'node_modules']),
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  eslintPluginPrettier
);
