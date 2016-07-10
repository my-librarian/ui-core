/* eslint-disable no-var */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|jpeg|png|gif)/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
};
