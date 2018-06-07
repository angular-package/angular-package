// Make describe visible.
import {

} from 'jasmine';

// external
// import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// import { By } from '@angular/platform-browser';
// import { ComponentLoaderService } from '../src';
import {
  async,
  ComponentFixture,
  // inject,
  TestBed
} from '@angular/core/testing';

// internal
// import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderDecoratorComponent } from '../test/component-loader-decorator.component';
import { TestModule } from '../test/test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('ComponentLoader (Decorator) ', () => {

  let comp: ComponentLoaderDecoratorComponent;
  let fixture: ComponentFixture<ComponentLoaderDecoratorComponent>;
  let nativeElement: HTMLElement;
  let f: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderDecoratorComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
    f = {
      complete: (complete: any) => complete
    };
    spyOn(f, 'complete');
  });

  it('#1. Should create test component', async(() => {
    expect(fixture)
      .toBeDefined();
    expect(comp)
      .toBeTruthy();
  }));
  it('#2. Should have div', async(() => {
    expect(nativeElement.querySelector('div'))
      .toBeTruthy();
  }));

  it('#3. Should have __component undefined', async(() => {
    expect(comp.__component)
      .toBeUndefined();
  }));

  it('#4. this.__component should be created', async(() => {
    comp.__create();
    expect(comp.__component)
      .toBeDefined();
  }));
  it('this.__component.instance model should be defined', async(() => {
    comp.__create();
    expect(comp.__component.instance.model)
      .toBeDefined();
  }));
  it('__component instance model with key argument should be changed', async(() => {
    comp.__create();
    comp.model = { defined: false };
    comp.__assign('model');
    expect(comp.__component.instance.model)
      .toEqual({ defined: false });
  }));
  it('__component instance key should be changed', async(() => {
    comp.__create();
    comp.key = 'notdefined';
    expect(comp.__component.instance.key)
      .toBe('notdefined');
  }));
  it('__component instance subscribe to event EventEmitter', async(() => {
    comp.__create();
    comp.__subscribe('event',
      (generatorOrNext: any) => {
        expect(generatorOrNext)
          .toBe('event');
      },
      (error: any) => error,
      (complete: any) => complete
    );
    comp.__component.instance.emit();
  }));
  it('__component instance subscribe to event EventEmitter and emit complete', async(() => {
    comp.__create();
    comp.__subscribe('event',
      (result: any) => result,
      (error: any) => error, f.complete);
    comp.__component.instance.emitComplete();
    expect(f.complete)
      .toHaveBeenCalled();
  }));
  it('this.__component should be destroyed', async(() => {
    comp.__create();
    comp.__destroy();
    expect(comp.__component)
      .toBeUndefined();
  }));
});
