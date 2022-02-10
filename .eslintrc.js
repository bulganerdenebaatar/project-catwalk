module.exports = {
  env: {
    browser: true,
    es2021: true,
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
  ],
  rules: {
    'no-console': 'off',
    'no-useless-constructor': 'off',
    'padded-blocks': 'off',
    'react/prefer-stateless-function': 'off',
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    'no-multiple-empty-lines': 'off',
  },
};
