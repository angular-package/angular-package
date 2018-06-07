// external
import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

// internal
import { ArgumentHandlerClass } from '../../handler';

export interface TestingOptions {
  info: boolean;
  run: Array<number>;
}

export class ParamClass<T> extends ArgumentHandlerClass {

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

  info = false;
  beforeResult: any;
  lastDebugElement: DebugElement;
  nativeElement: HTMLElement | ElementRef;
  run: Array<number>;

  private _debugElement: DebugElement;
  set debugElement(debugElement: DebugElement) {
    this._debugElement = debugElement;
  }
  get debugElement(): DebugElement {
    return (this.lastDebugElement) ? this.lastDebugElement : this._debugElement;
  }

  constructor(fixture?: ComponentFixture<T>, protected options?: TestingOptions) {
    super();
    this.fixture = fixture;
  }
}
