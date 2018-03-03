const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin"); // Generate HTML-file
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // Create CSS-File from sass instead of injecting styles inline with loaders

const DIST_DIR = path.resolve(__dirname, "dist");
const APP_DIR = path.resolve(__dirname, "src");

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
    open: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: "HomePage",
    // minify: {
    //   collapseWhitespace: true
    // },
    // hash: true,
    template: APP_DIR + "/index.html"
  }), new ExtractTextPlugin({
    filename: "styles.css",
    disable: false,
    allChunks: true
  })],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader",
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ["css-loader", "sass-loader"],
        publicPath: "/dist"
      }),
    }],
  },
};
