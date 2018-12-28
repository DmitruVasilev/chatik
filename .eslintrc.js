module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'no-mixed-operators': 'off',
  },
};
