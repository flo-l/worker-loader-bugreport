const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\worker.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "worker-loader",
        options: {
          inline: false,
          fallback: false,
        }
     },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".wasm"] },
  output: {
    globalObject: `typeof self !== 'undefined' ? self : this`,
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "[name].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 4000,
    publicPath: "http://localhost:4000/dist",
    hot: false,
  },
  //plugins: [new webpack.HotModuleReplacementPlugin()]
};
