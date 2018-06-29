// external
import { async, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { get, set } from 'lodash-es';
import { Observable } from 'rxjs';

// internal
import { Argument } from '../../type';
import { typeGuard } from '../../src';
import { Spec } from '../interface';
import { ResultName } from '../type';
import { PropertiesClass } from './properties.class';

export abstract class MainClass<T> extends PropertiesClass<T> {

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
      }));

      // Create component fixture.
      beforeEach(() => {
        this.fixture = TestBed.createComponent(this.componentTest);
      });

      // Default spec to check fixture and comp is defined.
      if (this.componentTest !== undefined) {
        it('should have fixture and comp defined.', async(() => {
          console.log(`[Internal spec]: Should have fixture and comp defined.`);
          expect(this.fixture)
            .toBeDefined();
          expect(this.componentInstance)
            .toBeTruthy();
        }));  
      }

      // Execute tests.
      if (specToExecute) {
        specToExecute();
      }
    });
    
    return this;
  }

  /**
   * @param [number] Number of spec to execute.
   */
  execution(number?: number): boolean {
    if (typeof this.options.execute.spec === 'boolean') {
      return this.options.execute.spec;
    }

    return (
      this.options.execute.spec instanceof Array &&
      (
        this.options.execute.spec.length === 0
        ||
        (this.options.execute.spec.length > 0 && number > 0 && this.options.execute.spec.includes(number))
      )
    );
}

  /**
   * Get component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [actualOrPropertyName] Component property name (key).
   */
  get<PT>(actualOrPropertyName: string): PT {
    return get(this.componentInstance, actualOrPropertyName);
  }

  /**
   * Set component property value by using lodash `get()` function.
   * @template PT Returned component property value type.
   * @param [actualOrPropertyName] Component property name (key).
   * @param [value] Component property value.
   */
  set<PT>(actualOrPropertyName: string, value?: PT): this {
    if (value) {
      set<Object>(this.componentInstance, actualOrPropertyName, value);

      return this;
    }
  }

  /**
   * Add spec to list of specs to execute.
   * @param spec Spec to execute.
   * @param [reset=true] Reset specs list to execute.
   */
  spec(spec: Spec, reset = true): this {
    // Reset specs.
    if (reset === true) {
      this.specs = {};
    }
    this.specs = { ...this.specs, ...spec };

    return this;
  }

  subscribe<PT>(propertyName: string, callback: Function): this {
    const observable: Observable<PT> = get(this.componentInstance, propertyName);
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
    if (typeof actualOrPropertyName === 'string' && this.get<PT>(actualOrPropertyName) !== undefined) {
      const propertyValue = this.get<PT>(actualOrPropertyName);
      if (typeGuard<PT>(propertyValue)) {
        return propertyValue;
      }
    }

    if (typeGuard<PT>(actualOrPropertyName)) {
      return actualOrPropertyName;
    }
  }
}
