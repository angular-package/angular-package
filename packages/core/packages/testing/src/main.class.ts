// external
import { Observable } from 'rxjs/Observable';

// internal
import { typeGuard } from '../../src';
import { mode, ResultName } from '../type';
import { PropertiesClass } from './properties.class';
import { Main } from '../interface';

/**
 * @author wwwdev.io
 * @date 2018-08-23
 * @export
 * @template T Component to test.
 */
export abstract class MainClass<T> extends PropertiesClass<T> implements Main<T> {
  /**
   * Make some operations on component before expectation.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param callback Function with injected component and `this` object.
   */
  before(callback: (component: T, testingClass?: MainClass<T>) => any): this {
    this.clear('before');
    if (this.componentInstance) {
      this.result.before = callback(this.componentInstance, this);
      this.result.name = 'before';  
    }

    return this;
  }

  /**
   * Clear returned result of `.before()` method when name is set to `before` and `.attribute()` `.class()` `.selector()` method 
   * when name is set to `query` or both when name is `undefined`.
   * @param name Name of the result to be cleared. It can be set to `before` or `query`, when `undefined` it clears both.
   */
  clear(name?: ResultName): this {
    if (name) {
      this.result[name] = undefined;
      this.result.name = undefined;
    } else {
      this.result.query = undefined;
      this.result.before = undefined;
    }  

    return this;
  }

  /**
   * Change working mode.
   * @author wwwdev.io
   * @date 2018-10-03
   * @param value Select between two modes - component and variable.
   */
  mode(value: mode): this {
    this._mode = value;

    return this;
  }

  /**
   * Get component property value by using lodash `get()` function.
   * @author wwwdev.io
   * @date 2018-10-03
   * @template PT Returned value type.
   * @param path The path of the property to get.
   */
  get<PT>(path: string): PT | undefined {
    if (this.componentInstance !== undefined) {
      return this.propertyClass.get<PT>(this.componentInstance, path);
    }

    return;
  }

  /**
   * Set component property value by using lodash `get()` function.
   * @template PT Value to set type.
   * @param [path] The path of the property to set.
   * @param [value] The value to set.
   */
  set<PT>(path: string, value: PT): this {
    if (this.componentInstance !== undefined) {
      this.propertyClass.set<PT>(this.componentInstance, path, value);
    }

    return this;
  }

  /**
   * @author wwwdev.io
   * @date 2018-08-23
   * @template PT x
   * @param path x
   * @param callback x
   */
  subscribe<PT>(path: string, callback: (value: PT) => any): this {
    if (this.componentInstance !== undefined) {
      const observable: Observable<PT> | undefined = this.propertyClass.get<Observable<PT>>(this.componentInstance, path);
      let i = 0;
      if (typeGuard<Observable<PT>>(observable)) {
        observable.subscribe(
          (value: PT): void => {
            if (callback) {
              callback(value);
            }
            i++;
          },
          () => i++,
          () => i++
        );
      }
    }

    return this;
  }

  /**
   * @author wwwdev.io
   * @date 2018-08-23
   * @param [number] Number of spec to execute.
   */
  protected execution(number: number): boolean {
    if (typeof this.settings.execute === 'boolean') {
      return this.settings.execute;
    }

    return (
      this.settings.execute instanceof Array &&
      (
        this.settings.execute.length === 0
        ||
        (number !== undefined && number > 0 && this.settings.execute.length > 0 && this.settings.execute.includes(number))
      )
    );
  }

  /**
   * @author wwwdev.io
   * @date 2018-08-23
   * @template TYPE Result type.
   */
  protected getResult<TYPE>(): TYPE {
    if (this.result.name === 'query' && this.result.query !== undefined) {
      return this.result.query.nativeElement.innerHTML;
    }

    return this.result.before;
  }
}
