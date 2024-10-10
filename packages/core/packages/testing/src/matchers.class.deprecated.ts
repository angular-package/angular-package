import {
  
} from 'jasmine';

// internal
import { MainClass } from './main.class';
// import { typeGuard } from '../../src';
// import { Argument, Matcher } from '../../type';
import { Matchers } from '../interface';

/**
 * @export
 */
export abstract class MatchersClass extends MainClass implements Matchers {
  get not(): this {
    this._not = true;

    return this;
  }

  /**
   * Actual value to be expected value.
   * @template V Actual and expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * or as component property name with defined value to test expectations against.
   * @param [expected] "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   * @tested #1-11
   */
  /* be<AE = any>(actualOrExpected: Argument<AE>, expected?: AE, expectationFailOutput?: any): this {
    this.matcher<AE>('be', actualOrExpected, expected, expectationFailOutput);

    return this;
  } */

  /**
   * Expect the actual value to contain a specific value.
   * @author wwwdev.io
   * @date 2018-09-27
   * @template AE Actual and expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * or as component property name with defined value to test expectations against.
   * @param [expected] "The value to look for."
   * @param [expectationFailOutput] Fail output.
   */
  /* contain<AE = any>(actualOrExpected: Argument<AE>, expected?: AE, expectationFailOutput?: any): this {
    this.matcher<AE>('contain', actualOrExpected, expected, expectationFailOutput);

    return this;
  } */

  /**
   * Expect the actual value to be defined. (Not undefined)
   * @author wwwdev.io
   * @date 2018-09-27
   * @template A Actual type.
   * @param [actual] Actual computed value or component property key to test expectations against false.
   * @param [expectationFailOutput] Fail output.
   */
  /* defined<A = any>(actual?: Argument<A>, expectationFailOutput?: any): this {
    this.matcher<A>('defined', actual, undefined, expectationFailOutput);

    return this;
  } */

  /**
   * Actual value to be equal to the expected value.
   * @template A Expected type.
   * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   * @tested #12-21
   */
  // equal<AE = any>(actualOrExpected: Argument<AE>, expected?: AE, expectationFailOutput?: any): this {
    // this.matcher<AE>('equal', actualOrExpected, expected, expectationFailOutput);
  equal(args: { [index: string]: any }): this {
    Object.keys(args)
      .forEach(propertyName => {
        if (typeof propertyName === 'string') {
          this.toEqual(this.get(propertyName), args[propertyName], propertyName);
        }
      });

    return this;
  }

  /**
   * Expect the actual value to be falsy.
   *
   * @author wwwdev.io
   * @date 2018-09-27
   * @template A Actual type.
   * @param [actual] Actual computed value or component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /* falsy<A = any>(actual?: Argument<A>, expectationFailOutput?: any): this {
    this.matcher<A | any>('falsy', actual, false, expectationFailOutput);

    return this;
  }

  match<AE = any>(actualOrExpected: Argument<AE>, expected?: AE, expectationFailOutput?: any): this {
    this.matcher<AE>('match', actualOrExpected, expected, expectationFailOutput);

    return this;
  } */

  /**
   * Expect the actual value to be null.
   * @author wwwdev.io
   * @date 2018-09-27
   * @template A Actual type.
   * @param [actual] Actual computed value or component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /* null<A = any>(actual?: Argument<A>, expectationFailOutput?: any): this {
    const expected = null;
    if (typeGuard <A>(expected) === null || typeGuard <A>(expected)) {
      this.matcher<A | null>('null', actual, expected, expectationFailOutput);
    }

    return this;
  } */

