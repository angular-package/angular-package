// external
import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Observable } from 'rxjs';

// internal
import { Argument } from '../../type';
import { typeGuard } from '../../src';
import { Settings } from '../interface';
import { ResultName } from '../type';
import { PropertiesClass } from './properties.class';

export abstract class MainClass<T> extends PropertiesClass<T> {

  /**
   * Do some operations on component before expectation.
   * @param callback Function with injected component and `this` object.
   */
  before(callback: (component: T, testingClass?: MainClass<T>) => any): this {
    this.clear('before');
    this.result.before = callback(this.componentInstance, this);
    this.result.name = 'before';

    return this;
  }

  /**
   * Clear result `before` or `query`.
   * @param name Name of result to set `undefined`.
   */
  clear(name?: ResultName): this {
    if (name) {
      this.result[name] = undefined;
    } else {
      this.result.query = undefined;
      this.result.before = undefined;
    }

    return this;
  }

  /**
   * Primary describe with environment and module definition.
   * @param specToExecute Tests to execute.
   * @param [description=this.description] Jasmine textual description of the main group.
   * @param [moduleDef=this.moduleDef] Angular module definition.
   */
  describe(
    specToExecute: Function,
    description: string = this.description,
    moduleDef: TestModuleMetadata = this.moduleDef
  ): this {

    // Environment.
    beforeAll(() => {
      TestBed.resetTestEnvironment();
      TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    
    // Main describe.
    describe(description, () => {

      // Angular TestBed configure and compile.
      beforeEach(async(() => {
        TestBed
          .configureTestingModule(moduleDef)
          .compileComponents();

        this.fixture = TestBed.createComponent(this.componentTest);
      }));

      // Create component fixture.
      // beforeEach(async(() => { });

      /* Default spec to check fixture and comp is defined.
      if (this.componentTest !== undefined) {
        it('should have fixture and comp defined.', async(() => {
          expect(this.fixture)
            .toBeDefined();
          expect(this.componentInstance)
            .toBeTruthy();
        }));  
      }
      */

      // Execute tests.
      if (specToExecute) {
        specToExecute();
      }
    });
    
    return this;
  }

  /*
  has(path: any): boolean {
    // console.info(this.componentInstance['__component'].instance.model);
    console.info(has(this.componentInstance, '__component.instance.model'));

    return this.propertyClass.has(this.componentInstance, path);
  }
  */

  /**
   * Get component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [path] Component property name (key).
   */
  get<PT>(path: string): PT {
    return this.propertyClass.get<PT>(this.componentInstance, path);
  }

  /**
   * Set component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [path] Component property name (key).
   * @param [value] Component property value.
   */
  set<PT>(path: string, value: PT): this {
    this.propertyClass.set<PT>(this.componentInstance, path, value);

    return this;
  }

  subscribe<PT>(propertyName: string, callback: Function): this {
    const observable: Observable<PT> = this.get<Observable<PT>>(propertyName);
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
   * Actual value from method `before()` returned result, last debguElement query or from component property.
   * @template PT Returned value type.
   * @param actualOrPropertyName Component property name.
   */
  protected actual<PT>(actualOrPropertyName?: Argument<PT>): PT {
    // Get actual from `before()` method or debugElement query result.
    if (this.result[this.result.name] !== undefined) {
      if (this.result.name === 'query') {
        return this.result[this.result.name].nativeElement.innerHTML;
      }

      return this.result[this.result.name];
    }
    // Get actual value from component property by using `propertyName`.
    if (this.propertyClass.string(actualOrPropertyName)) {
      if (this.get<PT>(actualOrPropertyName)) {
        const propertyValue = this.get<PT>(actualOrPropertyName);
        if (typeGuard<PT>(propertyValue)) {
          return propertyValue;
        }
      }

      return;
    }

    /*
    if (typeGuard<PT>(actualOrPropertyName)) {
      return actualOrPropertyName;
    }
    */
  }

  /**
   * @param options ts
   * @param [number] Number of spec to execute.
   */
  protected execution(settings: Settings, number?: number): boolean {
    if (typeof settings.execute === 'boolean') {
      return settings.execute;
    }

    return (
      settings.execute instanceof Array &&
      (
        settings.execute.length === 0
        ||
        (settings.execute.length > 0 && number > 0 && settings.execute.includes(number))
      )
    );
  }
}
