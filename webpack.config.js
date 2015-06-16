'use strict';

var webpack = require('webpack');
var path = require('path')

module.exports = {
  devtool: 'eval',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './scripts/index'
    ],
    vendor: [
      'react',
      'react-router',
      'baobab',
      'baobab-react'
    ]
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      app: path.join(__dirname, 'scripts'),
      stores: path.join(__dirname, 'scripts', 'stores'),
      actions: path.join(__dirname, 'scripts', 'actions'),
      components: path.join(__dirname, 'scripts', 'components'),

      styles: path.join(__dirname, 'styles')
    },
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/, loaders: 
          [
            'react-hot',
            'babel-loader?stage=0&optional=runtime',
          ],
          exclude: /node_modules/
      },
      {
        test: /\.sass$/, loaders: 
          [
            'style',
            'css',
            'autoprefixer-loader',
            'sass?indentedSyntax'
          ]
      },
      {
          test: /\.(eot|ttf|woff|svg|png)(\?.+)?$/,
          loader: 'file-loader'
      }
    ]
  }
};
