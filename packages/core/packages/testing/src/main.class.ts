// external
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Type } from '@angular/core';
import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// internal
import { typeGuard } from '../../src';
import { mode, ResultName } from '../type';
import { PropertiesClass } from './properties.class';
import { Main, Options } from '../interface';

/**
 * @author wwwdev.io
 * @date 2018-08-23
 * @export
 * @template T Component to test.
 */
export abstract class MainClass<T> extends PropertiesClass<T> implements Main<T> {
  /**
   * Creates an instance of PropertiesClass.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param description Main description of e.g. `describe(description, () => {})`.
   * @param moduleDef Configure testing module e.g. `TestBed.configureTestingModule(moduleDef)`.
   * @param componentTest Component to create with e.g. `TestBed.createComponent(component)`.
   * @param [options] Execution and log display control.
   */
  constructor(
    protected moduleDef: TestModuleMetadata,
    public componentTest: Type<T>,
    protected options?: Options
  ) {
    super();
    this.environment();
    if (options) {
      this.setSettings(options);
    }
    this.storedSettings = {
      ...{},
      ...this.settings
    };

    return this;
  }

  /**
   * Make some operations on component before expectation.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param callback Function with injected component and `this` object.
   */
  before(callback: (component: T, testingClass?: MainClass<T>) => any): this {
    this.clear('before');
    this.callback = callback;
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
   * Configure and compile testing module then create TestingComponent fixture.
   * @author wwwdev.io
   * @date 2018-09-04
   * @param [moduleDef=this.moduleDef] Angular module definition.
   */
  protected configure(moduleDef: TestModuleMetadata = this.moduleDef): this {
    beforeEach(async(() => {
      TestBed
        .configureTestingModule(moduleDef)
        .compileComponents();

      this.fixture = TestBed.createComponent(this.componentTest);
    }));

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

  /**
   * @description Restores settings to default, or to settings that was set on instantiation.
   * @author wwwdev.io
   * @date 2018-08-21
   */
  protected restoreSettings(): this {
    this.settings = {
      ...{},
      ...this.settings,
      ...this.storedSettings
    };

    return this;
  }

  /**
   * Set settings with specific options.
   * @param options Argument executed or log to set settings.
   */
  protected setSettings(options: Options): this {
    // Set console.
    if (typeof options.log === 'string') {
      this.settings.console = { executed: false, skipped: false };
      this.settings.console[options.log] = true ;
    } else if (typeof options.log === 'boolean') {
      this.settings.console = {
        ...{},
        ...{
          executed: options.log,
          skipped: options.log
        }
      };
    }
    // Set execute `false` or `Array<number>`.
    if (options.execute !== undefined) {
      this.settings.execute = options.execute;
    }

    return this;
  }

  /**
   * Reset and init test environment by using `beforeAll` jasmine function.
   * @author wwwdev.io
   * @date 2018-09-04
   */
  private environment(): this {
    beforeAll(() => {
      TestBed.resetTestEnvironment();
      TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });

    return this;
  }
}
