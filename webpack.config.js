const Webpack = require('webpack');

const config = require('./webpack.config.prod');

config.devtool = 'source-map';
config.entry.hot = 'webpack-dev-server/client?http://localhost:8080/';
config.devServer = {
  contentBase: './',
  hot: true,
  proxy: {
    '/api/*': 'http://127.0.0.1:8090'
  },
  stats: {
    children: false,
    chunks: false
  }
};
config.plugins.unshift(new Webpack.HotModuleReplacementPlugin());
config.plugins.pop();

module.exports = config;
