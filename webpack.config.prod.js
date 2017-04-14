const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

const pageChunks = [
  'admin',
  'authors',
  'books',
  'login',
  'profile',
  'subjects'
];
const pageChunkEntries = pageChunks.reduce((entry, chunk) => {

  entry[chunk] = `./app/views/${chunk}/index.js`;

  return entry;

}, {});

const entry = Object.assign({
  index: './app/index.js'
}, pageChunkEntries);

module.exports = {
  entry,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader?sourceMap'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(css|less)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap',
          'less-loader?sourceMap'
        ])
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|jpeg|png|gif)/,
        loaders: [
          'url-loader?limit=10000'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './app/index.html',
      favicon: './app/styles/images/favicon.ico',
      excludeChunks: pageChunks
    }),
    new ExtractTextPlugin('[name].css'),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: ({resource}) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      )
    }),
    new Webpack.optimize.UglifyJsPlugin()
  ]
};
