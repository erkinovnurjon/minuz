module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    semi: ['error', 'never'],
    'max-len': 'off',
    'linebreak-style': 'off',
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }],
    'arrow-parens': ['error', 'as-needed'],
    'vue/multiline-html-element-content-newline': 'off',
    "vue/no-unused-components" : 'off',
    "no-unused-vars" : 'off',
    "import/newline-after-import" : 'off',
    "vue/attributes-order" : 'off',
    "vue/html-self-closing" : 'off',
    "vue/no-multi-spaces" : 'off',
    "key-spacing" : 'off',
    "comma-dangle" : 'off',
    "no-undef" : 'off',
    "eqeqeq" : 'off',
    "padded-blocks" : 'off',
    "semi" : 'off',
    "comma-spacing" : 'off',
    "no-trailing-spaces" : 'off',
    "indent" : 'off',
    "no-multiple-empty-lines" : 'off',
    "eol-last" : 'off',
    "no-unreachable" : 'off',
    'no-tabs' : 'off',
    'arrow-body-style' : 'off',
    "space-before-blocks" : 'off',
    'object-curly-spacing' : 'off',
    'quotes' : 'off',
    'no-underscore-dangle' : 'off',
    "arrow-parens" : 'off',
    'keyword-spacing' : 'off',
    'dot-notation' : 'off',
    "no-extra-boolean-cast" : "off",
    "import/order" : "off",
    "object-curly-newline" : 'off',
    "no-var" : "off",
    "object-shorthand" : "off",
    "spaced-comment" : "off",
    "operator-linebreak" : "off",
    "import/no-unresolved" : "off",
    "curly" : "off",
    "nonblock-statement-body-position" : "off",
    "vue/max-attributes-per-line" : "off",
    "vue/html-closing-bracket-newline" : "off",
    "nonblock-statement-body-position" : "off",
    "block-spacing" : "off",
    "vue/html-indent" : "off",
    "no-else-return" : "off",
    "no-lonely-if" : "off",
    "consistent-return" : "off",
    "no-param-reassign" : "off",
    "prefer-object-spread" : "off",
    "vue/order-in-components" : "off",
    "semi-spacing" : "off",
    "no-plusplus" : "off",
    "space-unary-ops" : "off",
    "vue/singleline-html-element-content-newline" : "off",
    "vue/html-closing-bracket-spacing" : "off",
    "import/extensions" : "off",
    "space-infix-ops" : "off",
    "vue/mustache-interpolation-spacing" : "off",
    "no-unused-expressions" : "off",
    "no-sequences" : "off",
    "no-dupe-keys" : "off",
    "prefer-template" : "off"
  },
}
