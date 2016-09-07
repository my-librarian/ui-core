/* eslint-disable no-var */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

module.exports = {
  entry: {
    index: ['./app/index.js'],
    vendor: [
      'angular',
      'angular-translate',
      'angular-ui-bootstrap',
      'angular-ui-router',
      'ng-infinite-scroll'
    ]
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel?sourceMap'
        ]
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
        loader: 'url?limit=10000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html',
      favicon: './app/styles/images/favicon.ico'
    }),
    new ExtractTextPlugin('[name].css'),
    new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
};
