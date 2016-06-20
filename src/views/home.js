require('../css/base.css');

var React = require('react');
var ReactDom = require('react-dom');
var loading = require('../jsx/loading.jsx');


var preLoadElement = React.createElement(loading, {loading: 1});
var preLoad = ReactDom.render(
  preLoadElement,
  document.body
);
window.preLoad = preLoad;
window.preLoadElement = preLoadElement;
