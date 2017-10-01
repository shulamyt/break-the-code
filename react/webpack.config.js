const { resolve } = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const autoPrefixer = require('autoprefixer');

const context = resolve(__dirname, 'src');

module.exports = {
  entry: {
    app: './'
  },

  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  context,

  devServer: {
    proxy:{
      '/services': {
        target: 'http://getthecodes.com'
        // pathRewrite: {
        //   '/services': '/services'
        // }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: context,
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, },
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              //modules: true,
              //camelCase: true,
              //localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [
                  autoPrefixer
                ]
              }
            }
          },

          {
            loader: 'sass-loader',
            options: { sourceMap: true, },
          }
        ]
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }

    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },

  plugins: [
    new HtmlPlugin({
      title: 'Get the codes'
    }),
  ]
};
