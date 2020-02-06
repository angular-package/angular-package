import { PickTesting } from '../type';

export type eachFunction = (...args: Array<any>) => void;
export type specFunction = (testing: PickTesting, ...args: Array<any>) => any;

// action: (done: DoneFn) => void, timeout?: number | undefined,

/**
 * @author wwwdev.io
 * @date 2018-11-28
 * @export
 */
export interface Describe {
  /**
   * Wrapper to `afterEach()` jasmine function.
   */
  afterEach?: eachFunction;
  
  /**
   * Wrapper to `beforeEach()` jasmine function.
   */
  beforeEach?: eachFunction;
  
  /**
   * To execute specs.
   */
  execute?: Specs;

  /**
   * To skip execute specs.
   */
  skip?: Specs;

  /**
   * Timeout to `afterEach()` and `beforeEach()` function.
   */
  timeout?: number;
}

/**
 * @author wwwdev.io
 * @date 2018-11-28
 * @export
 */
export interface Spec {
  /**
   * To execute `it()`.
   */
  execute?: specFunction;

  /**
   * To skip execute `it()`.
   */
  skip?: specFunction;
}

/**
 * Structure to use `it()` jasmine function.
 * @author wwwdev.io
 * @date 2018-11-28
 * @export
 */
export interface Specs {
  [expectation: string]: Spec;
}

/**
 * Structure of providing specs where key is specific spec name. For example `it(`key`, () => {});
 * @author wwwdev.io
 * @date 2018-11-28
 * @export
 */
export interface Suites {
  [description: string]: Describe;
}
