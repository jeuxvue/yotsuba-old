module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [ 'plugin:vue/vue3-recommended', '@vue/airbnb' ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': [ 'error', 'unix' ],
    indent: [ 'error', 2 ],
    semi: [ 'error', 'never' ],
    quotes: [ 'error', 'single' ],
    'quote-props': [ 'error', 'as-needed' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'as-needed', { requireForBlockBody: true } ],
    'vue/html-indent': [ 'error', 2 ],
    // 'vue/component-tags-order': [ 'error', {
    //   order: [ 'script', 'template', 'style' ],
    // } ],
    'vue/html-quotes': [ 'error', 'single', { avoidEscape: true } ],
    'vue/html-self-closing': [ 'error', {
      html: {
        void: 'never',
        normal: 'always',
        component: 'any',
      },
      svg: 'always',
      math: 'always',
    } ],
    'vue/max-attributes-per-line': [ 'error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    } ],
    'vue/match-component-file-name': [ 'error', {
      extensions: [ 'vue' ],
      shouldMatchCase: false,
    } ],
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
  overrides: [
    {
      files: [ '**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)' ],
      env: {
        jest: true,
      },
    },
  ],
}
