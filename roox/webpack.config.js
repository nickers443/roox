const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader",]
      },
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}