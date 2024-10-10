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

const testingClass: TestingClass = new TestingClass({
  declarations: [
    ComponentLoaderClassComponent
  ],
  imports: [TestModule]
}, OPTIONS);

testingClass
  .spec({
    'Describe: Method': {
      timeout: 1000,
      // afterEach: (done: DoneFn) => {
      //   console.log(done);
      //   done();
      // },
      // beforeEach: (done: DoneFn) => {
      //   done();
      // },
      execute: {
        '1. `__create()` should create component and `_destroy()` method should destroy.`': {
          execute: test => test
            .undefined('__component')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__create(DynamicComponent))
            .defined('__component', '__component.instance.model')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__component, true)
            .defined()
            .before((clcc: ComponentLoaderClassComponent) => clcc.__destroy())
            .undefined('__component')
        },
        '2. `__create()` should create component and `_destroy()` method should destroy.`': {
          skip: test => test
            .undefined('__component')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__create(DynamicComponent))
            .defined('__component', '__component.instance.model')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__component, true)
            .defined()
            .before((clcc: ComponentLoaderClassComponent) => clcc.__destroy())
            .undefined('__component')
        },
        '3. `__create()` should create component and `_destroy()` method should destroy.`': {
          skip: test => test
            .undefined('__component')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__create(DynamicComponent))
            .defined('__component', '__component.instance.model')
            .before((clcc: ComponentLoaderClassComponent) => clcc.__component, true)
            .defined()
            .before((clcc: ComponentLoaderClassComponent) => clcc.__destroy())
            .undefined('__component')
        }
      }
    }
  })
  .execute(true, true);
  
  /*
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

  */
