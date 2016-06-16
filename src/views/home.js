require('../css/base.css');

var React = require('react');
var ReactDom = require('react-dom');
var home = require('../jsx/home.jsx');


var page = React.createElement(home, null);
ReactDom.render(
  page,
  document.body
);
window.page = page;