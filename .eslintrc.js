module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'no-console': 'off',
    'no-useless-constructor': 'off',
    'padded-blocks': 'off',
    'react/prefer-stateless-function': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'no-multiple-empty-lines': 'off',
    'react/jsx-no-constructed-context-values': 'warn',
    'import/no-cycle': 'off',
  },
};
