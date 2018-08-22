var path = require('path');
var webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//   entry: ['babel-polyfill','index.js'],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './webapp'),
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }]
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            mimetype: 'image/png'
          },
        },
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
          query: {
            name: '[name].[ext]'
          },
        },
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    inline: true,
    contentBase: './webapp',
    port: 3000
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
    alias: {
      common: path.resolve(__dirname, './src/dev/js/containers/common'),
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './webapp/index.html'),
      path: __dirname,
      filename: 'index.html',
    })
  ]
};
