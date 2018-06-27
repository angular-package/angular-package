// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
import { DebugElement, ElementRef, Type } from '@angular/core';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Options, Spec, TestingOptions } from '../interface';
import { ResultName } from '../type';

export abstract class PropertiesClass<T> extends ArgumentHandlerClass {

  comp: T;

  nativeElement: HTMLElement | ElementRef;

  protected options?: TestingOptions = {
    console: {
      executed: false,
      notExecuted: false
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

  /**
   * All specs.
   */
  protected specs: Spec = {};

  /**
   * Conditional debugElement.
   */
  private _debugElement: DebugElement;
  set debugElement(debugElement: DebugElement) {
    this._debugElement = debugElement;
  }
  get debugElement(): DebugElement {
    return this._debugElement;
  }

  private _fixture: ComponentFixture<T>;
  set fixture(fixture: ComponentFixture<T>) {
    this._fixture = fixture;
    this.debugElement = (fixture) ? fixture.debugElement : undefined;
    this.nativeElement = (fixture) ? fixture.debugElement.nativeElement : undefined;
    this.comp = (fixture) ? fixture.componentInstance : undefined;
  }
  get fixture(): ComponentFixture<T> {
    return this._fixture;
  }

  /**
   * @param description Jasmine textual description of the main group.
   * @param moduleDef Angular module definition.
   * @param component Fixture component.
   * @param [options] Console information and execute control.
   */
  constructor(
    protected description: string,
    protected moduleDef: TestModuleMetadata,
    public component: Type<T>,
    options?: Options
  ) {
    super();

    if (options && options.console) {
      this.options.console = {
        executed: options.console,
        notExecuted: options.console
      };
    }
    if (options && options.execute) {
      this.options.execute = {
        default: options.execute
      };
    }

    return this;
  }
}
