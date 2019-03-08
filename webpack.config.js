var webpack = require('webpack')
var path = require('path')

var entryPoint = './pages';
const publicPath = './public';

module.exports = {
  context: __dirname,

  entry: {
      index: entryPoint + '/index.jsx',
  },

  output: {
      path: path.resolve(__dirname, './public/'),
      publicPath,
      filename: '[name].bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
             test: /\.css$/,
             use: [
                 'style-loader',
                 'css-loader',
             ]

        },
        {
            test: /\.(jpg|png|otf|svg)$/,
            use: {
              loader: 'url-loader'
            }
        },
    ]
  }

}