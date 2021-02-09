const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/script.ts",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  output: {
    path: __dirname + "/docs",
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
