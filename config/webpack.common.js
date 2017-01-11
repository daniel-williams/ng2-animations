var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
    alias: {
      'ScrollMagicGSAP': 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
      'ScrollToPlugin': 'gsap/src/uncompressed/plugins/ScrollToPlugin',
      'EasePack': 'gsap/src/uncompressed/easing/EasePack'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'imports-loader?define=>false'
      },
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(otf|ttf|eot|woff2?|ico)$/,
        loader: 'file?name=content/fonts/[name].[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=content/images/[hash].[ext]',
            'image-webpack?progressive=true&optimizationLevel=7&interlaced=true'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass'),
        include: helpers.root('client', 'content', 'styles')
      },
      {
        test: /\.scss$/,
        loader: 'raw!postcss!sass',
        include: helpers.root('src', 'app')
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'client/content/images/favicon.ico'
    })
  ],

  postcss: [
    autoprefixer({
      browsers: ['last 2 version']
    })
  ]
};
