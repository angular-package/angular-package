import rollupDefaultConfig from './../../rollup.config';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/platform-browser': 'ng.platformBrowser',
  'lodash-es': '_',
  'prismjs': 'Prism'
};
const external = Object.keys(globals);

const config = rollupDefaultConfig('docs', {
  external,
  globals
});

export default config;
