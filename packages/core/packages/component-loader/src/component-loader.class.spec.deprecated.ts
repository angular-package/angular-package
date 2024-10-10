import { ComponentRef } from '@angular/core';

// internal
import { TestingClass } from '../../testing';
import { DynamicComponent } from '../test/dynamic.component';
import { ComponentLoaderClassComponent } from '../test/component-loader-class.component';
import { TestModule } from '../test/test.module';
import { Options } from '../../testing/interface';

// First possibility
const OPTIONS: Options = {
  log: false,
  execute: false
};

const testingClass: TestingClass =
  new TestingClass({
    imports: [TestModule]
  }, ComponentLoaderClassComponent,
    OPTIONS);

/**
 * Main.
 */
testingClass
  .spec('selector', null, {
    '<div> exists': testing => testing
      .selector('div')
      .clear()
  })
  .execute(false, false)

  .spec('`__component`', null, {
    '`property is undefined': testing => testing
      .undefined('__component')
      .clear(),
    ' property is defined': testing => testing
      .before(component => component.__create(DynamicComponent))
      .defined('__component')
      .clear(),
    '`instance.model` should be defined': testing => testing
      .before(component => component.__create(DynamicComponent))
      .defined('__component.instance.model')
      .clear()
  })
  .execute(false, false)

  /**
   * Method `__assign()`.
   */
  .spec('`_assign()` method', null, {
    'should works with provided specific type': testing => testing
      .before(component => {
        component.__create(DynamicComponent);
        component.model = { defined: false };
        component.__assign('model', component);
      })
      .equal('__component.instance.model', { defined: false }),
    'should works with specified type and list of properties': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__assign(['__prefix', '__suffix'], component))
      .be([
        '__prefix',
        '__component.instance.__prefix',
        '__suffix',
        '__component.instance.__suffix'
      ], '_'),
    '`__component` instance model and key with array argument should be changed': testing => testing
      .before(component => {
        component.__create(DynamicComponent);
        component.model = { defined: false };
        component.__assign(['key', 'model'], component);
      })
      .be('__component.instance.key', 'defined')
      .equal('__component.instance.model', { defined: false })
  })
  .execute(false, false)

  /**
   * Connect()
   */
  .spec('(_link, __bind)', null, {
    'Property `key` and `model should be connected with dynamic instance component': () => {
      // Prepare values to assign.f
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
        })
        .be({
          '__component.instance.key': key,
          '__component.instance.model': model
        });
    },
    'Property `wrapped` set and get from component should be working': () => {
      testingClass.before(component => {
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
  })
  .execute(false, false)

  /**
   * Destroy.
   */
  .spec('', null, {
    '`__component` should be destroyed': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__destroy())
      .undefined('__component')
  })
  .execute(false, false)

  /**
   * Get.
   */
  .spec('', null, {
    'Method `__get` with specified type `boolean` working properly': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get('wrapped'))
      .falsy(),
    'Method `__get` with specified type `number` working properly': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get('age'))
      .equal(27),
    'Method `__get` with specified type `string` working properly': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get('key'))
      .equal('notdefined'),
    'Method `__get` with specified type `object` working properly': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__get('model'))
      .equal({ defined: true })
  })
  .execute(false, false)

  /**
   * Set.
   */
  .spec('', null, {
    'Method `__set`': () => {
      const value = 'assigned';
      testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__set('assign', value))
        .equal('__component.instance.assign', value);
    },
    '`__set` with specified type `string` working properly': () => {
      const value = 'assigned';
      testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__set('assign', value))
        .equal('__component.instance.assign', value);
    },
    'Method `__set` with specified type `boolean` working properly': () => {
      testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__set('wrapped', true))
        .truthy('__component.instance.wrapped');
    },
    'Method `__set` with specified type `object` working properly': () => {
      const value = { defined: false };
      testingClass
        .before(component => component
          .__create(DynamicComponent)
          .__set('model', value))
        .equal<{ defined: boolean }>('__component.instance.model', value);
    }
  })
  .execute(false, false)

  /**
   * Subscribe().
   */
  .spec('', null, {
    '`__component` instance subscribe to event EventEmitter': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__subscribe('event', (generatorOrNext: any) => {
          expect(generatorOrNext)
            .toBe('event');
        }, (error: any) => error, (complete: any) => complete))
      .get<DynamicComponent>('__component.instance')
      .emit(),
    '`__component` instance subscribe to event EventEmitter and emit complete': testing => testing
      .before(component => component
        .__create(DynamicComponent)
        .__subscribe('event',
          (result: any) => result,
          (error: any) => error,
        (complete: any) => complete))
      .get<DynamicComponent>('__component.instance')
      .emitComplete()
  })
  .execute(false, false)
  
  /*
    __componentPropertyName
  */
  .spec('`__componentPropertyName`', {
    'should have been changed properly.': testing => testing
      .before(comp => {
        comp.__componentPropertyName = '__component__';
        comp.__create(DynamicComponent);

        return (comp[comp.__componentPropertyName] instanceof ComponentRef);
      })
      .truthy()
  })
  .execute(false, false)

  /*
    __prefix
    __suffix
  */
  .spec('`__prefix` and `__sufix`', {
    'should have  from source component.': testing => testing
      .before(comp => {
        comp.__create(DynamicComponent);
        comp.__link(['key']);
      })
      .defined('_key_')
    /*
    'should have __prefix and __sufix from source component.': () => testing
      .before(comp => {
        comp.__create(DynamicComponent);
        comp.__link(['key']);
      })
      .defined('_key_')
      */
    })
    .execute(false, false);

  /*
  */

  /*
    __prefix
    __suffix
  it('should have changed __prefix and __suffix in source component.', async(() => {
    comp.__prefix = '__';
    comp.__suffix = '__';
    comp.__create(DynamicComponent);
    comp.__link(['key']);
    expect(comp['__key__'])
      .toBe('defined');
  }));
  */    

// testing.execute( // ASSIGN_TESTS, // CONNECT_TESTS, // DESTROY_TESTS, // GET_TESTS, // SET_TESTS, // SUBSCRIBE_TESTS);

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
