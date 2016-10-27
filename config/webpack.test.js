var helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      // {
      //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      //   loader: 'null'
      // },
      {
        test: /\.(ttf|eot|woff2?|ico)$/,
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
        loader: 'null',
        include: helpers.root('client', 'content', 'styles')
      },
      {
        test: /\.scss$/,
        loader: 'raw!sass',
        include: helpers.root('src', 'app')
      }
    ]
  }
}
