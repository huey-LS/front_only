module.exports = {
  entry: {
    'views/home': './src/views/home.js',
    'js/home': './src/js/home.js',
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