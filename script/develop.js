const rollup = require('rollup');
const serve = require('serve');
const fse = require('fs-extra');
const { inputOptions, outputOptions } = require('./demoConfig');


const watchOptions = {
  ...inputOptions,
  output: outputOptions,
};

async function main() {
  await fse.emptyDir('static');
  await fse.copy('public', 'static');
  const watcher = await rollup.watch(watchOptions);
  await serve('static');

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
        console.log(event);
        break;
      case 'FATAL':
        console.log('FATAL');
        console.log(event);
        break;
      default:
        console.log('something else');
        console.log(event);
        break;
    }
  });
}


main();
