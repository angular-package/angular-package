// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { Observable } from 'rxjs';
import { TestingClass } from '..';
import { TestComponent } from './test.component';
// End Step 1.

// null
const varNull = null;
const varNullArray = [null, varNull];
const varNullJSON = {
  first: null,
  second: varNull
};
// undefined
const varUndefined = undefined;
const varUndefinedArray = [undefined, varUndefined];
const varUndefinedJSON = {
  first: undefined,
  second: varUndefined
};
// string
const varString = 'String';
// number
const varNumber = 27;
// boolean
const varBoolean = false;

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testingClass: TestingClass<TestComponent> =
  new TestingClass<TestComponent>({
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
      log: 'executed',
      execute: false
  });
// End Step 2.

// Step 3. Add and execute some tests
testingClass
  .spec('TestComponent',  {
    'contains spec with an expectation': test => test
      .before(component => {
      })
      .be(true, true)
  })
  .execute(true, 'executed');

testingClass
  /*
    Jasmine defaults
  */
  .spec('A suite', () => {}, { 'contains spec with an expectation': test => test.be<boolean>(true, true) })
  .execute(false)

  .spec('A suite is just a function', {
    'and so is a spec': test => {
      let a: boolean;
      a = true;
      test.be<boolean>(a, true);
    }
  })
  .execute(false)

  .spec('The \'toBe\' matcher compares with ===', {
    'and has a positive case': test => test.be<boolean>(true, true),
    'and has a negative case': test => test.not.be<boolean>(false, true)
  })
  .execute(false)

  .spec('Included matchers:', {
    'The \'toBe\' matcher compares with ===': test => {
      const a = 12;
      const b = a;

      test
        .be<number>(a, b)
        .not
        .be<number>(a, null);
    }
  })
  .execute(false)

  .spec('The \'toEqual\' matcher', {
    'works for simple literals and variables': test => {
      const a = 12;
      test.equal(a, 12);
    },
    'should work for objects': test => {
      const foo = {
        a: 12,
        b: 34
      };
      const bar = {
        a: 12,
        b: 34
      };
      const notBar = {
        a: 11,
        b: 34
      };
      test
        .equal<{ a: number, b: number }>(foo, bar)
        .not
        .equal<{ a: number, b: number }>(foo, notBar);
    },
    'The \'toMatch\' matcher is for regular expressions': test => {
      const message = 'foo bar baz';

      test
        .match(message, /bar/)
        .match(message, 'bar')
        .not
        .match(message, /quux/);
      
      test
        .match(message, [/bar/, 'bar'])
        .not
        .match(message, /quux/);
    },
    'The `toBeUndefined` matcher compares against `undefined`': test => {
      const a = {
        foo: 'foo'
      };

      test
        .not.undefined(a.foo)
        .undefined(a.bar);
    },
    'The `toBeNull` matcher compares against null': test => {
      const a = null;
      const foo = 'foo';
  
      test
        .null(null)
        .null(a)
        .not
        .null(foo)
        // check component values
        .null('componentNull')
        .not
        .null('componentUndefined');
    },
    'The `toBeTruthy` matcher is for boolean casting testing': test => {
      const a = undefined;
      const foo = 'foo';

      test
        .truthy(foo)
        .not
        .truthy(a);
    }
  })
  .execute(false)

  /**
   * Method `before()`.
   */
  .spec('Use `before` method', {
    'to set `age`': test => test
      .before(component => {
        component.age = 15;
      })
      .be<number>('age', 15)
  })
  .execute(false)

  /**
   * Matchers `be()`.
   */
  .spec('component property', {

    '`firstname` should be `Eve`': test => test
      .be<string>('firstname', 'Eve')   // One property check.
      .be<string>({ firstname: 'Eve', surname: 'Eve' }) // Possible many properties check. with different values
      .not
      .be<string>('surname', 'Andrew')
      .be<string>(['firstname', 'surname'], 'Eve'), // Possible many properties check with one value.

    '`removed` should equal `true`': test => test
      .equal<boolean>('removed', true)
      .equal<boolean>({ removed: true })
      .equal<boolean>(['removed'], true)
      .truthy('removed'),

    '`removed` should be `true` and firstname, surname should be `Eve`': testing => testing
      .equal<any>({ firstname: 'Eve', removed: true })  // Different value types, many properties.
      .equal<string>(['firstname', 'surname'], 'Eve'),  // The same value type, many properties.,

    '`data.firstname` should be `Eve`': testing => testing
      .equal<any>({ 'data.firstname': 'Eve', removed: true })  // Different value types, many properties.
      .equal<string>(['data.firstname', 'data.surname'], 'Eve'),  // The same value type, many properties.,

    /*
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
    */
    
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
  .execute(false, 'executed')

  /**
   * Matchers `equal`.
   */
  .spec('`equal()`', {
    /**
     * Actual Or Expected.
     */
    // boolean.
    'method with passed `actualOrExpected` json where expected value type is boolean': testing => testing
      .equal<boolean>({ active: false }) // Checking component to have property `active` `false`.
      .not
      .equal<boolean>({ active: true }),  // Checking component to NOT have property `active` `true`.

    // boolean
    'method with passed json with many keys where expected type is boolean ': testing => testing
      .equal<boolean>({
        active: false,  // Checking component to have property `active` `false`.
        removed: true   // Checking component to have property `removed` `true`.
      }),

    // Number.
    'method with passed `actualOrExpected` json where expected value type is number': testing => testing
      .equal<number>({ age: 127 })  // Checking component to have property age with value 127.
      .not
      .equal<number>({ age: 121 }), // Checking component to NOT have property age with value 121.
    
    // String.
    'method with passed `actualOrExpected` json where expected value type is string': testing => testing
      .equal<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
      .not
      .equal<string>({ surname: 'Eveline' }), // Checking component to NOT have property `surname` value 'Eveline'.

    // any.
    'method with passed json with many keys where expected type is any': testing => testing
      .equal<any>({
        active: false,
        firstname: 'Eve',
        age: 127
      }),

    /**
     * Actual & expected.
     */
    // Boolean.
    'method with passed actual and type boolean expected argument': testing => testing
      .equal<boolean>('active', false) // Checking component to have property `active` value `false`.
      .not
      .equal<boolean>('active', true),  // Checking component to NOT have property `active` value `true`.

    // Number.
    'method with passed actual and type number expected argument': testing => testing
      .equal<number>('age', 127)  // Checking component to have property `age` value `127`.
      .not
      .equal<number>('age', 121), // Checking component to NOT have property `age` value `121`.

    // String.
    'method with passed actual and type string expected argument': testing => testing
      .equal<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
      .not
      .equal<string>('surname', 'Eveline'), // Checking component to NOT have property `surname` value 'Eveline'.

    'method with passed list of component property names and their expected value type `string`': testing => testing
      .equal<any>([
        'firstname',  // Component property firstname to test against expected `Eve`.
        'surname'     // Component property surname to test against expected `Eve`.
      ], 'Eve'),      // Expected value.

    // Object.
    'method with passed component property name and expected value type `Object`': testing => testing
      .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
        { firstname: 'Eve', surname: 'Eve', age: 127, active: false })
      .not
      .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
        { firstname: 'Eve', surname: 'Eve', age: 121, active: false }, 'Fail output')
  })
  .execute(false, 'executed')

  /**
   * Matchers `null`.
   */
  .spec('', {
    'property `additional` should be null.': testing => testing.null('additional'),
    'property `additional` should be null in array.': testing => testing.null(['additional', 'additional_information']),
    'providing arguments': testing => {

      testing
        .null(varNull)
        .null(null).not
        .null(varUndefined).not
        .null(varString).not
        .null(varNumber).not
        .null(varBoolean);
    }
  })
  .execute(false, 'executed')

  /**
   * Matchers `undefined`.
   */
  .spec('use `undefined()` method to find component', {
    'property `place` undefined.': testing => testing.undefined('place'),
    'property `place` in array undefined.': testing => testing.undefined(['place']),
    'property `firstname` in not undefined.': testing => testing.not.undefined(['firstname']),
    // 'property `place1` doesnt exist and it is not undefined.': testing => testing.not.undefined(['place1']),
    'property `place` undefined by using before method.': testing => testing.before(component => component.place)
      .undefined(),
    'property not undefined by using before method.': (testing, done) => testing.before(component => {
      component.place = 'not undefined';
      console.log(`before`, component.place);
      setTimeout(() => {
        component.place = 'aaaa';
        done();
      }, 1000);

      return component.place;
    }).not
      .undefined(),
    'property `place` changed.': (testing, done) => testing.before(component => {
      setTimeout(() => {
        testing.equal('place', 'aaaa');
        done();
      }, 1500);
    })
    
  })
  .execute(false, 'executed')

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
  .execute(false)

  /**
   * Set.
   */
  .spec('Should set', {
    ' property `age`': testing => testing
      .set<number>('age', 123)
      .be<number>('age', 123)
  })
  .execute(false)

  /**
   * Get.
   */
  .spec('Should get', {
    'property `age`': testing => testing
      .get<Observable<any>>('observable$')
      .subscribe((value: any): void => console.log(value), () => { }, () => { })
  })
  .execute(false);
// End Step 3.
