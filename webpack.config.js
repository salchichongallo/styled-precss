const path = require('path');
const precss = require('precss');
const webpack = require('webpack');
const syntax = require('postcss-jsx')();

module.exports = {

  mode: 'development',

  devtool: 'inline-source-map',

  entry: path.join(__dirname, 'src/index'),

  output: {
    publicPath: '/assets/',
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'public/assets'),
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'postcss-loader',
            options: {
                syntax,
                plugins: [ precss ],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    alias: {
      sass: path.join(__dirname, 'src/sass'),
    },
  },

  devServer: {
    port: 3000,
    publicPath: '/assets/',
    contentBase: path.join(__dirname, 'public'),
  },

  performance: {
    hints: false,
  },
};
