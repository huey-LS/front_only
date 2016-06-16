module.exports = {
  entry: {
    'views/home': './src/views/home.js',
    'js/main': './src/js/main.js',
    'lib/react': './src/lib/react.js',
    'lib/react-dom': './src/lib/react-dom.js'
  },
  output: {
    filename: '[name].entry.js'
  },
  externals: {
    react: 'react',
    'react-dom': 'window[\'react-dom\']'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader!jsx-loader?harmony'
      }
    ]
  }
};