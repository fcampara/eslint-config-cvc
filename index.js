const base = require('./lib/base.js');
const next = require('./lib/next.js');
const react = require('./lib/react.js');

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort', 'import'],
  rules: {
    ...base,
    ...next,
    ...react,
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
};
