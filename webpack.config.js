const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'vue-is-in-view': './is-in-view.js',
    'vue-is-in-view.min': './is-in-view.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
        loader: 'eslint-loader',
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      include: /\.min\.js$/,
      sourceMap: true,
      parallel: true,
    }),
  ],
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
};
