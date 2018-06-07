// Make describe visible.
import {

} from 'jasmine';

// external
import { 
  // NO_ERRORS_SCHEMA, 
  // ViewChild,
  // ComponentRef,
  // DebugElement
} from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
// import { By } from '@angular/platform-browser';
import {
  async,
  // ComponentFixture,
  TestBed
  // inject, 
} from '@angular/core/testing';

// internal
import { TestingClass } from '../../testing';
import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderClassComponent } from '../test/component-loader-class.component';
import { TestModule } from '../test/test.module';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

describe('ComponentLoaderClass', () => {

  const testingClass: TestingClass<ComponentLoaderClassComponent> = new TestingClass<ComponentLoaderClassComponent>(undefined, {
    info: true,
    run: []
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule]
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    // fixture = TestBed.createComponent(ComponentLoaderClassComponent);
    testingClass.fixture = TestBed.createComponent(ComponentLoaderClassComponent);
  });

  /**
   * Main tests.
   */
  const MAIN_TESTS = {
    '<div>': {
      true: () => testingClass.selector('div')
    },
    '`__component` property undefined': {
      true: () => testingClass.undefined('__component')
    },
    '`__component` property defined': {
      true: () => testingClass
        .before(component => component.__create(DynamicComponent))
        .defined('__component')
    },
    'Dynamic component model should be defined': {
      true: () => testingClass
        .before(component => component.__create(DynamicComponent))
        .defined('__component.instance.model')
    }
  };

  /**
   * Method `__assign()`.
   */
  const ASSIGN_TESTS = {
    'Method `__assign` with specified type': {
      true: () => testingClass
        .before(component => {
          component.__create(DynamicComponent);
          component.model = { defined: false };
          component.__assign<{ defined: boolean }, ComponentLoaderClassComponent>('model', component);
        })
        .equal('__component.instance.model', { defined: false })
    },
    'Method `__assign` with specified type and list of properties': {
      true: () =>
        testingClass
          .before(component => component
            .__create(DynamicComponent)
            .__assign<string, ComponentLoaderClassComponent>(['__prefix', '__suffix'], component)
          )
          .be<string>([
            '__prefix',
            '__component.instance.__prefix',
            '__suffix',
            '__component.instance.__suffix'
          ], '_')
    },
    '`__component` instance model and key with array argument should be changed': {
      true: () => testingClass
        .before(component => {
          component.__create(DynamicComponent);
          component.model = { defined: false };
          component.__assign(['key', 'model'], component);
        })
        .be<string>('__component.instance.key', 'defined')
        .equal<Object>('__component.instance.model', { defined: false })
    }
  };

  const CONNECT_TESTS = {
    'Property `key` and `model should be connected with dynamic instance component': {
      true: () => {
        // Prepare values to assign.
        const key = 'connected';
        const model = { defined: false };

        testingClass
          .before(component => {
            component
              // Create component.
              .__create(DynamicComponent);
          })
          // Check properties after creation.
          .be({
            '__component.instance.key': 'notdefined',
            key: 'defined'
          })
          .before(component => {
            // Link indicated properties the same component to target component.
            component.__bind(['key', 'model']);
            // Assign prepared values to component.
            Object.assign(component, {
              key, model
            });
            console.info(component.key, component.model);
          })
          .be({
            '__component.instance.key': key,
            '__component.instance.model': model
          });

          /*
          // Check if they were changed too.
          */
      }
    }
  };

  /*

  it('property `wrapped` set and get from component should be working.', async(() => {
    comp.__create(DynamicComponent);
    comp.__link(['wrapped']);
    comp.wrapped = true;

    expect(comp._wrappedGet)
      .toBeTruthy();
    expect(comp._wrappedSet)
      .toBeTruthy();
    expect(comp.wrapped)
      .toBeTruthy();
    expect(comp._wrapped)
      .toBeTruthy();
    expect(comp['_wrapped_'])
      .toBeTruthy();
    expect(comp.__component.instance.wrapped)
      .toBeTruthy();
  }));

  */

  const DESTROY_TESTS = {
    '`__component` should be destroyed': {
      true: () => testingClass
        .before(component => component
          // .__create(DynamicComponent)
          .__destroy())
        .undefined('__component')
    }
  };

  /**
   * Method `__get()`.
   */
  const GET_TESTS = {
    'Method `__get` with specified type `boolean` working properly': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__get<boolean>('wrapped'))
        .falsy()
    },
    'Method `__get` with specified type `number` working properly': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__get<number>('age'))
        .equal(27)
    },
    'Method `__get` with specified type `string` working properly': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__get<string>('key'))
        .equal<string>('notdefined')
    },
    'Method `__get` with specified type `object` working properly': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__get<{ defined: boolean }>('model'))
        .equal({ defined: true })
    }
  };

  /**
   * Method `__set()`.
   */
  const SET_TESTS = {
    'Method `__set`': {
      true: () => {
        const value = 'assigned';
        testingClass
          .before(component => component
            .__create(DynamicComponent)
            .__set('assign', value))
          .equal('__component.instance.assign', value);
      }
    },
    '`__set` with specified type `string` working properly': {
      true: () => {
        const value = 'assigned';
        testingClass
          .before(component => component
            .__create(DynamicComponent)
            .__set<string>('assign', value))
          .equal('__component.instance.assign', value);
      }
    },
    'Method `__set` with specified type `boolean` working properly': {
      true: () => {
        testingClass
          .before(component => component
            .__create(DynamicComponent)
            .__set<boolean>('wrapped', true))
          .truthy('__component.instance.wrapped');
      }
    },
    'Method `__set` with specified type `object` working properly': {
      true: () => {
        const value = { defined: false };
        testingClass
          .before(component => component
            .__create(DynamicComponent)
            .__set<{ defined: boolean }>('model', value))
          .equal<{ defined: boolean }>('__component.instance.model', value);
      }
    }
  };

  /**
   * Method `__subscribe()`.
   */
  const SUBSCRIBE_TESTS = {
    '`__component` instance subscribe to event EventEmitter': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__subscribe('event', (generatorOrNext: any) => {
            expect(generatorOrNext)
              .toBe('event');
          }, (error: any) => error, (complete: any) => complete))
        .property<DynamicComponent>('__component.instance')
        .emit()
    },
    '`__component` instance subscribe to event EventEmitter and emit complete': {
      true: () => testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__subscribe('event',
          (result: any) => result,
          (error: any) => error,
          (complete: any) => complete))
        .property<DynamicComponent>('__component.instance')
        .emitComplete()
    }
  };

  /*
    __componentPropertyName
  it('change value of `__componentPropertyName` should have been working properly.', async(() => {
    comp.__componentPropertyName = '__component__';
    comp.__create(DynamicComponent);
    expect(comp[comp.__componentPropertyName] instanceof ComponentRef)
      .toBeTruthy();
  }));
  */

  /*
    __prefix
    __suffix
  it('should have __prefix and __sufix from source component.', async(() => {
    comp.__create(DynamicComponent);
    comp.__link(['key']);
    expect(comp['_key_'])
      .toBe('defined');
  }));
  it('should have changed __prefix and __suffix in source component.', async(() => {
    comp.__prefix = '__';
    comp.__suffix = '__';
    comp.__create(DynamicComponent);
    comp.__link(['key']);
    expect(comp['__key__'])
      .toBe('defined');
  }));
  */    

  testingClass.eachIt(
    ASSIGN_TESTS,
    CONNECT_TESTS,
    DESTROY_TESTS,
    MAIN_TESTS,
    GET_TESTS,
    SET_TESTS,
    SUBSCRIBE_TESTS
  );

    /*
  it(, async(() => {
    
      expect(this.fixture)
        .toBeDefined();
      expect(this.fixture.componentInstance)
        .toBeTruthy();
  }));
      */

  /*
  it('#2. Should have `<div>`.', async(() => {
    testingClass.selector('div');
  }));

  it('should have __component undefined', async(() => {
    expect(comp.__component)
      .toBeUndefined();
  }));
  it('this.__component should be created', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component)
      .toBeDefined();
  }));
  it('dynamic component model should be defined.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__component.instance.model)
      .toBeDefined();
  }));

  /*
    __assign
  it('should have method `__assign` with specified type.', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign<{ defined: boolean }, ComponentLoaderClassComponent>('model', comp);
    expect(comp.__component.instance.model)
      .toEqual({ defined: false });
  }));
  it('should have method `__assign` with specified type and list of properties.', async(() => {
    comp.__create(DynamicComponent);
    comp.__assign<string, ComponentLoaderClassComponent>(['__prefix', '__suffix'], comp);
    expect(comp.__prefix)
      .toBe('_');
    expect(comp.__component.instance.__prefix)
      .toBe('_');
    expect(comp.__suffix)
      .toBe('_');
    expect(comp.__component.instance.__suffix)
      .toBe('_');
  }));

  it('__component instance model and key with array argument should be changed.', async(() => {
    comp.__create(DynamicComponent);
    comp.model = { defined: false };
    comp.__assign([ 'key', 'model'], comp);
    expect(comp.__component.instance.key)
      .toBe('defined');
    expect(comp.__component.instance.model)
      .toEqual({ defined: false });
  }));
  */

  /*
    __set
  it('should have method `__set`.', async(() => {
    const value = 'assigned';
    comp.__create(DynamicComponent);
    comp.__set('assign', value);
    expect(comp.__component.instance.assign)
      .toEqual(value);
  }));
  it('should have method `__set` with specified type `string` working properly.', async(() => {
    const value = 'assigned';
    comp.__create(DynamicComponent);
    comp.__set<string>('assign', value);
    expect(comp.__component.instance.assign)
      .toEqual(value);
  }));
  it('should have method `__set` with specified type `boolean` working properly.', async(() => {
    comp.__create(DynamicComponent);
    comp.__set<boolean>('wrapped', true);
    expect(comp.__component.instance.wrapped)
      .toBeTruthy();
  }));
  it('should have method `__set` with specified type `object` working properly.', async(() => {
    const value = { defined: false };
    comp.__create(DynamicComponent);
    comp.__set<{ defined: boolean }>('model', value);
    expect(comp.__component.instance.model)
      .toEqual(value);
  }));
  */

  /*
    __get
  it('should have method `__get` with specified type `boolean` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<boolean>('wrapped'))
      .toBeFalsy();
  }));
  it('should have method `__get` with specified type `number` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<number>('age'))
      .toEqual(27);
  }));
  it('should have method `__get` with specified type `string` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<string>('key'))
      .toEqual('notdefined');
  }));
  it('should have method `__get` with specified type `object` working properly.', async(() => {
    comp.__create(DynamicComponent);
    expect(comp.__get<{ defined: boolean }>('model'))
      .toEqual({ defined: true });
  }));
  */

  /*
    __subscribe
  it('__component instance subscribe to event EventEmitter', async(() => {
    comp.__create(DynamicComponent);
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
    comp.__create(DynamicComponent);
    comp.__subscribe('event',
      (result: any) => result,
      (error: any) => error,
      (complete: any) => complete
    );
    comp.__component.instance.emitComplete();
  }));
  */

  /*
    __destroy
  it('this.__component should be destroyed', async(() => {
    comp.__create(DynamicComponent);
    comp.__destroy();
    expect(comp.__component)
      .toBeUndefined();
  }));
  */

  /*
    __connect
    __wrap
  it('property `key` and `model should be connected with dynamic instance component.', async(() => {
    // Prepare values to assign.
    const key = 'connected';
    const model = { defined: false };

    // Create component.
    comp.__create(DynamicComponent);

    // Check properties after creation.
    expect(comp.__component.instance.key)
      .toBe('notdefined');
    expect(comp.key)
      .toBe('defined');

    // Link indicated properties the same component to target component.
    comp.__link(['key', 'model']);

    // Assign prepared values to component.
    Object.assign(comp, {
      key, model
    });

    // Check if they were changed too.
    expect(comp.__component.instance.key)
      .toBe(key);
    expect(comp['_key_'])
      .toBe(key);
    expect(comp.__component.instance.model)
      .toBe(model);
  }));

  it('property `wrapped` set and get from component should be working.', async(() => {
    comp.__create(DynamicComponent);
    comp.__link(['wrapped']);
    comp.wrapped = true;

    expect(comp._wrappedGet)
      .toBeTruthy();
    expect(comp._wrappedSet)
      .toBeTruthy();
    expect(comp.wrapped)
      .toBeTruthy();
    expect(comp._wrapped)
      .toBeTruthy();
    expect(comp['_wrapped_'])
      .toBeTruthy();
    expect(comp.__component.instance.wrapped)
      .toBeTruthy();
  }));
  */

  /*
    __componentPropertyName
  it('change value of `__componentPropertyName` should have been working properly.', async(() => {
    comp.__componentPropertyName = '__component__';
    comp.__create(DynamicComponent);
    expect(comp[comp.__componentPropertyName] instanceof ComponentRef)
      .toBeTruthy();
  }));
  */

  /*
    __prefix
    __suffix
  it('should have __prefix and __sufix from source component.', async(() => {
    comp.__create(DynamicComponent);
    comp.__link(['key']);
    expect(comp['_key_'])
      .toBe('defined');
  }));
  it('should have changed __prefix and __suffix in source component.', async(() => {
    comp.__prefix = '__';
    comp.__suffix = '__';
    comp.__create(DynamicComponent);
    comp.__link(['key']);
    expect(comp['__key__'])
      .toBe('defined');
  }));
  */
});
