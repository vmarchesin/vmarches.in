const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    './src/app.js',
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
        // use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [
          path.resolve(__dirname, 'src/assets')
        ],
        use: [ 'file-loader' ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [ 'file-loader' ],
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      images: path.resolve(__dirname, 'src/assets/images'),
      fonts: path.resolve(__dirname, 'src/assets/fonts'),
      routes: path.resolve(__dirname, 'src/routes'),
      scss: path.resolve(__dirname, 'src/assets/scss'),
      tools: path.resolve(__dirname, 'src/tools'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['*', '.js', '.jsx', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
}