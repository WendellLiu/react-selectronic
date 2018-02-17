const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');


const isProduction = process.env.NODE_ENV === 'production';
const NODE_ENV = isProduction ? 'production' : 'development';

const inputOptions = {
  input: 'demo/index.js',
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
    resolve({
      jsnext: true,
      main: true,
    }),
    commonjs(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    isProduction && uglify(),
  ],
};

const outputOptions = {
  file: 'static/bundle.js',
  format: 'iife', // immediately-invoked function expression — suitable for <script> tags
  sourcemap: true,
};

module.exports = {
  inputOptions,
  outputOptions,
};
