var React = require('react');
var Layout = require('./layout.jsx');

var PreloadPage = React.createClass({
  rawScript: function(){
    return { __html: this.props.preloadScript };
  },
  render: function() {
    return (
      <Layout title={this.props.title}>
        <script src='/assets/lib/react/15.1.0/react.min.js'></script>
        <script src='/assets/lib/react/15.1.0/react-dom.min.js'></script>
        <script dangerouslySetInnerHTML={this.rawScript()} />
        <script src={'/assets/js/' + this.props.entry + '.entry.js'}></script>
      </Layout>
    );
  }
});

module.exports = PreloadPage;
