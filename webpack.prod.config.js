const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "cheap-module-source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: ""
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[name]_[local]_[hash:base64:5]"
              }
            },
            { loader: "sass-loader" },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: () => [
                  autoprefixer({
                    browsers: ["> 1%", "last 2 versions"]
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: "style.bundle.css" })
  ]
};
