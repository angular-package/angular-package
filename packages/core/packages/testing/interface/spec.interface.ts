import { TestingClass } from '../src';

/**
 * Structure of providing specs where key is specific spec name. For example `it(`key`, () => {});
 * @export
 */
export interface Spec<T> {
  [name: string]: (instance: TestingClass<T>) => any;
}
