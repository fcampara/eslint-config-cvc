// const base = require('./lib/base.js');
// const next = require('./lib/next.js');
// const react = require('./lib/react.js');

module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true,
    "Headers": true,
    "Request": true,
    "fetch": true
  },
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.tsx"
      ],
      "parserOptions": {
        "project": [
          "./tsconfig.json"
        ]
      }
    }
  ],
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".jsx",
          ".tsx"
        ]
      }
    ],
    "quotes": [
      2,
      "double"
    ],
    "no-use-before-define": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "semi": [
      2,
      "always"
    ],
    "no-console": "off",
    "array-callback-return": "off",
    "prefer-destructuring": "off",
    "react/no-array-index-key": "off",
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-boolean-value": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "@typescript-eslint/consistent-type-definitions": [
      "error",
      "interface"
    ]
  }
};
