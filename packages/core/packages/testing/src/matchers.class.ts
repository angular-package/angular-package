import { } from 'jasmine';
import * as jsc from 'jsverify';

// internal
import { MainClass } from './main.class';
import { Matchers } from '../interface';

/**
 * @export
 */
export abstract class MatchersClass extends MainClass implements Matchers {

  be() {

  }

  contain(args: any): this {
    if (args) {
      let actual: any;
      let expected: any;
      if (this.isResult !== undefined) {
        actual = args;
        expected = this.getResult;
        this.toContain(actual, expected);
      }  
    }

    return this;
  }

  defined(...args: Array<string> | any): this {
    if (args instanceof Array) {
      const expectation = `toBeDefined`;
      if (this.isResult !== undefined) {
        const actual = this.getResult;
        this
          .displayLog(actual, expectation)
          .expect(actual)
          .toBeDefined();
      } else {
        args.forEach((path: any) => {
          if (typeof path === 'string') {
            this
              .displayLog(path, expectation, this.get(path))
              .expect(this.get(path))
              .toBeDefined();
          }
        });
      }
    } else {
      throw new Error(`No arguments provided`);
    }

    return this;
  }

  equal(args: { [index: string]: any } | any): this {
    if (args) {
      const expectation = `toEqual`;
      let actual: any;
      let expected: any;
      if (this.isResult !== undefined) {
        actual = args;
        expected = this.getResult;
        this
          .displayLog(actual, expectation, expected)
          .expect(actual)
          .toEqual(expected);
      } else {
        Object.keys(args)
          .forEach(path => {
            if (typeof path === 'string') {
              expected = args[path];
              this
              .displayLog(`${path} ${this.get(path)}`, expectation, expected)
              .expect(this.get(path))
              .toEqual(expected/* , expectationFailOutput */);
            }
          });
      }  
    }

    return this;
  }

  undefined(...args: Array<string>): this {
    const [i, j] = [5, 6];
    const { g, h } = { g: 123, h: 333 };
    console.log(g, h);
    const x = i + j;
    jsc.assertForall(jsc.integer, jsc.integer, 
      (a: number, b: number) => {
        const a_and_b_equal_20 = a + b === 20;

        return a_and_b_equal_20;
    });
    if (args instanceof Array) {
      const expectation = `toBeUndefined`;
      args.forEach(path => {
        if (typeof path === 'string') {
          const actual = this.get(path);
          this
            .displayLog(`${path} ${actual}`, expectation)
            .expect(actual)
            .toBeUndefined();
        }
      });  
    } else {
      throw new Error(`No arguments provided`);
    }

    return this;
  }

  /**
   * Check expectation against undefined.
   * @param path Actual computed value or component property key to test expectations against false.
   * @param [expectationFailOutput] Fail output.
   */
  private toContain(actual: any, expected: any): this {
    const expectation = `toContain`;
    this
      .displayLog(actual, expectation, expected)
      .expect(actual)
      .toContain(expected);

    return this;
  }
}
