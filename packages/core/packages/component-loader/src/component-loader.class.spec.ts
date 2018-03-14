// Make describe visible.
import { } from 'jasmine';

// external
import { NO_ERRORS_SCHEMA, ViewChild, ComponentRef } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';

// internal
import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderClassComponent } from '../test/component-loader-class.component';
import { TestModule } from '../test/test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('ComponentLoaderClass', () => {

  let comp: ComponentLoaderClassComponent;
  let fixture: ComponentFixture<ComponentLoaderClassComponent>;
  let nativeElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    }).compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderClassComponent);
    nativeElement = fixture.debugElement.nativeElement;
    comp = fixture.componentInstance;
  });
  it('should create test component', async(() => {
    expect(fixture).toBeDefined();
    expect(comp).toBeTruthy();
  }));
  it('should have div', async(() => {
    expect(nativeElement.querySelector('div')).toBeTruthy();
  }));
  it('should have __component undefined', async(() => {
    expect(comp.__component).toBeUndefined();
  }));
  it('this.__component should be created', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component).toBeDefined();
  }));
  it('dynamic component model should be defined.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component.instance.model).toBeDefined();
  }));

  /*
    __assign
  */
  it('should have method `__assign` with specified type.', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign<{ defined: boolean }, ComponentLoaderClassComponent>('model', comp);
    expect(comp.__component.instance.model).toEqual({ defined: false });
  }));
  it('should have method `__assign` with specified type and list of properties.', async(() => {
    comp.__create(DynamicComponent);
    comp.__assign<string, ComponentLoaderClassComponent>(['__prefix', '__suffix'], comp);
    expect(comp.__prefix).toBe('_');
    expect(comp.__component.instance.__prefix).toBe('_');
    expect(comp.__suffix).toBe('_');
    expect(comp.__component.instance.__suffix).toBe('_');
  }));
  it('__component instance model and key with array argument should be changed.', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign([ 'key', 'model'], comp);
    expect(comp.__component.instance.key).toBe('defined');
    expect(comp.__component.instance.model).toEqual({ defined: false });
  }));

  /*
    __set
  */
  it('should have method `__set`.', async(() => {
    const value = 'assigned';
    comp.__create(DynamicComponent);
    comp.__set('assign', value);
    expect(comp.__component.instance.assign).toEqual(value);
  }));
  it('should have method `__set` with specified type `string` working properly.', async(() => {
    const value = 'assigned';
    comp.__create(DynamicComponent);
    comp.__set<string>('assign', value);
    expect(comp.__component.instance.assign).toEqual(value);
  }));
  it('should have method `__set` with specified type `boolean` working properly.', async(() => {
    comp.__create(DynamicComponent);
    comp.__set<boolean>('wrapped', true);
    expect(comp.__component.instance.wrapped).toBeTruthy();
  }));
  it('should have method `__set` with specified type `object` working properly.', async(() => {
    const value = { defined: false };
    comp.__create(DynamicComponent);
    comp.__set<{ defined: boolean }>('model', value);
    expect(comp.__component.instance.model).toEqual(value);
  }));

  /*
    __get
  */
  it('should have method `__get` with specified type `boolean` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<boolean>('wrapped')).toBeFalsy();
  }));
  it('should have method `__get` with specified type `number` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<number>('age')).toEqual(27);
  }));
  it('should have method `__get` with specified type `string` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<string>('key')).toEqual('notdefined');
  }));
  it('should have method `__get` with specified type `object` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<{ defined: boolean }>('model')).toEqual({ defined: true });
  }));

  /*
    __subscribe
  */
  it('__component instance subscribe to event EventEmitter', async(() => {
    comp.__create(DynamicComponent);
    comp.__subscribe('event',
      (generatorOrNext: any) => {
        expect(generatorOrNext).toBe('event');
      },
      (error: any) => { },
      (complete: any) => { }
    );
    comp.__component.instance.emit();
  }));
  it('__component instance subscribe to event EventEmitter and emit complete', async(() => {
    comp.__create(DynamicComponent);
    comp.__subscribe('event',
      (result: any) => { },
      (error: any) => { },
      (complete: any) => { }
    );
    comp.__component.instance.emitComplete();
  }));

  /*
    __destroy
  */
  it('this.__component should be destroyed', async(() => {
    comp.__create(DynamicComponent);
    comp.__destroy();
    console.log(comp.__component.instance);
    // expect(comp.__component).toBeNull();
  }));

  /*
    __connect
    __wrap
  */
  it('property `key` and `model should be connected with dynamic instance component.', async(() => {
    // Prepare values to assign.
    const key = 'connected';
    const model = { defined: false };

    // Create component.
    comp.__create(DynamicComponent);

    // Check properties after creation.
    expect(comp.__component.instance.key).toBe('notdefined');
    expect(comp.key).toBe('defined');

    // Connect indicated properties the same component to target component.
    comp.__connect(['key', 'model']);

    // Assign prepared values to component.
    Object.assign(comp, {
      key, model
    });

    // Check if they were changed too.
    expect(comp.__component.instance.key).toBe(key);
    expect(comp['_key_']).toBe(key);
    expect(comp.__component.instance.model).toBe(model);
  }));
  it('property `wrapped` set and get from component should be working.', async(() => {
    comp.__create(DynamicComponent);
    comp.__connect(['wrapped']);
    comp.wrapped = true;

    const x = comp.wrapped;

    expect(comp._wrappedGet).toBeTruthy();
    expect(comp._wrappedSet).toBeTruthy();
    expect(comp.wrapped).toBeTruthy();
    expect(comp._wrapped).toBeTruthy();
    expect(comp['_wrapped_']).toBeTruthy();
    expect(comp.__component.instance.wrapped).toBeTruthy();
  }));

  /*
    __componentPropertyName
  */
  it('change value of `__componentPropertyName` should have been working properly.', async(() => {
    comp.__componentPropertyName = '__component__';
    comp.__create(DynamicComponent);
    expect(comp[comp.__componentPropertyName] instanceof ComponentRef).toBeTruthy();
  }));

  /*
    __prefix
    __suffix
  */
  it('should have __prefix and __sufix from source component.', async(() => {
    comp.__create(DynamicComponent);
    comp.__connect(['key']);
    expect(comp['_key_']).toBe('defined');
  }));
  it('should have changed __prefix and __suffix in source component.', async(() => {
    comp.__prefix = '__';
    comp.__suffix = '__';
    comp.__create(DynamicComponent);
    comp.__connect(['key']);
    expect(comp['__key__']).toBe('defined');
  }));
});
