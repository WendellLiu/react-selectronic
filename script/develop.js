const rollup = require('rollup');
const { inputOptions, outputOptions } = require('./demoConfig');


const watchOptions = {
  ...inputOptions,
  output: outputOptions,
};
const watcher = rollup.watch(watchOptions);

// event.code
//   START        — the watcher is (re)starting
//   BUNDLE_START — building an individual bundle
//   BUNDLE_END   — finished building a bundle
//   END          — finished building all bundles
//   ERROR        — encountered an error while bundling
//   FATAL        — encountered an unrecoverable error
watcher.on('event', async (event) => {
  switch (event.code) {
    case 'START':
      console.log('START');
      break;
    case 'BUNDLE_START':
      console.log('BUNDLE_START');
      break;
    case 'BUNDLE_END':
      console.log('BUNDLE_END');
      break;
    case 'END':
      console.log('END');
      break;
    case 'ERROR':
      console.log('ERROR');
      break;
    case 'FATAL':
      console.log('FATAL');
      break;
    default:
      console.log('something else');
      break;
  }
});

// stop watching
// watcher.close();
