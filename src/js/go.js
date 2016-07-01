var React = require('react');
var ReactDom = require('react-dom');
var goView = require('../views/go.jsx');

setTimeout(function(){
    ReactDom.render(
      React.createElement(goView),
      document.getElementById('root')
    );
}, 3000);
console.log('加载成功，3秒后移除loading');