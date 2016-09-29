module.exports = {
  parser: 'babel-eslint',
  ecmaFeatures: {
    jsx: true,
    modules: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'fred/rules/possible-errors',
    'fred/rules/best-practices',
    'fred/rules/node-common',
    'fred/rules/variables',
    'fred/rules/stylistic-issues',
    'fred/rules/es6',
  ],
};
