const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: 'builds',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint',
      },
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    }],
  },
};
