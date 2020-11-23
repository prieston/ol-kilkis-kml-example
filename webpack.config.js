const webpack = require('webpack');
const path = require("path");

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000
  }
};