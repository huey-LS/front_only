var React = require('react');
var ReactDOM = require('react-dom');

var Loading = React.createClass({
  destroy: function(){
    var element = ReactDOM.findDOMNode(this);
    element.parentNode.removeChild(element);
    console.log('loading 移除');
  },
  render: function() {
    return (
      <div>
        loading
      </div>
    );
  }
});

module.exports = Loading;