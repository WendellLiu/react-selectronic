const rollup = require('rollup');
const fse = require('fs-extra');

const { inputOptions, outputOptions } = require('./demoConfig');

async function main() {
  await fse.emptyDir('static');
  await fse.copy('public', 'static');

  const bundle = await rollup.rollup(inputOptions);
  await bundle.write(outputOptions);
}

main();
