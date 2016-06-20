var React = require('react');
var ReactDom = require('react-dom');
var goView = require('../jsx/go.jsx');

setTimeout(function(){
    preLoad && preLoad.destroy && preLoad.destroy();
    ReactDom.render(
      React.createElement(goView, {loading: 'success'}),
      document.body
    );
}, 3000);
console.log('加载成功，3秒后移除loading');