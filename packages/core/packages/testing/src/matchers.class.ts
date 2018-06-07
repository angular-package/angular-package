import {

} from 'jasmine';
import { By } from '@angular/platform-browser';
import { get } from 'lodash-es';

import { ParamClass } from './param.class';
import { Data } from '../../handler/src/argument.handler.class';

/**
 * @export
 */
export class MatchersClass<T> extends ParamClass<T> {

  be<V>(properties: Data<V>, value?: V): this {
    this.toArray(properties)
      .forEach(property => {
        if (value) {
          this._be<V>(property, value);
        } else {
          this._be<V>(property, properties[property]);
        }
      });

    return this;
  }

  /**
   * @param contain String to be contained in innerHTML.
   */
  contain(contain: string): this {
    expect(this.debugElement.nativeElement.innerHTML)
      .toContain(contain);

    return this;
  }

  defined(property: string): this {
    expect(get(this.comp, property))
      .toBeDefined();

    return this;
  }

  equal<V>(propertiesOrExpected: Data<V>, expected?: V): this {
    if (this.beforeResult) {
      this._equal<V>(propertiesOrExpected, this.beforeResult);
    } else {
      this.toArray(propertiesOrExpected)
        .forEach(property => {
          if (expected) {
            this._equal<V>(property, expected);
          } else {
            this._equal<V>(property, propertiesOrExpected[property]);
          }
        });
    }

    return this;
  }

  falsy<V>(propertiesOrExpected?: Data<V>): this {
    if (this.beforeResult !== undefined) {
      if (typeof propertiesOrExpected === 'boolean') {
        this._falsy(propertiesOrExpected);
      }
    } else {
      this.toArray(propertiesOrExpected)
        .forEach(property => this._falsy(property));
    }

    return this;
  }

  /**
   * @param properties x
   */
  truthy<V>(properties: Data<V>): this {
    this.toArray(properties)
      .forEach(property => this._truthy<V>(property));

    return this;
  }

  /**
   * Name of component properties or actual computed values to check expectation against undefined.
   * @param [propertiesOrValues] Actual computed values or as component properties keys values to test expectations against undefined. 
   */
  undefined<V>(propertiesOrValues?: Data<V>): this {
    this.toArray(propertiesOrValues)
      .forEach(property => this._undefined<V>(property));

    return this;
  }

  /*
    protected
  */

  /**
   * 
   * @template V Expected type.
   * @param propertyOrValue Actual computed value or as component property key value to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] -
   */
  protected _be<V>(propertyOrValue: string, expected: V, expectationFailOutput?: any): this {
    this._expect(propertyOrValue)
      .toBe(expected, expectationFailOutput);
    
    return this;
  }

  /**
   * @template V Expected type.
   * @param propertyOrValue Computed value or as component property key value to test expectations against.
   * @param expected "The actual value to be equal to the expected, using deep equality comparison".
   * @param [expectationFailOutput] -
   */
  protected _equal<V>(propertyOrValue: Data<V>, expected: V, expectationFailOutput?: any): this {
    this._expect(propertyOrValue)   
      .toEqual(expected, expectationFailOutput);
    
    return this;    
  }

  /**
   * Expect just returned result to `beforeResult` or from parameter `propertyOrValue`.
   * @template V Type of "actual computed value to test expectations against".
   * @param propertyOrValue Computed value or as component property key value to test expectations against.
   */
  protected _expect<V>(propertyOrValue: Data<V>): jasmine.Matchers<any> {
    return expect((this.beforeResult)
      ? this.beforeResult : (typeof propertyOrValue === 'string')
      ? get(this.comp, propertyOrValue) : propertyOrValue);
  }

  /**
   * Check expectation against to false.
   * @param propertyOrValue Actual computed value or as component property key value to test expectations against.
   */
  protected _falsy<V>(propertyOrValue: Data<V>): this {
    this._expect(propertyOrValue)
      .toBeFalsy();

    return this;    
  }

  /**
   * Check expectation against to truthy.
   * @param propertyOrValue Actual computed value or as component property key value to test expectations against.
   */
  protected _truthy<V>(propertyOrValue: Data<V>): this {
    this._expect(propertyOrValue)
      .toBeTruthy();

    return this;    
  }

  /**
   * Check expectation against to undefined.
   * @param propertyOrValue x
   */
  protected _undefined<V>(propertyOrValue: Data<V>): this {
    this._expect(propertyOrValue)
      .toBeUndefined();

    return this;
  }

  /**
   * @param selector Find HTMLElement by selector.
   */
  protected test(selector: string): void {
    this.lastDebugElement = undefined;
    this.lastDebugElement = this.debugElement.query(By.css(selector));
    expect(this.lastDebugElement)
      .not
      .toBeNull();
  }
}
