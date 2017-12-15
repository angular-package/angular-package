declare module '_lodash' {
  import * as lodash from 'lodash-es';
  export default (lodash['default']) ? lodash['default'] : lodash;
}