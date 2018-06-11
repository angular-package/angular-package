// Make describe visible.
import {

} from 'jasmine';

// internal
import { TestingClass } from '../../testing';
import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderClassComponent } from '../test/component-loader-class.component';
import { TestModule } from '../test/test.module';

const testing: TestingClass<ComponentLoaderClassComponent> =
  new TestingClass<ComponentLoaderClassComponent>('ComponentLoaderClass', {
    imports: [TestModule]
  }, ComponentLoaderClassComponent, {
  console: true,
  execute: [ ]
});

/**
 * Main tests.
 */
const MAIN_TESTS = {
  '<div>': {
    true: () => testing.selector('div')
  },
  '`__component` property undefined': {
    true: () => testing.undefined('__component')
  },
  '`__component` property defined': {
    true: () => testing
      .before(component => component.__create(DynamicComponent))
      .defined('__component')
  },
  'Dynamic component model should be defined': {
    true: () => testing
      .before(component => component.__create(DynamicComponent))
      .defined('__component.instance.model')
  }
};

/**
 * Method `__assign()`.
 */
const ASSIGN_TESTS = {
  'Method `__assign` with specified type': {
    true: () => testing
      .before(component => {
        component.__create(DynamicComponent);
        component.model = { defined: false };
        component.__assign<{ defined: boolean }, ComponentLoaderClassComponent>('model', component);
      })
      .equal('__component.instance.model', { defined: false })
  },
  'Method `__assign` with specified type and list of properties': {
    true: () =>
      testing
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
    true: () => testing
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

      testing
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
          console.info(component.__component.instance);
        })
        .be({
          '__component.instance.key': key,
          '__component.instance.model': model
        });
    }
  },
  'Property `wrapped` set and get from component should be working': {
    true: () => {
      testing
        .before(component => {
          component
            // Create component.
            .__create(DynamicComponent)
            .__link(['wrapped']);
          component.wrapped = true;
        })
        .truthy([
          '_wrapped_',
          '_wrappedGet',
          '_wrappedSet',
          'wrapped',
          '_wrapped',
          '__component.instance.wrapped'
        ]);

    }
  }
};

const DESTROY_TESTS = {
  '`__component` should be destroyed': {
    true: () => testing
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
    true: () => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get<boolean>('wrapped'))
      .falsy()
  },
  'Method `__get` with specified type `number` working properly': {
    true: () => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get<number>('age'))
      .equal(27)
  },
  'Method `__get` with specified type `string` working properly': {
    true: () => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get<string>('key'))
      .equal<string>('notdefined')
  },
  'Method `__get` with specified type `object` working properly': {
    true: () => testing
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
      testing
        .before(component => component
          .__create(DynamicComponent)
          .__set('assign', value))
        .equal('__component.instance.assign', value);
    }
  },
  '`__set` with specified type `string` working properly': {
    true: () => {
      const value = 'assigned';
      testing
        .before(component => component
          .__create(DynamicComponent)
          .__set<string>('assign', value))
        .equal('__component.instance.assign', value);
    }
  },
  'Method `__set` with specified type `boolean` working properly': {
    true: () => {
      testing
        .before(component => component
          .__create(DynamicComponent)
          .__set<boolean>('wrapped', true))
        .truthy('__component.instance.wrapped');
    }
  },
  'Method `__set` with specified type `object` working properly': {
    true: () => {
      const value = { defined: false };
      testing
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
    true: () => testing
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
    true: () => testing
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

testing.execute(
  ASSIGN_TESTS,
  CONNECT_TESTS,
  DESTROY_TESTS,
  MAIN_TESTS,
  GET_TESTS,
  SET_TESTS,
  SUBSCRIBE_TESTS
);

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
