const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$, .svg$/i,
        exclude: /node_modules/,
        use: {
          loader: ["babel-loader", '@svgr/webpack']
        },
      }
    ]
  },
  mode: "development"
};