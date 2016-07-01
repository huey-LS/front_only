var React = require('react');
var Layout = require('./layout.jsx');

var Loading = require('./Loading.jsx')

var PreloadPage = React.createClass({
  rawScript: function(){
    return { __html: this.props.preloadScript };
  },
  render: function() {
    return (
      <Layout title={this.props.title}>
        <script src='/assets/lib/react/15.1.0/react.min.js'></script>
        <script src='/assets/lib/react/15.1.0/react-dom.min.js'></script>
        <div id="root">
          <Loading />
        </div>
        <script src={'/assets/js/' + this.props.entry + '.entry.js'}></script>
      </Layout>
    );
  }
});

module.exports = PreloadPage;
