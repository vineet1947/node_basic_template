const { ESLint } = require('eslint')

module.exports = [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': 'warn',
      indent: ['error', 2],
      quotes: ['error', 'single'],
    },
  },
]
