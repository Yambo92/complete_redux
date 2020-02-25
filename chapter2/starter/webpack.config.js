
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: "./app/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devtool: "source-map",
    module:{
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                include: [
                  path.resolve(__dirname, "app")
                ],
                exclude: [
                  path.resolve(__dirname, "app/node_modules")
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: 'app/index.html'
        })
      ],
    devServer:{
      proxy:{
        '/api':{
            target: "https://s3.amazonaws.com",
            pathRewrite:{'^/api': ''},
            secure: false
        }
      }
     
    }
}