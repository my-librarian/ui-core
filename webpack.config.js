/* eslint-disable no-var */
var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
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
  devServer: {
    contentBase: './',
    hot: true,
    proxy: {
      '/api*': 'http://127.0.0.1:8090'
    }
  },
  devtool: 'source-map',
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html'
    })
  ]
};
