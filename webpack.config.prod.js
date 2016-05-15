/* eslint-disable no-var */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: './dist',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?sourceMap'
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html'
    })
  ]
};
