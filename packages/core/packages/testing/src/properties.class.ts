// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
import { DebugElement, ElementRef, Type } from '@angular/core';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Options, Spec, TestingOptions } from '../interface';
import { ResultName } from '../type';
import { PropertyClass } from '../../property';
import { ConsoleClass } from '../../src';

export abstract class PropertiesClass<T> extends ArgumentHandlerClass {

  componentInstance: T;
  debugElement: DebugElement;

  nativeElement: HTMLElement | ElementRef;

  protected consoleClass = new ConsoleClass();
  protected originalOptions: TestingOptions;
  protected options?: TestingOptions = {
    console: {
      executed: false,
      notExecuted: false
    },
    execute: []
  };

  protected propertyClass: PropertyClass = new PropertyClass();

  protected result: {
    before?: any,
    query?: DebugElement,
    name: ResultName
  } = { name: undefined };

  protected specs: Spec = {};
  
  private _fixture: ComponentFixture<T>;
  set fixture(fixture: ComponentFixture<T>) {
    this._fixture = fixture;
    this.debugElement = (fixture) ? fixture.debugElement : undefined;
    this.nativeElement = (fixture) ? fixture.debugElement.nativeElement : undefined;
    this.componentInstance = (fixture) ? fixture.componentInstance : undefined;
  }
  get fixture(): ComponentFixture<T> {
    return this._fixture;
  }

  /**
   * @param description Jasmine textual description of the main group.
   * @param moduleDef Angular module definition.
   * @param componentTest Component to test.
   * @param [options] Console information and execute control.
   */
  constructor(
    protected description: string,
    protected moduleDef: TestModuleMetadata,
    public componentTest: Type<T>,
    options?: Options
  ) {
    super();
    this.setOptions(options);
    this.originalOptions = { ...{}, ...this.options };

    return this;
  }

  protected restoreOriginalOptions(): this {
    this.options = { ...{}, ...this.options, ...this.originalOptions };

    return this;
  }

  protected setOptions(options: Options): this {
    // Set console.
    if (typeof options.log === 'string') {
      this.options.console = { executed: false, notExecuted: false };
      this.options.console[options.log] = true ;
    } else if (typeof options.log === 'boolean') {
      this.options.console = {
        executed: options.log,
        notExecuted: options.log
      };
    }
    // Set execute `false` or `Array<number>`.
    if (options.execute !== undefined) {
      this.options.execute = options.execute;
    }

    return this;
  }
}
