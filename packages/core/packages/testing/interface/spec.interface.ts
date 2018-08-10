import { PickTesting } from '../type';

/**
 * Structure of providing specs where key is specific spec name. For example `it(`key`, () => {});
 * @export
 */
export interface Spec<T> {
  [name: string]: (testing: PickTesting<T>, ...args: Array<any>) => any;
}
