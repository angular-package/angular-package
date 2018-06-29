// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
import { DebugElement, ElementRef, Type } from '@angular/core';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Options, Spec, TestingOptions } from '../interface';
import { ResultName } from '../type';

export abstract class PropertiesClass<T> extends ArgumentHandlerClass {

  componentInstance: T;
  debugElement: DebugElement;
  nativeElement: HTMLElement | ElementRef;

  protected options?: TestingOptions = {
    console: {
      default: {
        executed: false,
        notExecuted: false
      },
      spec: {
        executed: false,
        notExecuted: false
      }
    },
    execute: {
      default: [],
      spec: []
    }
  };
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
    this.setOptions(options, 'default');

    return this;
  }

  protected setDefaultOptions(): void {
    this.setOptions({
      console: this.options.console.default,
      execute: this.options.execute.default
    }, 'spec');
  }

  protected setOptions(options: Options, type: 'default' | 'spec'): void {
    if (options && typeof options.console === 'object') {
      this.options.console[type] = { ...this.options.console[type], ...options.console };
    }
    if (options && options.execute) {
      this.options.execute[type] = options.execute;
    }
  }
}
