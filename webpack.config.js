const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); // Generate HTML-file
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // Create CSS-File from sass instead of injecting styles inline with loaders

const DIST_DIR = path.resolve(__dirname, "dist");
const APP_DIR = path.resolve(__dirname, "src");

const isProd = process.env.NODE_ENV === "production"; // HMR doesnt work with ETP
const cssDev = ["style-loader", "css-loader", "sass-loader"];
const cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: ["css-loader", "sass-loader"],
  publicPath: "/dist"
});

const cssConfig = isProd ? cssProd :cssDev;

module.exports = {
  entry: APP_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },

  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    compress: true,
    stats: "errors-only",
    open: true,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "HomePage",
      template: APP_DIR + "/index.html"
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader",
    }, {
      test: /\.scss$/,
      use: cssConfig
    }],
  },
};