  /**
   * Expect the actual value to be truthy.
   * @author wwwdev.io
   * @date 2018-09-27
   * @template A Actual type.
   * @param [actual] Actual computed value or component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  truthy<A = any>(actual?: Argument<A>, expectationFailOutput?: any): this {
    const expected = true;
    if (typeGuard<A>(expected)) {
      this.matcher<A>('truthy', actual, expected, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Name of component properties or actual computed values to check expectation against undefined.
   * @author wwwdev.io
   * @date 2018-09-27
   * @param [actualOrPropertyName] Actual computed value or component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  // undefined<A = any>(actualOrPropertyName?: Argument<A>, expectationFailOutput?: any): this {
  undefined(...args: Array<string>): this {
    args.forEach(propertyName => {
      if (typeof propertyName === 'string') {
        this.toBeUndefined(propertyName);
      }
    });
    // const expected = undefined;
    // if (typeGuard<A>(expected) === undefined || typeGuard<A>(expected)) {
    //   this.matcher<A>('undefined', actualOrPropertyName, expected, expectationFailOutput);
    // }

    return this;
  }

  /**
   * Actual value to be expected value.
   * @author wwwdev.io
   * @date 2018-09-27
   * @template AE Actual and expected type.
   * @param actual Actual computed value or component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private expectToBe<AE = any>(actual: AE, expected: AE, expectationFailOutput?: any): this {
    /*
    const propertyName = this['propertyName'];
    this.consoleClass
      .green(`    `)
      .green(`\`${propertyName}\` = \`${
        (actual && actual.constructor === {}.constructor) ? JSON.stringify(actual) : actual
      }\` ${this._not === true ? 'not' : ''} toBe: \`${
        (expected && expected.constructor === {}.constructor) ? JSON.stringify(expected) : expected
      }\``, ['faint'])
      .log({ ...{}, ...this.settings }.console.executed);
    */

    this
      .displayLog(actual, 'toBe', expected)
      .expect(actual)
      .toBe(expected, expectationFailOutput);

