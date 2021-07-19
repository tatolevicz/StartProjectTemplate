const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  output: {
    publicPath: path.join(__dirname, "public"),
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};
