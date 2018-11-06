const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      {test: /\.html$/, use: [{ loader: "html-loader"}]},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      {test: /\.scss$/, use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'] }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "styles.css"}),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}
