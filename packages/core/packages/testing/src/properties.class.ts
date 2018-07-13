// TestingClass extends SelectorClass extends MatchersClass extends MainClass extends PropertiesClass extends ArgumentHandlerClass

// external
import { DebugElement, ElementRef, Type } from '@angular/core';
import { ComponentFixture, TestModuleMetadata } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';
import { Options, Settings, Spec } from '../interface';
import { ResultName } from '../type';
import { PropertyClass } from '../../property';
import { ConsoleClass } from '../../src';

export abstract class PropertiesClass<T> extends ArgumentHandlerClass {
  /**
   * Angular `componentInstance` fixture.
   */
  componentInstance: T;

  /**
   * Angular `debugElement` fixture.
   */
  debugElement: DebugElement;

  /**
   * Angular `nativeElement` fixture.
   */
  nativeElement: HTMLElement | ElementRef;

  /**
   * Object to display logs with specific colors.
   */
  protected consoleClass = new ConsoleClass();

  /**
   * Object to handle property features.
   */
  protected propertyClass: PropertyClass = new PropertyClass();

  /**
   * Stored result of `before()` `query` method with last name.
   */
  protected result: {
    before?: any,
    query?: DebugElement,
    name: ResultName
  } = { name: undefined };

  /**
   * Settings that the chosen options are in.
   */
  protected settings?: Settings = {
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
  protected specs: Spec = {};

  /**
   * Stored settings, used in `spec()` method.
   */
  protected storedSettings: Settings;

  /**
   * Get and set all needed element from fixture to specific properties in object.
   */
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
   * @param [options] Used to set console information and execute control.
   */
  constructor(
    protected description: string,
    protected moduleDef: TestModuleMetadata,
    public componentTest: Type<T>,
    options?: Options
  ) {
    super();
    this.setSettings(options);
    this.storedSettings = { ...{}, ...this.settings };

    return this;
  }

  /**
   * Restores settings to default, or to settings that was set on instantiation.
   */
  protected restoreSettings(): this {
    this.settings = { ...{}, ...this.settings, ...this.storedSettings };

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
        executed: options.log,
        skipped: options.log
      };
    }
    // Set execute `false` or `Array<number>`.
    if (options.execute !== undefined) {
      this.settings.execute = options.execute;
    }

    return this;
  }
}
