/* eslint-disable import/no-extraneous-dependencies */
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";

import minimizer from "../webpack.minimizer";

const forkTsChecker = new ForkTsCheckerWebpackPlugin();

const externals = ["pg-hstore", "pg-native"];

module.exports = {
  target: "node",
  entry: "./src/server.ts",
  mode: "production",
  output: {
    path: path.join(__dirname, "/../dist"),
    filename: "server.js",
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
        use: [],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".ts"],
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
  },
  externals,
  plugins: [
    forkTsChecker,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  optimization: {
    minimizer,
    moduleIds: "deterministic",
  },
};
