//.\node_modules\.bin\eslint --init
module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/base',
    'airbnb-base'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    "indent": ["error", 2]
  },
  settings: { 
    'import/resolver': { 
      webpack: { 
        config: require.resolve('@vue/cli-service/webpack.config.js') 
      } 
    }, 
  }
}
