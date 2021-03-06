const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

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
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        include: [
          path.resolve(__dirname, 'src/assets'),
        ],
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
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
    historyApiFallback: true,
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new ExtractTextPlugin('styles.css'),
    new CompressionPlugin({
      minRatio: 1,
      test: /\.js(\?.*)?$/i,
    }),
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)(),
  ],
};
