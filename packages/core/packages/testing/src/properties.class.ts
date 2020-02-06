// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
// import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Result, Settings, Suites } from '../interface';
import { PropertyService } from '../../property';
import { ConsoleClass } from '../../src';
import { ClassHandlerClass, ErrorHandlerClass } from '../../handler/src';

/**
 * Class with all possible properties used in `TestingClass`.
 * @description Class with all possible properties used in `TestingClass`.
 * @author wwwdev.io
 * @date 2018-08-21
 * @export
 * @template T Component type.
 */
export abstract class PropertiesClass extends ArgumentHandlerClass {
  // callback?: Function;

  /**
   * Angular `componentInstance` fixture. It can be `undefined`.
   */
  // componentInstance?: T;
  // originalComponentInstance?: T;

  selectedComponent?: string;

  /**
   * Angular `debugElement` fixture. It can be `undefined`.
   */
  // debugElement?: DebugElement;

  /**
   * Angular `nativeElement` fixture. It can be `undefined`.
   */
  // nativeElement?: HTMLElement | ElementRef;

  // protected beforeEach?: (component: any, done: any) => void;

  /**
   * Object to display logs with specific colors.
   */
  protected consoleClass = new ConsoleClass();

  protected description = '';

  get not(): this {
    this._not = this._not === false ? true : false;

    return this;
  }
  protected _not = false;

  protected classHandler: ClassHandlerClass = new ClassHandlerClass();
  protected errorHandler: ErrorHandlerClass = new ErrorHandlerClass();
  protected propertyClass: PropertyService = new PropertyService();

  /**
   * Stored result of `before()` `query` method with last name.
   */
  protected _result: Result = {};
  protected set result(result: Result) {
    this._result = result;
  }
  protected get result(): Result {
    return this._result;
  }

  protected get isResult(): string | undefined {
    return this.result.name;
  }
  
  /**
   * @author wwwdev.io
   * @date 2018-08-23
   * @template TYPE Result type.
   */
  protected get getResult(): any {
    if (this.isResult === 'query' && this.result.query !== undefined) {
      return this.result.query.nativeElement.innerHTML;
    }

    return this.result.before;
  }

  /**
   * Settings that the chosen options are in.
   */
  protected settings: Settings = {
    console: {
      executed: false,
      skipped: false
    },
    execute: []
  };

  protected shortNames: { [index: string]: string } = { };

  /**
   * List of specs for execution.
   */
  protected specs: Suites = {};

  /**
   * Stored settings, used in `spec()` method.
   */
  protected storedSettings?: Settings;

  /**
   * @description Get and set all needed element from fixture to specific properties in object.
   */
  private _fixture?: { [name: string]: ComponentFixture<any> };
  set fixture(fixture: { [name: string]: ComponentFixture<any> } | undefined) {
    this._fixture = fixture;
  }
  get fixture(): { [name: string]: ComponentFixture<any> } | undefined {
    return this._fixture;
  }
}
