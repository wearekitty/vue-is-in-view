var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './is-in-view.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vue-is-in-view.js',
    library: 'VueIsInView',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', { modules: false }],
            ],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
};
