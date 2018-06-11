import {

} from 'jasmine';

// external
import { DebugElement, ElementRef, Type } from '@angular/core';
import { async, ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';

export interface TestingOptions {
  console: boolean;
  execute: Array<number>;
}

export class MainClass<T> extends ArgumentHandlerClass {

  comp: T;

  _fixture: ComponentFixture<T>;
  set fixture(fixture: ComponentFixture<T>) {
    this._fixture = fixture;
    this.debugElement = (fixture) ? fixture.debugElement : undefined;
    this.nativeElement = (fixture) ? fixture.debugElement.nativeElement : undefined;
    this.comp = (fixture) ? fixture.componentInstance : undefined;
  }
  get fixture(): ComponentFixture<T> {
    return this._fixture;
  }

  beforeResult: any;
  lastDebugElement: DebugElement;
  nativeElement: HTMLElement | ElementRef;

  private _debugElement: DebugElement;
  set debugElement(debugElement: DebugElement) {
    this._debugElement = debugElement;
  }
  get debugElement(): DebugElement {
    return (this.lastDebugElement) ? this.lastDebugElement : this._debugElement;
  }

  constructor(
    protected description: string,
    protected moduleDef: TestModuleMetadata,
    public component: Type<T>,
    protected options?: TestingOptions) {
    super();
  }

  configure(
    description: string = this.description,
    moduleDef: TestModuleMetadata = this.moduleDef,
    testCallback: Function
  ): this {
    beforeAll(() => {
      TestBed.resetTestEnvironment();
      TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
    
    describe(description, () => {
      beforeEach(async(() => {
        TestBed.configureTestingModule(moduleDef)
          .compileComponents();
      }));
  
      beforeEach(() => {
        this.fixture = TestBed.createComponent(this.component);
      });

      if (testCallback) {
        testCallback();
      }
  
    });
    
    return this;
  }
}
