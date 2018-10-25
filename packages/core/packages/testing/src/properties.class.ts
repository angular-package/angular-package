// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Result, Settings, Spec } from '../interface';
import { PropertyService } from '../../property';
import { ConsoleClass } from '../../src';
import { mode } from '../type';

/**
 * Class with all possible properties used in `TestingClass`.
 * @description Class with all possible properties used in `TestingClass`.
 * @author wwwdev.io
 * @date 2018-08-21
 * @export
 * @template T Component type.
 */
export abstract class PropertiesClass<T> extends ArgumentHandlerClass {
  callback?: Function;

  /**
   * Angular `componentInstance` fixture. It can be `undefined`.
   */
  componentInstance?: T;
  originalComponentInstance?: T;

  /**
   * Angular `debugElement` fixture. It can be `undefined`.
   */
  debugElement?: DebugElement;

  /**
   * Angular `nativeElement` fixture. It can be `undefined`.
   */
  nativeElement?: HTMLElement | ElementRef;

  protected beforeEach?: (component: T, done: any) => void;

  /**
   * Object to display logs with specific colors.
   */
  protected consoleClass = new ConsoleClass();

  protected description = '';

  // protected _mode: 'component' | 'variable' = 'component';
  protected _mode: mode = 0;

  /**
   * Object to handle property features.
   */
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

  /**
   * Second description that is being added after primary `description` and it's set when invoking `spec()` method.
   */
  protected specDescription = '';

  /**
   * List of specs for execution.
   */
  protected specs: Spec<T> = {};

  /**
   * Stored settings, used in `spec()` method.
   */
  protected storedSettings?: Settings;

  /**
   * @description Get and set all needed element from fixture to specific properties in object.
   */
  private _fixture?: ComponentFixture<T>;
  set fixture(fixture: ComponentFixture<T> | undefined) {
    this._fixture = fixture;
    if (fixture) {
      this.debugElement = fixture.debugElement;
      this.nativeElement = fixture.debugElement.nativeElement;
      this.componentInstance = fixture.componentInstance;
      this.originalComponentInstance = fixture.componentInstance;
    }
  }
  get fixture(): ComponentFixture<T> | undefined {
    return this._fixture;
  }

  /* protected beforeEach: (component: T, action: () => {}) => void = (component: T, action) => {
    beforeEach(() => {
    });
  } */
}
