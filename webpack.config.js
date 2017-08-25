const webpack = require("webpack"); // eslint-disable-line import/no-unresolved
const path = require("path");

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: "./index.jsx",
  output: {
    path: path.join(__dirname, "./public/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {}
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};
