module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },

  extends: ['eslint:recommended', 'eslint-config-prettier'],

  plugins: ['svelte3'],

  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],

  ignorePatterns: [
    '.DS_Store',
    'node_modules',
    'package-lock.json',
    '.svelte-kit',
    'build'
  ]
}
