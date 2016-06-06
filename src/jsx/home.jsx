var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.site}:</h1>
        <p>welcome</p>
      </div>
    );
  }
});

module.exports = Home;