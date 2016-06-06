var React = require('react');
var Layout = require('./layout/default');

var Home = React.createClass({
  render: function() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.site}:</h1>
        <p>welcome</p>
      </Layout>
    );
  }
});

module.exports = Home;