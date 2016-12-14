const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: '/node_modules|bower_components/',
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react'] } },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
}