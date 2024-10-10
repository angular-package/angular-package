import rollupDefaultConfig from './../../rollup.config';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  'lodash-es': '_'
};
const external = Object.keys(globals);

const config = rollupDefaultConfig('reactive', { external }, { file: './bundle.umd.js', globals }, './index.js');

export default config;
