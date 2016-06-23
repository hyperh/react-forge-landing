const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const isProd = process.env.NODE_ENV === 'production';

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
];
const prodPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    screw_ie8: true,
    compressor: { warnings: false },
  }),
];

module.exports = {
  devtool: isProd ? 'cheap-module-source-map' : 'eval',
  entry: isProd ? './src/index' : [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  plugins: isProd ? prodPlugins : devPlugins,
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: path.join(__dirname, 'src'),
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        loaders: [
          'url?limit=10000&hash=sha512&digest=hex&name=public/img/[name]_[hash].[ext]',
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file?name=public/fonts/[name].[ext]',
      },
    ],
  },
  postcss: () => [autoprefixer],
};
