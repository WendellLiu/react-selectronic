const rollup = require('rollup');
const { inputOptions, outputOptions } = require('./demoConfig');

async function build() {
  const bundle = await rollup.rollup(inputOptions);

  await bundle.write(outputOptions);
}

build();
