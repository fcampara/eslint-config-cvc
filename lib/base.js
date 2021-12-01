module.exports = {
  'import/no-extraneous-dependencies': "off",
  'import/prefer-default-export': 0,
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        [
          '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
        ],
        ['^react', '^@?\\w'],
        ['module'],
        ['^@material'],
        ['^@cvccorp-components'],
        ['^\\u0000'],
        ['^(src|internals)(/.*|$)'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^.+\\.s?css$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
  'no-console': 'warn',
  'no-nested-ternary': 0,
  'no-underscore-dangle': 0,
  'no-use-before-define': 0,
};
