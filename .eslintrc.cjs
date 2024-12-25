require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/eslint-config-airbnb',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['prettier', 'simple-import-sort', 'import', 'tailwindcss'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      rules: {
        'import/extensions': ['off'], // Disable extension errors for Vue
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    "vue/no-v-model-argument": "off",
    "vuejs-accessibility/form-control-has-label": "off",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },
      "multiline": {
        "max": 1
      }
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'asyncData',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    "vue/no-irregular-whitespace": ["error", {
      "skipStrings": true,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false,
      "skipHTMLAttributeValues": false,
      "skipHTMLTextContents": false
    }],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/match-component-file-name": ["error", {
      "extensions": ["vue"],
      "shouldMatchCase": false
    }],
    "vue/no-dupe-keys": ["error", {
      "groups": []
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": true,
    }],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    'linebreak-style': ["error", "unix"],
    'no-console': 'error',
    'no-debugger': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'constructor-super': 'off',
    "no-mixed-operators": [
      "error",
      {
        "groups": [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        "allowSamePrecedence": true
      }
    ],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': 'error',
    'no-param-reassign': 'off',
    'prefer-destructuring': ["error", {
      "array": true,
      "object": true
    }, {
        "enforceForRenamedProperties": false
      }
    ],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'max-len': ['error', { code: 120 }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true }
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'import/no-extraneous-dependencies': 'off',

  },
};
