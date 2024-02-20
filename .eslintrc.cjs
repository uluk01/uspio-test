module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': [0, { '<js>': 'always' }],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-useless-escape': 'off',
    'prefer-template': 'warn',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
  },
  env: {
    browser: true,
    es6: true,
  },
};
