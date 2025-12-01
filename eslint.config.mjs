export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-constant-condition': 'warn',
      'no-console': 'off'
    }
  }
];
