/* eslint-disable no-var */
var Webpack = require('webpack');

var config = require('./webpack.config.prod');

config.entry.unshift('webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server');
config.devServer = {
  contentBase: './',
  hot: true,
  proxy: {
    '/api*': 'http://127.0.0.1:8090'
  }
};
config.plugins.unshift(new Webpack.HotModuleReplacementPlugin());

module.exports = config;
