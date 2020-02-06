// external
import { Type } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

// internal
import { typeGuard } from '../../src';
import { ResultName } from '../type';
import { PropertiesClass } from './properties.class';
import { Main, Options } from '../interface';

/**
 * @author wwwdev.io
 * @date 2018-08-23
 * @export
 * @template T Component to test.
 */
export abstract class MainClass extends PropertiesClass implements Main {
  /**
   * Creates an instance of PropertiesClass.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param description Main description of e.g. `describe(description, () => {})`.
   * @param moduleDef Configure testing module e.g. `TestBed.configureTestingModule(moduleDef)`.
   * @param [options] Execution and log display control.
   */
  constructor(
    protected moduleDef: TestModuleMetadata,
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
  before(callback: (...components: Array<any>) => any, storeResult = false): this {
    this.clear('before');
    if (callback) {
      this.result.before = this.classHandler
        .method(callback)
        .call(this);
      if (storeResult === true) {
        this.result.name = 'before';
      }
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
      this.result.name = undefined;
      this.result.query = undefined;
      this.result.before = undefined;
    }
    this._not = false;

    return this;
  }

  select(component: Type<any>): this {
    if (component) {
      this.selectedComponent = this.getComponentShortName(component);
      this.consoleClass
        .text(`[Select]: `, 'green')
        .text(`\`${component.name}\``, 'default')
        .log();
      this.consoleClass
        .text(``)
        .log();
    }

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
    return this.propertyClass.get<PT>(this,
      typeof this.selectedComponent === 'string' && path.split('.')[0] !== this.selectedComponent
        ? `${this.selectedComponent}.${path}` : path);
  }

  /**
   * Set component property value by using lodash `get()` function.
   * @template PT Value to set type.
   * @param [path] The path of the property to set.
   * @param [value] The value to set.
   */
  set<PT>(path: string, value: PT): this {
    this.propertyClass.set<PT>(this, path, value);

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
    const observable: Observable<PT> | undefined = this.propertyClass.get<Observable<PT>>(this, path);
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

  protected expect<A = any>(actual: A): jasmine.Matchers<any> {
    const e = expect(actual);
    const result = this._not === true ? e.not : e;

    return result;
  }

  /**
   * Display log.
   * @author wwwdev.io
   * @date 2018-09-19
   * @param actual Text to display.
   */
  // protected displayLog(actual: any, expectation: string, expected: any, propertyName?: string): this {
  protected displayLog(actual: any, expectation: string, expected?: any): this {
    const a = (actual && actual.constructor === {}.constructor)
      ? JSON.stringify(actual) : typeof actual === 'string'
        ? `${actual}` : actual;
    const e = expected && expected.constructor === {}.constructor
      ? JSON.stringify(expected) : typeof expected === 'string' && expected.length > 0
        ? `${expected}` : expected;
    /*
    let componentName;
    let propertyPath;
    if (typeof path === 'string') {
      componentName = this.shortNames[path.split('.')[0]];
      propertyPath = path.replace(`${path.split('.')[0]}.`, '');
    }
    */
    this.consoleClass
      // .text('   ')
      .text(`[${expectation}]: `, 'green')
      .text(`${a} ${this._not === true ? 'not ' : ''}`, 'default')
      .text(` ${e !== undefined ? e : ''}`)
      .log({ ...{}, ...this.settings }.console.executed);

    return this;
  }

  /**
   * Configure and compile testing module then create TestingComponent fixture.
   * @author wwwdev.io
   * @date 2018-09-04
   * @param [moduleDef=this.moduleDef] Angular module definition.
   */
  protected configure(moduleDef: TestModuleMetadata = this.moduleDef): this {
    beforeAll(done => (async () => {
      TestBed
        .resetTestingModule()
        .configureTestingModule(moduleDef)
        .compileComponents();
      this.consoleClass
        .text(``)
        .log();
    })()
      .then(async () => {

        this.declarations(moduleDef);

        if (moduleDef.providers) {
          moduleDef.providers.forEach(provider => {
            this.propertyClass.define(this, this.getShortName(provider.name), { value: new provider() });
            this.shortNames[provider.name] = provider.name;
            this.consoleClass
              .text(`[Create]: `, 'green')
              .text(`Provider instance \`${provider.name}\` as \`${this.getShortName(provider.name)}\`.`, 'default')
              .log();
          });
        }
        done();
      })
      .catch(reason => {
        done.fail(reason);
      })
    );

    return this;
  }

  protected getComponentShortName(component: Type<any>): string | undefined {
    let shortName;
    Object.keys(this.shortNames)
      .forEach(key => {
        if (this.shortNames[key] === component.name) {
          shortName = key;
        }
      });

    return shortName;
  }

  /**
   *
   *
   * @author wwwdev.io
   * @date 2018-11-05
   * @param componentName x
   * @returns string
   */
  protected getShortName(componentName: string): string {
    return componentName
      .replace(/[a-z]/g, '')
      .toLowerCase();
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

  private declarations(moduleDef: TestModuleMetadata): void {
    if (moduleDef.declarations) {
      moduleDef.declarations.forEach(component => {
        // Create fixture.
        const fixture = TestBed.createComponent(component);

        // Assign component fixture by using shortName of component.
        const shortName = this.getShortName(component.name);
        this.propertyClass
          .define(this, `${shortName}Fixture`, {
            value: fixture
          })
          .define(this, shortName, {
            value: fixture.componentInstance
          });

        // Store shortName.
        this.shortNames[shortName] = component.name;

        // moduleDef.declarations ? moduleDef.declarations.slice(-1)[0] === component ? `|` : `├──` : ''
        this.consoleClass
          .text(`[Create]: `, 'green')
          .text(`Component \`${component.name}\` as \`${shortName}\`.`, 'default')
          .log();
      });

      // If declarations have got only one component select it as default.
      if (moduleDef.declarations.length === 1) {
        this.select(moduleDef.declarations[0]);
      }
    }
  }
  
  /**
   * Reset and init test environment by using `beforeAll` jasmine function.
   * @author wwwdev.io
   * @date 2018-09-04
   */
  private environment(): this {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

    return this;
  }
}
