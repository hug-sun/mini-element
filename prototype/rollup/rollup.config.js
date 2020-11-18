const es = {
  input: "src/entry.js",
  output: {
    file: "dist/index.js",
    name: "Element",
    format: "umd",
  },
};

import babel from "@rollup/plugin-babel";
import { terser } from 'rollup-plugin-terser'
const minEs = {
  input: "src/entry.js",
  output: {
    file: "dist/index.min.js",
    name: "Element",
    format: "umd",
  },
  plugins: [terser()],
};

const cjs = {
  input: "src/entry.js",
  output: {
    file: "dist/index.cjs.js",
    name: "Element",
    format: "cjs",
  },
  plugins: [babel()],
};

export default [es, minEs, cjs];
