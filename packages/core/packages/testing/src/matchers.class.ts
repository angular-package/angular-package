import {
  
} from 'jasmine';

// internal
import { MainClass } from './main.class';
import { typeGuard } from '../../src';
import { Argument, Matcher } from '../../type';

/**
 * @export
 */
export abstract class MatchersClass<T> extends MainClass<T> {

  _not = false;
  get not(): this {
    this._not = true;

    return this;
  }

  /**
   * Actual value to be expected value.
   * @template V Expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   * @tested #1-11
   */
  be<V>(actualOrExpected: Argument<V>, expected?: V, expectationFailOutput?: any): this {
    this.matcher<V>('be', actualOrExpected, expected, expectationFailOutput);

    return this;
  }

  /*
  beSpread<V>(...args: Array<Argument<V>>): this {
    const expected: any = args[args.length - 1];
    args.map((actualOrExpected, index) => {
        if (args.length > 1) {
          if (index !== args.length - 1) {
            this._be<V>(actualOrExpected, expected);
          }  
        } else if(typeof actualOrExpected === 'string') {
          this._be<V>(undefined, actualOrExpected);
        }
      });

    return this;
  }
  */

  /**
   * Expect the actual value to contain a specific value.
   * @template V Expected type.
   * @param actualOrContain Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param contain "The value to look for."
   * @param [expectationFailOutput] Fail output.
   */
  contain<V = any>(actualOrContain: Argument<V>, contain?: V, expectationFailOutput?: any): this {
    this.matcher<V>('contain', actualOrContain, contain, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be defined. (Not undefined)
   * @template V Expected type.
   * @param [actualOrExpected] Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  defined<V>(actualOrExpected?: Argument<V>, expectationFailOutput?: any): this {
    this.matcher('defined', actualOrExpected, undefined, expectationFailOutput);

    return this;
  }

  /**
   * Actual value to be equal to the expected value.
   * @template V Expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   * @tested #12-21
   */
  equal<V>(actualOrExpected: Argument<V>, expected?: V, expectationFailOutput?: any): this {
    this.matcher('equal', actualOrExpected, expected, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be falsy.
   * @template V Expected type.
   * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against false. 
   * @param [expectationFailOutput] Fail output.
   */
  falsy<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this {
    this.matcher('falsy', actualOrPropertyName, undefined, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be null.
   * @template V Expected type.
   * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against false. 
   * @param [expectationFailOutput] Fail output.
   */
  null<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this {
    this.matcher('null', actualOrPropertyName, undefined, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be truthy.
   * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against truthy.
   * @param [expectationFailOutput] Fail output.
   */
  truthy<V = boolean>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this {
    this.matcher('truthy', actualOrPropertyName, undefined, expectationFailOutput);

    return this;
  }

  /**
   * Name of component properties or actual computed values to check expectation against undefined.
   * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against undefined. 
   * @param [expectationFailOutput] Fail output.
   */
  undefined<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this {
    this.matcher('undefined', actualOrPropertyName, undefined, expectationFailOutput);

    return this;
  }

  /**
   * Actual value to be expected value.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private _be<V>(actualOrPropertyName: Argument<V>, expected: V, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toBe(expected, expectationFailOutput);
    
    return this;
  }

  /**
   * Expect the actual value to contain a specific value.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param expected "The value to look for."
   * @param [expectationFailOutput] Fail output.
   */
  private _contain<V>(actualOrPropertyName: Argument<V>, expected: V, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toContain(expected, expectationFailOutput);

    return this;
  }

  /**
   * Check expectation against defined.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value of component property to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _defined<V>(actualOrPropertyName: Argument<V>, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toBeDefined(expectationFailOutput);

    return this;
  }

  /**
   * Actual value to be equal to expected value.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private _equal<V>(actualOrPropertyName: Argument<V>, expected: V, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toEqual(expected, expectationFailOutput);
    
    return this;    
  }

  /**
   * Expect just returned result or from parameter.
   * @template V `propertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   */
  private _expect<V>(actualOrPropertyName: Argument<V>): jasmine.Matchers<any> {
    // First expected looks stored value in beforeResult, next 
    const e = expect(this.actual(actualOrPropertyName));

    // Store expect result.
    const result = (this._not === true) ? e.not : e;

    // Resetting _not after use.
    this._not = false;
    
    return result;
  }

  /**
   * Check expectation against to false.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _falsy<V>(actualOrPropertyName: Argument<V>, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toBeFalsy(expectationFailOutput);

    return this;    
  }

  private _null<V>(actualOrPropertyName: Argument<V>, expectationFailOutput?: any): this { 
    this
      ._expect(actualOrPropertyName)
      .toBeNull(expectationFailOutput);
    
    return this;
  }

  /**
   * Check expectation against truthy.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _truthy<V>(actualOrPropertyName: Argument<V>, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toBeTruthy(expectationFailOutput);

    return this;    
  }

  /**
   * Check expectation against undefined.
   * @template V Expected type.
   * @param actualOrPropertyName Actual computed value or value of component property to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _undefined<V>(actualOrPropertyName: Argument<V>, expectationFailOutput?: any): this {
    this
      ._expect(actualOrPropertyName)
      .toBeUndefined(expectationFailOutput);

    return this;
  }

  /**
   *
   *
   * @template V Expected type.
   * @param name Matcher method name to call.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name, 
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] Expected value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private matcher<V>(name: Matcher, actualOrExpected: Argument<V>, expected?: V, expectationFailOutput?: any): this {
    // If result is defined.
    if (this.result[this.result.name] !== undefined && typeGuard<V>(actualOrExpected)) {
      this.switch<V>(name, undefined, actualOrExpected, expectationFailOutput);
      // If result is not defined.
    } else {
      this
        .toArray<V>(actualOrExpected)
        .forEach((actual: V) => {
          const actualOrIndex: V = actual;

          // If expected is not undefined.
          if (expected !== undefined) {
            // If `Observable` detected.
            if (typeof actual === 'string' && actual.endsWith('$')) {
              let i = 0;
              this.subscribe(actual, value => {
                // console.log(`${value} ${name} ${expected[i]}`);
                this.switch(name, value, expected[i]);
                i++;
              });
            } else {
              this.switch<V>(name, actualOrIndex, expected, expectationFailOutput);
            }
          } else if (expected === undefined) {
            if (
              typeof actualOrIndex === 'string' &&
              typeGuard<{ [property: string]: V }>(actualOrExpected) &&
              actualOrExpected[actualOrIndex] !== undefined
            ) {
              // And if actualOrExpected is json object.
              this.switch<V>(name, actualOrIndex, actualOrExpected[actualOrIndex], expectationFailOutput);
            } else if (typeGuard<V>(actualOrIndex)) {
              this.switch<V>(name, actualOrIndex, expected, expectationFailOutput);
            }
          }
        });
    }

    return this;
  }

  private switch<V>(name: Matcher, actual: Argument<V>, expected?: V, expectationFailOutput?: any): this {
    switch (name) {
      case 'be': this._be<V>(actual, expected, expectationFailOutput); break;
      case 'contain': this._contain<V>(actual, expected, expectationFailOutput); break;
      case 'equal': this._equal<V>(actual, expected, expectationFailOutput); break;

      // expected is always undefined.
      case 'defined': this._defined<V>(actual, expectationFailOutput); break;
      case 'falsy': this._falsy<V>(actual, expectationFailOutput); break;
      case 'null': this._null<V>(actual, expectationFailOutput); break;
      case 'truthy': this._truthy<V>(actual, expectationFailOutput); break;
      case 'undefined': this._undefined<V>(actual, expectationFailOutput); break;
      default: break;
    }

    return this;
  }
}