    return this;
  }

  /**
   * Expect the actual value to contain a specific value.
   * @author wwwdev.io
   * @date 2018-09-27
   * @template AE Actual and expected type.
   * @param actual Actual computed value or component property key to test expectations against.
   * @param expected "The value to look for."
   * @param [expectationFailOutput] Fail output.
   * @param [propertyName] Component property name.
   */
  private expectToContain<AE>(actual: AE, expected: AE, expectationFailOutput?: any): this {
    this
      .displayLog(actual, 'toContain', expected)
      .expect(actual)
      .toContain(expected, expectationFailOutput);

    return this;
  }
  /*
  private containExpectation<AE>(actualOrPropertyName: AE, expected?: AE, expectationFailOutput?: any): this { 

    if (expected !== undefined) {
      if (typeof actualOrPropertyName === 'string' && this.componentInstance && actualOrPropertyName in this.componentInstance) {
        this.expectToContain<AE | undefined>(this.get<AE>(actualOrPropertyName), expected, expectationFailOutput, actualOrPropertyName);
      } else {
        this.expectToContain<AE>(actualOrPropertyName, expected, expectationFailOutput);
      }
    } else if (this.result.name !== undefined) {
      this.expectToContain<AE | undefined>(this.getResult<AE>(), expected, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Check expectation against defined.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template Type `actual` value type.
   * @param actual Actual computed value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   * @param [propertyName] Component property name.
   */
  /*
  private expectToBeDefined<A>(actual: A, expectationFailOutput?: any): this {
    this
      .displayLog(actual, 'toBeDefined', '')
      .expect(actual)
      .toBeDefined(expectationFailOutput);

    return this;
  }
  */

  /**
   * Run expectation dependently.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actualOrPropertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  private definedExpectation<A>(actualOrPropertyName: A, expectationFailOutput?: any): this { 
    if (this.result.name !== undefined) {
      this.expectToBeDefined<A>(this.getResult<A>(), expectationFailOutput);
    } else if (typeof actualOrPropertyName === 'string' && this.componentInstance && actualOrPropertyName in this.componentInstance) {
      this.expectToBeDefined<A | undefined>(this.get<A>(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    } else {
      this.expectToBeDefined<A>(actualOrPropertyName, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Actual value to be equal to expected value.
   * @template AE Actual and expected type.
   * @param actual Actual computed value or value from component property key to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] Fail output.
   */
  private toEqual(actual: string, expected: any, expectationFailOutput?: any): this {
    this
      .displayLog(actual, 'toEqual', expected)
      .expect(actual)
      .toEqual(expected, expectationFailOutput);
    
    return this;    
  }
  /*
  private equalExpectation<AE>(aep: AE, expected?: AE, expectationFailOutput?: any): this { 
    if (expected !== undefined) {
      if (typeof aep === 'string' && this.componentInstance && aep in this.componentInstance) {
        this.toEqual<AE | undefined>(this.get<AE>(aep), expected, expectationFailOutput, aep);
      } else {
        this.toEqual<AE>(aep, expected, expectationFailOutput);
      }
    } else if (this.result.name !== undefined) {
      const actual: any = this.getResult<AE>();
      if (typeof aep === 'string' && this.componentInstance && aep in this.componentInstance) {
        this.toEqual<AE | undefined>(actual, this.get<AE>(aep), expectationFailOutput);
      } else {
        this.toEqual<AE | undefined>(actual, aep, expectationFailOutput);
      }
    } else {
      this.toEqual<AE | undefined>(aep, expected, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Expect just returned result or from parameter.
   * @template A `propertyName` type.
   * @param actual Actual computed value to test expectations against.
   */
  private expect<A>(actual: A): jasmine.Matchers<any> {
    // First expected looks stored value in beforeResult, next 
    const e = expect(actual);

    // Store expect result.
    const result = this._not === true ? e.not : e;

    return result;
  }

  /**
   * Check expectation against false.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actual` value type.
   * @param actual Actual computed value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   * @param [propertyName] Component property name.
   */
  /*
  private expectToBeFalsy<A>(actual: A, expectationFailOutput?: any): this {
    this
      .displayLog(actual, 'toBeFalsy', '')
      .expect(actual)
      .toBeFalsy(expectationFailOutput);

    return this;    
  }
  */

  /**
   * Run expectation dependently.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actualOrPropertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  private falsyExpectation<A>(actualOrPropertyName: A, expectationFailOutput?: any): this { 
    if (this.result.name !== undefined) {
      this.expectToBeFalsy<A>(this.getResult<A>(), expectationFailOutput);
    } else if (typeof actualOrPropertyName === 'string' && this.componentInstance && actualOrPropertyName in this.componentInstance) {
      this.expectToBeFalsy<A | any>(this.get<A>(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    } else {
      this.expectToBeFalsy<A>(actualOrPropertyName, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   *
   *
   * @author wwwdev.io
   * @date 2018-09-20
   * @template AE x
   * @param actualOrPropertyName x
   * @param expected x
   * @param [expectationFailOutput] x
   */
    /*
  private expectToMatch<AE>(actual: AE, expected: AE, expectationFailOutput?: any): this {
    if (typeof expected === 'string' || expected instanceof RegExp) {
      this
        .displayLog(actual, 'toMatch', expected)
        .expect(actual)
        .toMatch(expected, expectationFailOutput);
    }

    if (expected instanceof Array) {
      expected.forEach(getExpected => {
        this.consoleClass
          .green(`    `)
          .green(`\`${propertyName}\` = \`${
            (actual && actual.constructor === {}.constructor) ? JSON.stringify(actual) : actual
          }\` ${this._not === true ? 'not' : ''} toMatch: \`${
            getExpected
          }\``, ['faint'])
          .log({ ...{}, ...this.settings }.console.executed);
  
        this
        .expect(actual)
        .toMatch(getExpected, expectationFailOutput);
      });
    } else if (typeof expected === 'string' || expected instanceof RegExp) {
      this.consoleClass
        .green(`    `)
        .green(`\`${propertyName}\` = \`${actual}\` ${this._not === true ? 'not' : ''} toMatch: \`${expected}\``, ['faint'])
        .log({ ...{}, ...this.settings }.console.executed);

      this
        .expect(actual)
        .toMatch(expected, expectationFailOutput);
    }
    
    return this;
  }
    */
  /*
  private matchExpectation(actualOrPropertyName: any, expected?: any, expectationFailOutput?: any): this { 
    if (expected !== undefined) {
      if (typeof actualOrPropertyName === 'string' && this.componentInstance && actualOrPropertyName in this.componentInstance) {
        this.expectToMatch(this.get(actualOrPropertyName), expected, expectationFailOutput, actualOrPropertyName);
      } else {
        this.expectToMatch(actualOrPropertyName, expected, expectationFailOutput);
      }
    } else if (this.result.name !== undefined) {
      this.expectToMatch(this.getResult(), expected, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Check expectation against null.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actual` value type.
   * @param actual Actual computed value or component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   * @param [propertyName] Component property name.
   */
  /*
  private expectToBeNull<A>(actual: A, expectationFailOutput?: any): this { 
    this
      .displayLog(actual, 'toBeNull', '')
      .expect(actual)
      .toBeNull(expectationFailOutput);
    
    return this;
  }
  */

  /**
   * Run expectation dependently.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template Type `actualOrPropertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  private nullExpectation<A = any>(actualOrPropertyName: A, expectationFailOutput?: any): this { 
    if (this.result.name !== undefined) {
      this.expectToBeNull(this.getResult(), expectationFailOutput);
    } else if (
      this._mode === 0 && typeof actualOrPropertyName === 'string' &&
      this.componentInstance && actualOrPropertyName in this.componentInstance) {
      this.expectToBeNull(this.get(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    } else {
      this.expectToBeNull(actualOrPropertyName, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * Check expectation against truthy.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actual` value type.
   * @param path Actual computed value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   * @param [propertyName] Component property name.
   */
  /*
  private expectToBeTruthy<A = any>(actual: A, expectationFailOutput?: any): this {
    this
      .displayLog(actual, 'toBeTruthy', '')
      .expect(actual)
      .toBeTruthy(expectationFailOutput);

    return this;
  }
  */
  
  /**
   * Run expectation dependently.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actualOrPropertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  private truthyExpectation<A = any>(actualOrPropertyName: A, expectationFailOutput?: any): this { 
    if (this.result.name !== undefined) {
      this.expectToBeTruthy<A>(this.getResult<A>(), expectationFailOutput);
    } else if (
      this._mode === 0 && typeof actualOrPropertyName === 'string' &&
      this.componentInstance && actualOrPropertyName in this.componentInstance) {
      this.expectToBeTruthy<A | undefined>(this.get<A>(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    } else {
      this.expectToBeTruthy<A>(actualOrPropertyName, expectationFailOutput);
    }

    return this;
  } 
  */

  /**
   * Check expectation against undefined.
   * @param path Actual computed value or component property key to test expectations against false.
   * @param [expectationFailOutput] Fail output.
   */
  private toBeUndefined(path: any): this {
    this
      .displayLog(path, 'toBeUndefined', '')
      .expect(path)
      .toBeUndefined();

    return this;
  }

  /**
   * Run expectation dependently.
   * @author wwwdev.io
   * @date 2018-09-19
   * @template A `actualOrPropertyName` type.
   * @param actualOrPropertyName Actual computed value or value from component property key to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  private undefinedExpectation<A = any>(actualOrPropertyName: A, expectationFailOutput?: any): this {
    if (typeof actualOrPropertyName === 'string' && this.componentInstance && actualOrPropertyName in this.componentInstance) {
      // this.toBeUndefined(this.get(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    }

    if (this.result.name !== undefined) {
      console.log(`this.result.name !== undefined`, this.result.name, actualOrPropertyName, this.getResult<A>());
      this.toBeUndefined<A>(this.getResult<A>(), expectationFailOutput);
    } else if (
      this._mode === 0 && typeof actualOrPropertyName === 'string' &&
      this.componentInstance && actualOrPropertyName in this.componentInstance) {
      console.log(`actualOrPropertyName in this.componentInstance`, actualOrPropertyName, this.getResult<A>());
      this.toBeUndefined<A | undefined>(this.get<A>(actualOrPropertyName), expectationFailOutput, actualOrPropertyName);
    } else {
      this.toBeUndefined<A>(actualOrPropertyName, expectationFailOutput);
    }

    return this;
  }
  */

  /**
   * @template V Expected type.
   * @param matcher Matcher method name to call.
   * @param argument Acts as expected value when chaining, actual value as component property name, 
   * actual value as component property name list or as component property name with defined value to test expectations against.
   * @param [expected] Expected value to test expectations against.
   * @param [expectationFailOutput] Fail output.
   */
  /*
  // private matcher<TYPE>(matcher: Matcher, argument: Argument<TYPE>, expected?: TYPE, result?: TYPE, expectationFailOutput?: any): this {
  private matcher<AE>(matcher: Matcher, argument: Argument<AE>, expected?: AE, expectationFailOutput?: any): this {
    // this.switch(matcher, argument, expected, expectationFailOutput);

        /*
    this
      .toArray<Argument<A>>(argument)
      .forEach((value: Argument<A>) => {
        if (expected === undefined) {
          if (matcher === 'undefined' && argument && argument.constructor === {}.constructor) {

          }
        } else {
          this.switch(matcher, value, expected, expectationFailOutput);
        }
        if (expected === undefined && argument && argument.constructor === {}.constructor) {
          if (matcher === 'undefined' && typeof value === 'string' && typeGuard<TYPE>(argument[value]) === undefined) {
            this.switch(matcher, value, argument[value], expectationFailOutput);
          }
          if (typeof value === 'string' && typeGuard<TYPE>(argument[value])) {
            this.switch(matcher, value, argument[value], expectationFailOutput);
          }
        } else {
          this.switch(matcher, value, expected, expectationFailOutput);
        }
      });
    */
    /*
    if (expected === undefined && argument && argument.constructor === {}.constructor) {
      this
        .toArray<Argument<TYPE>>(argument)
        .forEach((actualOrExpected: Argument<TYPE>) => {
          if (typeof actualOrExpected === 'string' && typeGuard<TYPE>(argument[actualOrExpected])) {
            this.switch(matcher, actualOrExpected, argument[actualOrExpected], expectationFailOutput);
          }
        });
    } else {
      this
        .toArray<Argument<TYPE>>(argument)
        .forEach((actualOrExpected: Argument<TYPE>) => this.switch(matcher, actualOrExpected, expected, expectationFailOutput));
    }
    */
    /*
    this
      .toArray<Argument<TYPE>>(actualOrExpected)
      .forEach((actualOrExpected: Argument<TYPE>) => {
        // If `expected` is defined.
        if (expected !== undefined) {
          // Run the right spec.
          this.switch(matcher,
            (argument && argument.constructor === {}.constructor) ?
              argument : (typeof actualOrExpected === 'string') ?
                this.get<TYPE>(actualOrExpected) === undefined ?
                  actualOrExpected : this.get<TYPE>(actualOrExpected) : actualOrExpected,
            expected,
            expectationFailOutput
          );
        // `expected` is `undefined` and `actualOrExpected` is JSON object.
        } else if (
          argument && argument.constructor === {}.constructor &&
          typeof actualOrExpected === 'string' && typeGuard<TYPE>(argument[actualOrExpected])
        ) {
          // Run the spec.
          this.switch(matcher, this.get<TYPE>(actualOrExpected), argument[actualOrExpected], expectationFailOutput);
        } else if (this.getResult<TYPE>() === undefined && typeof actualOrExpected === 'string' && typeGuard<TYPE>(actualOrExpected)) {
          this.switch(matcher, this.get<TYPE>(actualOrExpected) || actualOrExpected, undefined, expectationFailOutput);
        } else {
          this.switch(matcher, actualOrExpected, this.getResult<TYPE>(), expectationFailOutput);
        }
       
      });
            // If `Observable` detected.
            if (typeof actual === 'string' && actual.endsWith('$')) {
              let i = 0;
              this.subscribe(actual, (value: any) => {
                // console.log(`${value} ${name} ${expected[i]}`);
                this.switch(name, value, expected[i]);
                i++;
              });
            } 

    // Resetting `_not` after use.
    if (this._not === true) {
      this._not = false;
    }

    return this;
  }
    */

  /**
   * Switch between expectations
   * @author wwwdev.io
   * @date 2018-09-20
   * @template A x
   * @param matcher x
   * @param actual x
   * @param expected x
   * @param [expectationFailOutput] x
   */
  /*
  private switch<AE = any>(matcher: Matcher, actual: AE, expected: AE, expectationFailOutput?: any): this {
    switch (matcher) {
      case 'be': this.expectToBe<AE>(actual, expected, expectationFailOutput); break;
      case 'contain': this.containExpectation<AE>(actual, expected, expectationFailOutput); break;
      case 'equal': this.equalExpectation<AE>(actual, expected, expectationFailOutput); break;
      case 'match': this.matchExpectation(actual, expected, expectationFailOutput); break;

      // expected is always undefined.
      case 'defined': this.definedExpectation<AE>(actual, expectationFailOutput); break;
      case 'falsy': this.falsyExpectation<AE>(actual, expectationFailOutput); break;
      case 'null':
        if (actual && actual.constructor === [].constructor) {
          this
            .toArray<Argument<AE>>(actual)
            .forEach((e: Argument<AE>) => {
              this.nullExpectation<AE | any>(e, expectationFailOutput);
            });
        } else {
          this.nullExpectation<AE>(actual, expectationFailOutput);
        }
        break;
      case 'truthy':
        if (actual && actual.constructor === [].constructor) {
          this
            .toArray<Argument<AE>>(actual)
            .forEach((e: Argument<AE>) => {
              this.truthyExpectation<AE | any>(e, expectationFailOutput);
            });
        } else {
          this.truthyExpectation<AE>(actual, expectationFailOutput);
        }
        break;
      case 'undefined':
        if (this._mode === 0) {

        } else {
          this.undefinedExpectation<AE>(actual, expectationFailOutput);
        }
        if (actual && actual.constructor === [].constructor) {
          this
            .toArray<Argument<AE>>(actual)
            .forEach((e: Argument<AE>) => {
              this.undefinedExpectation<AE | any>(e, expectationFailOutput);
            });
        } else {
          this.undefinedExpectation<AE>(actual, expectationFailOutput);
        }
        break;
      default: break;
    }

    return this;
  }
  */
}
