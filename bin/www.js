const path = require('path');
const register = require('babel-register');

register({
  only: [
    path.join(__dirname, '../application'),
    path.join(__dirname, '../app'),
    path.join(__dirname, '../src/views')
  ],
  extensions: ['.jsx', '.js'],
  ignore: /node_modules/,
  plugins: ['transform-es2015-modules-commonjs'],
  presets: ['react']
});

const app = require('../app.js');
//app();