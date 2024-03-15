const path = require('path');

  module.exports = {
    entry: './src/index.js',
    plugins: [],
    output: {
     filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devServer: {
        contentBase: path.join(__dirname, '/public'),
       compress: true,
       watchContentBase: true
    }
  };