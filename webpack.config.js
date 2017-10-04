const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'scripts'),
  build: path.join(__dirname, 'dist'),
};

module.exports = {
    entry: {
      app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'app.min.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
            },
          },
          {
            test: /\.less$/,
            use: [
              'style-loader',
              'css-loader',
              'less-loader',
            ],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
              'file-loader?hash=sha512&digest=hex&name=assets/[hash].[ext]', {
              loader: 'image-webpack-loader',
              query: {
                gifsicle: {
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7
                }
              }
            }
            ]
          },
          {
            test: /\.svg$/,
            loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
          },
          {
            test: /\.woff$/,
            loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
          },
          {
            test: /\.woff2$/,
            loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
          },
          {
            test: /\.[ot]tf$/,
            loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
          },
          {
            test: /\.eot$/,
            loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
          },
          {
            test: /\.mp3$/,
            loaders: 'file-loader?name=assets/[name].[ext]'
          },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
      //new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
