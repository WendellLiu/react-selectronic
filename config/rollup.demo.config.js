import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace'


const isProduction = process.env.NODE_ENV === 'production';
const NODE_ENV = isProduction ? 'production' : 'development';

export default {
  input: 'demo/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
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
    isProduction && uglify() // minify, but only in production
  ]
};
