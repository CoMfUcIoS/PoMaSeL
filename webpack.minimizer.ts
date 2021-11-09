/* eslint-disable import/no-extraneous-dependencies */
import TerserPlugin from "terser-webpack-plugin";

export default [
  new TerserPlugin({
    parallel: true,
    terserOptions: {
      ecma: 2016,
    },
  }),
];
