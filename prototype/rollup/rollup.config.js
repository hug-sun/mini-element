const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
// import vuePlugin from "rollup-plugin-vue";
const es = {
  input: "src/entry.js",
  output: {
    file: "dist/index.js",
    name: "Element",
    format: "iife",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};

import { terser } from "rollup-plugin-terser";
const minEs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.min.js",
    name: "Element",
    format: "umd",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
    terser(),
  ],
};

const cjs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.cjs.js",
    name: "Element",
    format: "cjs",
  },
  plugins: [
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};

export default [es, minEs, cjs];
