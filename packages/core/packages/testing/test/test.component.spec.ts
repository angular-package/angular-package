// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '../../testing';
import { TestComponent } from './test.component';
// End Step

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testing: TestingClass<TestComponent> =
  new TestingClass<TestComponent>('TestComponent', {
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
  console: true,
  execute: [ ] });
// End Step.

// Step 3. Add and execute some tests
/**
 * Matchers
 */
const MATCHERS = {
  BE: {
    /**
     * Actual Or Expected.
     */
    '`before()` method returned value number should `be()` the same': {
      false: () => testing
        .before(() => 27)
        .be<number>(27)
        .clear() // Clear last result.
    },

    /**
     * Actual Or Expected.
     */
    '`before()` method returned value string should `be()` the same': {
      false: () => testing
        .before(() => {
          const x = 27;

          return x + 5;
        })
        .be<string>(32)
        .clear() // Clear last result.
    },

     // boolean.
    '`be()` method with passed `actualOrExpected` json where expected value type is boolean': {
      false: () => testing
        .be<boolean>({ active: false }) // Checking component to have property `active` `false`.
        .not
        .be<boolean>({ active: true })  // Checking component to NOT have property `active` `true`.
    },

    // boolean
    '`be()` method with passed json with many keys where expected type is boolean ': {
      false: () => testing
        .be<boolean>({
          active: false,  // Checking component to have property `active` `false`.
          removed: true   // Checking component to have property `removed` `true`.
        })
    },

    // Number.
    '`be()` method with passed `actualOrExpected` json where expected value type is number': {
      false: () => testing
        .be<number>({ age: 127 }) // Checking component to have property age with value 127.
        .not
        .be<number>({ age: 121 }) // Checking component to NOT have property age with value 121.
    },

    // String.
    '`be()` method with passed `actualOrExpected` json where expected value type is string': {
      false: () => testing
        .be<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
        .not
        .be<string>({ surname: 'Eveline' }) // Checking component to NOT have property `surname` value 'Eveline'.
    },

    // any.
    '`be()` method with passed json with many keys where expected type is any': {
      false: () => testing
        .be<any>({
          active: false,
          firstname: 'Eve',
          age: 127
        })
    },

    /**
     * Actual & expected.
     */
    // Boolean.
    '`be()` method with passed actual and type boolean expected argument': {
      false: () => testing
        .be<boolean>('active', false) // Checking component to have property `active` value `false`.
        .not
        .be<boolean>('active', true)  // Checking component to NOT have property `active` value `true`.
    },

    // Number.
    '`be()` method with passed actual and type number expected argument': {
      false: () => testing
        .be<number>('age', 127) // Checking component to have property `age` value `127`.
        .not
        .be<number>('age', 121) // Checking component to NOT have property `age` value `121`.
    },

    // String.
    '`be()` method with passed actual and type string expected argument': {
      false: () => testing
        .be<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
        .not
        .be<string>('surname', 'Eveline') // Checking component to NOT have property `surname` value 'Eveline'.
    },

    '`be()` method with passed list of component property names and their expected value type `string`': {
      false: () => testing
        .be<string>([
          'firstname',  // Component property firstname to test against expected `Eve`.
          'surname'     // Component property surname to test against expected `Eve`.
        ], 'Eve')       // Expected value.
    }
  },

  EQUAL: {
    /**
     * Actual Or Expected.
     */
    // boolean.
    '`equal()` method with passed `actualOrExpected` json where expected value type is boolean': {
      false: () => testing
        .equal<boolean>({ active: false }) // Checking component to have property `active` `false`.
        .not
        .equal<boolean>({ active: true })  // Checking component to NOT have property `active` `true`.
    },

    // boolean
    '`equal()` method with passed json with many keys where expected type is boolean ': {
      false: () => testing
        .equal<boolean>({
          active: false,  // Checking component to have property `active` `false`.
          removed: true   // Checking component to have property `removed` `true`.
        })
    },

    // Number.
    '`equal()` method with passed `actualOrExpected` json where expected value type is number': {
      false: () => testing
        .equal<number>({ age: 127 }) // Checking component to have property age with value 127.
        .not
        .equal<number>({ age: 121 }) // Checking component to NOT have property age with value 121.
    },

    // String.
    '`equal()` method with passed `actualOrExpected` json where expected value type is string': {
      false: () => testing
        .equal<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
        .not
        .equal<string>({ surname: 'Eveline' }) // Checking component to NOT have property `surname` value 'Eveline'.
    },

    // any.
    '`equal()` method with passed json with many keys where expected type is any': {
      false: () => testing
        .equal<any>({
          active: false,
          firstname: 'Eve',
          age: 127
        })
    },
    
    /**
     * Actual & expected.
     */
    // Boolean.
    '`equal()` method with passed actual and type boolean expected argument': {
      false: () => testing
        .equal<boolean>('active', false) // Checking component to have property `active` value `false`.
        .not
        .equal<boolean>('active', true)  // Checking component to NOT have property `active` value `true`.
    },

    // Number.
    '`equal()` method with passed actual and type number expected argument': {
      false: () => testing
        .equal<number>('age', 127) // Checking component to have property `age` value `127`.
        .not
        .equal<number>('age', 121) // Checking component to NOT have property `age` value `121`.
    },

    // String.
    '`equal()` method with passed actual and type string expected argument': {
      false: () => testing
        .equal<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
        .not
        .equal<string>('surname', 'Eveline') // Checking component to NOT have property `surname` value 'Eveline'.
    },

    '`equal()` method with passed list of component property names and their expected value type `string`': {
      false: () => testing
        .equal<string>([
          'firstname',  // Component property firstname to test against expected `Eve`.
          'surname'     // Component property surname to test against expected `Eve`.
        ], 'Eve')       // Expected value.
    },

    // Object.
    '`equal()` method with passed component property name and expected value type `Object`': {
      false: () => testing
        .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
          { firstname: 'Eve', surname: 'Eve', age: 127, active: false }) 
        .not
        .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
          { firstname: 'Eve', surname: 'Eve', age: 121, active: false }, 'Fail output')
    }
  }
};

/**
 * Selectors
 */
const SELECTORS = {
  'should have h1 tag': {
    // Find tag h1.
    false: () => testing
      .selector('h1')
      .contain('TestComponent')
  },
  // Find attribute `data-src` with specified value and expect it exists.
  'should have div with attribute data-src with specified value': {
    false: () => testing
      .attribute('data-src', 'http://getattribute')
      .contain('Attribute')
      .not
      .contain('Attribute1')
      .clear()
  },
  // Find attribute `data-src` with specified value and expect it exists.
  'should have div with attribute data-src without specyfing value': {
    false: () => testing
      .attribute('data-src')
      .contain('Attribute')
      .not
      .contain('Attribute1')
      .clear()
  },

  // Find classname and expect that it exists.
  'should have class': {
    false: () => testing.class('getclass')
  }
};

/*

// Execute tests.
testing.execute(
  MATCHERS.BE,
  MATCHERS.EQUAL,
  SELECTORS
);

testing.execute({
  'How to use `before()` method': {
    true: () => testing
      .before(() => { }) // `before()` returns nothing.
      .be<number>(27, 27)   // `be()` method expect value `27` to be `27`.
      .be<string>('test fragment', 'test fragment')
      .be<any>({
        'test object': 'test object'
      })
      .be('firstname', 'Eve') // `firstname` property is available in component so `be()` test `component.firstname` against 'Eve'.
  }
});
*/