module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    'brace-style': 'beside',
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
