var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      routes: path.resolve(__dirname, 'src/routes'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}