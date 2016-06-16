module.exports = {
  entry: {
    'js/go': './src/js/go.js',
    'js/main': './src/js/main.js'
  },
  output: {
    filename: '[name].entry.js'
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
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