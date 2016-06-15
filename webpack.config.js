var path = require('path');

module.exports = {
  entry:  './src',
  output: {
      path:     'builds',
      filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }  
};