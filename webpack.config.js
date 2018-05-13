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
  publicPath: "/dist",
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    // publicPath: "/"
  },

  devServer: {
    contentBase: DIST_DIR,
    historyApiFallback: true,
    compress: true,
    stats: "errors-only",
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "HomePage",
      template: `${APP_DIR}/index.html`,
    }),
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: !isProd,
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: cssConfig,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "url-loader?limit=10000&name=imgs/[name].[ext]", // Or publicPath & outputPath together s. also https://www.youtube.com/watch?v=cDLfpth5a3s
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]",
      },
      {
        test: /\.woff$/,
        loader: "url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]",
      },
      {
        test: /\.woff2$/,
        loader: "url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]",
      },
      {
        test: /\.[ot]tf$/,
        loader: "url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]",
      },
      {
        test: /\.eot$/,
        loader:
          "url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]",
      },
    ],
  },
};
