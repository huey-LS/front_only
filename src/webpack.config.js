module.exports = {
  entry: {
    view1: "./src/js/home.js"
  },
  output: {
    path: __dirname,
    filename: "[name].entry.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: "style!css"
      }, {
        test: /\.jsx$/,
        loader: 'babel-loader!jsx-loader?harmony'
      }
    ]
  }
};