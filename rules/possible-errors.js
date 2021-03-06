module.exports = {
  rules: {
    'no-console': 'off',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false,
    }],
    'no-template-curly-in-string': 'error',
    'no-unsafe-negation': 'error',
    'valid-jsdoc': 'warn',
  }
}
