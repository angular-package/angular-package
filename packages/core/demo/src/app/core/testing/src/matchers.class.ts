import {
  
} from 'jasmine';

// internal
import { MainClass } from './main.class';
import { typeGuard } from '../../src';
import { Argument, Matcher } from '../../type';
import { Matchers } from '../interface';

/**
 * @export
 */
export abstract class MatchersClass<T> extends MainClass<T> implements Matchers {

  protected _not = false;
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
  be<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this {
    this.matcher<TYPE>('be', actualOrExpected, expected, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to contain a specific value.
   * @template TYPE Expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] "The value to look for."
   * @param [expectationFailOutput] Fail output.
   */
  contain<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this {
    this.matcher<TYPE>('contain', actualOrExpected, expected, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be defined. (Not undefined)
   * @template TYPE Expected type.
   * @param [actual] Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  defined<TYPE>(actual?: Argument<TYPE>, expectationFailOutput?: any): this {
    this.matcher<TYPE>('defined', actual, undefined, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Actual value to be equal to the expected value.
   * @template TYPE Expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   * @tested #12-21
   */
  equal<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this {
    this.matcher<TYPE>('equal', actualOrExpected, expected, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be falsy.
   * @template TYPE Expected type.
   * @param [actual] Actual computed values or as component properties keys values to test expectations against false. 
   * @param [expectationFailOutput] Fail output.
   */
  falsy<TYPE = false>(actual?: Argument<TYPE>, expectationFailOutput?: any): this {
    this.matcher<TYPE>('falsy', actual, undefined, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to be null.
   * @template TYPE Expected type.
   * @param [actual] Actual computed values or as component properties keys values to test expectations against false. 
   * @param [expectationFailOutput] Fail output.
   */
  null<TYPE>(actual?: Argument<TYPE>, expectationFailOutput?: any): this {
    const expected = null;
    if (typeGuard<TYPE>(expected)) {
      this.matcher<TYPE>('null', actual, expected, this.getResult<TYPE>(), expectationFailOutput);
    }

    return this;
  }

  /**
   * Expect the actual value to be truthy.
   * @param [actual] Actual computed values or as component properties keys values to test expectations against truthy.
   * @param [expectationFailOutput] Fail output.
   */
  truthy<TYPE = true>(actual?: Argument<TYPE>, expectationFailOutput?: any): this {
    this.matcher<TYPE>('truthy', actual, undefined, this.getResult<TYPE>(), expectationFailOutput);

    return this;
  }

  /**
   * Name of component properties or actual computed values to check expectation against undefined.
   * @param [actual] Actual computed values or as component properties keys values to test expectations against undefined. 
   * @param [expectationFailOutput] Fail output.
   */
  undefined<TYPE = undefined>(actual?: TYPE, expectationFailOutput?: any): this {
    const expected = undefined;
    if (typeGuard<TYPE>(expected)) {
      this.matcher<TYPE>('undefined', actual, expected, this.getResult<TYPE>(), expectationFailOutput);
    }

    return this;
  }

  /**
   * Actual value to be expected value.
   * @template TYPE Expected type.
   * @param actual Actual computed value or value from component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private _be<TYPE>(actual: TYPE, expected: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toBe: \`${expected}\``, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this._expect(actual)
      .toBe(expected, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to contain a specific value.
   * @template TYPE Expected type.
   * @param actual Actual computed value or value from component property key to test expectations against.
   * @param expected "The value to look for."
   * @param [expectationFailOutput] Fail output.
   */
  private _contain<TYPE>(actual: TYPE, expected: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toContain: \`${expected}\``, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    expect(actual)
      .toContain(expected, expectationFailOutput);

    return this;
  }

  /**
   * Check expectation against defined.
   * @template TYPE Expected type.
   * @param actual Actual computed value or value of component property to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _defined<TYPE>(actual: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toBeDefined`, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this
      ._expect(actual)
      .toBeDefined(expectationFailOutput);

    return this;
  }

  /**
   * Actual value to be equal to expected value.
   * @template TYPE Actual and expected type.
   * @param actual Actual computed value or value from component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private _equal<TYPE>(actual: TYPE, expected: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toEqual: \`${expected}\``, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this
      ._expect(actual)
      .toEqual(expected, expectationFailOutput);
    
    return this;    
  }

  /**
   * Expect just returned result or from parameter.
   * @template TYPE `propertyName` type.
   * @param actual Actual computed value to test expectations against.
   */
  private _expect<TYPE>(actual: Argument<TYPE>): jasmine.Matchers<any> {
    // First expected looks stored value in beforeResult, next 
    const e = expect(actual);

    // Store expect result.
    const result = (this._not === true) ? e.not : e;

    return result;
  }

  /**
   * Check expectation against to false.
   * @template TYPE Expected type.
   * @param actual Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _falsy<TYPE = false>(actual: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toBeFalsy`, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this
      ._expect(actual)
      .toBeFalsy(expectationFailOutput);

    return this;    
  }

  private _null<TYPE>(actualOrPropertyName: Argument<TYPE>, expectationFailOutput?: any): this { 
    this
      ._expect(actualOrPropertyName)
      .toBeNull(expectationFailOutput);
    
    return this;
  }

  /**
   * Check expectation against truthy.
   * @param actual Actual computed value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _truthy<TYPE = true>(actual: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toBeTruthy`, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this
      ._expect(actual)
      .toBeTruthy(expectationFailOutput);

    return this;
  }

  /**
   * Check expectation against undefined.
   * @template TYPE Expected type.
   * @param actual Actual computed value or value of component property to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private _undefined<TYPE = undefined>(actual: TYPE, expectationFailOutput?: any): this {
    this.consoleClass
      .green(`    `)
      .green(`\`${actual}\` ${(this._not === true) ? 'not' : ''} toBeUndefined`, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);

    this
      ._expect(actual)
      .toBeUndefined(expectationFailOutput);

    return this;
  }

  /**
   *
   *
   * @template V Expected type.
   * @param matcher Matcher method name to call.
   * @param argument Acts as expected value when chaining, actual value as component property name, 
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] Expected value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  private matcher<TYPE>(matcher: Matcher, argument: Argument<TYPE>, expected?: TYPE, result?: TYPE, expectationFailOutput?: any): this {
    this
      .toArray<Argument<TYPE>>(argument)
      .forEach((actualOrExpected: Argument<TYPE>) => {
        let actualValue: TYPE | undefined;
        let expectedValue: TYPE | undefined = (expected !== undefined) ? expected : undefined;

        // If `expected` is defined.
        if (expected !== undefined) {
          // Get `actualValue` depends on type string.
          if (typeof actualOrExpected === 'string') {
            actualValue = this.get<TYPE>(actualOrExpected);
          } else if (typeGuard<TYPE>(actualOrExpected)) {
            actualValue = actualOrExpected;
          }
        // `expected` is `undefined` and `actualOrExpected` is JSON object.
        } else if (argument && argument.constructor === {}.constructor && typeof actualOrExpected === 'string') {
          if (result) {
            actualValue = result;
            expectedValue = (typeGuard<TYPE>(argument)) ? argument : undefined;
          } else if (typeGuard<TYPE>(argument[actualOrExpected])) {
            actualValue = this.get<TYPE>(actualOrExpected);
            expectedValue = argument[actualOrExpected];
          }

        // `expected` is `undefined` and result is `defined`
        } else if (result !== undefined || result !== null) {
          actualValue = result;
          expectedValue = (typeGuard<TYPE>(actualOrExpected)) ? actualOrExpected : undefined;
        }

        // Run the right spec.
        this.switch(matcher, actualValue, expectedValue, expectationFailOutput);
      });

    // Resetting `_not` after use.
    if (this._not === true) {
      this._not = false;
    }

    /*
            // If `Observable` detected.
            if (typeof actual === 'string' && actual.endsWith('$')) {
              let i = 0;
              this.subscribe(actual, (value: any) => {
                // console.log(`${value} ${name} ${expected[i]}`);
                this.switch(name, value, expected[i]);
                i++;
              });
            } 
    */

    return this;
  }

  private switch<TYPE>(name: Matcher, actual: TYPE, expected: TYPE, expectationFailOutput?: any): this {
    switch (name) {
      case 'be': this._be<TYPE>(actual, expected, expectationFailOutput); break;
      case 'contain': this._contain<TYPE>(actual, expected, expectationFailOutput); break;
      case 'equal': this._equal<TYPE>(actual, expected, expectationFailOutput); break;

      // expected is always undefined.
      case 'defined': this._defined<TYPE>(actual, expectationFailOutput); break;
      case 'falsy': this._falsy<TYPE>(actual, expectationFailOutput); break;
      case 'null': this._null<TYPE>(actual, expectationFailOutput); break;
      case 'truthy': this._truthy<TYPE>(actual, expectationFailOutput); break;
      case 'undefined': this._undefined<TYPE>(actual, expectationFailOutput); break;
      default: break;
    }

    return this;
  }
}
