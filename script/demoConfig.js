const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const builtins = require('rollup-plugin-node-builtins');
const globals = require('rollup-plugin-node-globals');


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
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Children', 'createElement'],
      },
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    builtins(),
    globals(),
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
