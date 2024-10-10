// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { Observable } from 'rxjs';
import { TestingClass } from '..';
import { TestComponent } from './test.component';
// End Step 1.

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testingClass: TestingClass<TestComponent> =
  new TestingClass<TestComponent>('TestComponent', {
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
      log: false,
      execute: false
  });
// End Step 2.

// Step 3. Add and execute some tests
/**
 * Matchers `be()`.
 */
testingClass
  .spec('', {
    'component property `firstname` should be `Eve`': testing => testing
      .be<string>('firstname', 'Eve')   // One property check.
      .be<string>({ firstname: 'Eve' }) // Possible many properties check. with different values
      .be<string>(['firstname'], 'Eve'), // Possible many properties check with one value.

    'component property `removed` should be equal `true`': testing => testing
      .equal<boolean>('removed', true)
      .equal<boolean>({ removed: true })
      .equal<boolean>(['removed'], true)
      .truthy('removed'),

    'component property `removed` should be `true`': testing => testing
      .equal<any>({ firstname: 'Eve', removed: true })  // Different value types, many properties.
      .equal<string>(['firstname', 'surname'], 'Eve'),  // The same value type, many properties.,

    'subscribe to component property `observable$` ': testing => testing
      .before(component => {
        component.observable$ = new Observable<number>(observer => {
          observer.next(127);
          observer.next(27);
          observer.next(7);
          observer.complete();
        });
    })
    .equal<Array<number>>('observable$', [127, 27, 7]),
    
    '`before()` method returned value number should `be()` the same': testing => testing
      .before(() => 27)
      .be<number>(27)
      .clear(), // Clear last result.,

    /**
     * Actual Or Expected.
     */
    '`before()` method returned value string should `be()` the same': testing => testing
      .before(() => {
        const x = 27;

        return x + 5;
      })
      .be<number>(32)
      .clear(), // Clear last result.,

    // boolean.
    '`be()` method with passed `actualOrExpected` json where expected value type is boolean': testing => testing
      .be<boolean>({ active: false }) // Checking component to have property `active` `false`.
      .not
      .be<boolean>({ active: true }),  // Checking component to NOT have property `active` `true`.

    // boolean
    '`be()` method with passed json with many keys where expected type is boolean ': testing => testing
      .be<boolean>({
        active: false,  // Checking component to have property `active` `false`.
        removed: true   // Checking component to have property `removed` `true`.
      }),

    // Number.
    '`be()` method with passed `actualOrExpected` json where expected value type is number': testing => testing
      .be<number>({ age: 127 })  // Checking component to have property age with value 127.
      .not
      .be<number>({ age: 121 }), // Checking component to NOT have property age with value 121.

    // String.
    '`be()` method with passed `actualOrExpected` json where expected value type is string': testing => testing
      .be<string>({ firstname: 'Eve' })    // Checking component to have property `firstname` value 'Eve'.
      .not
      .be<string>({ surname: 'Eveline' }), // Checking component to NOT have property `surname` value 'Eveline'.

    // any.
    '`be()` method with passed json with many keys where expected type is any': testing => testing
      .be<any>({
        active: false,
        firstname: 'Eve',
        age: 127
      }),

    /**
     * Actual & expected.
     */
    // Boolean.
    '`be()` method with passed actual and type boolean expected argument': testing => testing
      .be<boolean>('active', false) // Checking component to have property `active` value `false`.
      .not
      .be<boolean>('active', true),  // Checking component to NOT have property `active` value `true`.

    // Number.
    '`be()` method with passed actual and type number expected argument': testing => testing
      .be<number>('age', 127)   // Checking component to have property `age` value `127`.
      .not
      .be<number>('age', 121),  // Checking component to NOT have property `age` value `121`.

    // String.
    '`be()` method with passed actual and type string expected argument': testing => testing
      .be<string>('firstname', 'Eve')     // Checking component to have property `firstname` value 'Eve'.
      .not
      .be<string>('surname', 'Eveline'),  // Checking component to NOT have property `surname` value 'Eveline'.

    '`be()` method with passed list of component property names and their expected value type `string`': testing => testing
      .be<string>([
        'firstname',  // Component property firstname to test against expected `Eve`.
        'surname'     // Component property surname to test against expected `Eve`.
      ], 'Eve')       // Expected value.
  })
  .execute()

  /**
   * Matchers `equal`.
   */
  .spec('', {
    /**
     * Actual Or Expected.
     */
    // boolean.
    '`equal()` method with passed `actualOrExpected` json where expected value type is boolean': testing => testing
      .equal<boolean>({ active: false }) // Checking component to have property `active` `false`.
      .not
      .equal<boolean>({ active: true }),  // Checking component to NOT have property `active` `true`.

    // boolean
    '`equal()` method with passed json with many keys where expected type is boolean ': testing => testing
      .equal<boolean>({
        active: false,  // Checking component to have property `active` `false`.
        removed: true   // Checking component to have property `removed` `true`.
      }),

    // Number.
    '`equal()` method with passed `actualOrExpected` json where expected value type is number': testing => testing
      .equal<number>({ age: 127 })  // Checking component to have property age with value 127.
      .not
      .equal<number>({ age: 121 }), // Checking component to NOT have property age with value 121.
    
    // String.
    '`equal()` method with passed `actualOrExpected` json where expected value type is string': testing => testing
      .equal<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
      .not
      .equal<string>({ surname: 'Eveline' }), // Checking component to NOT have property `surname` value 'Eveline'.

    // any.
    '`equal()` method with passed json with many keys where expected type is any': testing => testing
      .equal<any>({
        active: false,
        firstname: 'Eve',
        age: 127
      }),

    /**
     * Actual & expected.
     */
    // Boolean.
    '`equal()` method with passed actual and type boolean expected argument': testing => testing
      .equal<boolean>('active', false) // Checking component to have property `active` value `false`.
      .not
      .equal<boolean>('active', true),  // Checking component to NOT have property `active` value `true`.

    // Number.
    '`equal()` method with passed actual and type number expected argument': testing => testing
      .equal<number>('age', 127)  // Checking component to have property `age` value `127`.
      .not
      .equal<number>('age', 121), // Checking component to NOT have property `age` value `121`.

    // String.
    '`equal()` method with passed actual and type string expected argument': testing => testing
      .equal<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
      .not
      .equal<string>('surname', 'Eveline'), // Checking component to NOT have property `surname` value 'Eveline'.

    '`equal()` method with passed list of component property names and their expected value type `string`': testing => testing
      .equal<string>([
        'firstname',  // Component property firstname to test against expected `Eve`.
        'surname'     // Component property surname to test against expected `Eve`.
      ], 'Eve'),      // Expected value.

    // Object.
    '`equal()` method with passed component property name and expected value type `Object`': testing => testing
      .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
        { firstname: 'Eve', surname: 'Eve', age: 127, active: false })
      .not
      .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
        { firstname: 'Eve', surname: 'Eve', age: 121, active: false }, 'Fail output')
  })
  .execute()

  /**
   * Selectors.
   */
  .spec('', {
    'should have h1 tag': testing => testing
      // Find tag h1.
      .selector('h1')
      .contain('TestComponent'),
    // Find attribute `data-src` with specified value and expect it exists.
    'should have div with attribute data-src with specified value': testing => testing
      .attribute('data-src', 'http://getattribute')
      .contain('Attribute')
      .not
      .contain('Attribute1')
      .clear(),
    // Find attribute `data-src` with specified value and expect it exists.
    'should have div with attribute data-src without specyfing value': testing => testing
      .attribute('data-src')
      .contain('Attribute')
      .not
      .contain('Attribute1')
      .clear(),
  
    // Find classname and expect that it exists.
    'should have class': testing => testing.class('getclass')
  })
  .execute();
// End Step 3.
