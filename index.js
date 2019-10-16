module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  rules: {
    'no-param-reassign': [2, { 'props': false }],
    'no-shadow': ['error', { 'allow': ['state', 'modules']}],
    'no-empty': ['error', { 'allowEmptyCatch': true }]
  }
};
