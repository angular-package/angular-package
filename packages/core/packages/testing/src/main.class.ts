// external
import { Observable } from 'rxjs/Observable';

// internal
import { typeGuard } from '../../src';
import { ResultName } from '../type';
import { PropertiesClass } from './properties.class';

export abstract class MainClass<T> extends PropertiesClass<T> {
  /**
   * Make some operations on component before expectation.
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
   * Clear result `before` or `query`.
   * @param name Name of result to set `undefined`.
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
   * Get component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [path] Component property name (key).
   */
  get<PT>(path: string): PT | undefined {
    if (this.componentInstance !== undefined) {
      return this.propertyClass.get<PT>(this.componentInstance, path);
    }

    return;
  }

  /**
   * Set component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [path] Component property name (key).
   * @param [value] Component property value.
   */
  set<PT>(path: string, value: PT): this {
    if (this.componentInstance !== undefined) {
      this.propertyClass.set<PT>(this.componentInstance, path, value);
    }

    return this;
  }

  subscribe<PT>(propertyName: string, callback: Function): this {
    const observable: Observable<PT> | undefined = this.get<Observable<PT>>(propertyName);
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

    return this;
  }

  /**
   * @param options ts
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

  protected getResult<TYPE>(): TYPE {
    if (this.result.name === 'query' && this.result.query !== undefined) {
      return this.result.query.nativeElement.innerHTML;
    }

    return this.result.before;
  }
}
