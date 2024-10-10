# angular-package/core/testing

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Wrapper class to control the execution of jasmine spec, automatize some its features to help reduce code to write, or maybe even simplify writing some simple spec.

```typescript
import { TestingClass } from '@angular-package/core/testing';
```

```typescript
new TestingClass<T>(                        // T - component to create type.
  protected description: string,            // Main description of describe(description, () => {}).
  protected moduleDef: TestModuleMetadata,  // Configure of TestBed.configureTestingModule(moduleDef).
  public component: Type<T>,                // Component to create with TestBed.createComponent(component);
  options?: Options                         // Control of execution and display `console.log()`.
);
```

 Parameter | Type | Description
-----------|------|-------------
 description | string | Main description of `describe(description, () => {})`.
 moduleDef | [TestModuleMetadata][435] | Configure testing module `TestBed.configureTestingModule(moduleDef)`.
 component | [Type][436]\<T\> | Component to create with `TestBed.createComponent(component)`.
 options? | [Options][0] | Execution and log display control.

**Pros(+):**

* Treeshake bundle with **[Rollup][424]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* **Less code to write**
  * Automatized configuring environment with `beforeAll()` function.
  * Every selector is tested to not to be `null`.
  * Pass spec as json object.
  * Chaining methods.
  * Fast component testing.
* Autodetect type of passed arguments when using matchers.
* Easy to make custom spec.
* Control spec execution with its unique automatically given number.
* Group spec depending on what is going to be tested by using spread operator or method `spec()`.

**Cons(-):**

* Need to learn how it works.
* Some jasmine matchers are not available at the moment.

*Please, give feedback about any found cons and pros.*

----

* [Installation](#installation)
* [Methods](#methods)
  * [Matchers](#matchers)
    * [Passing arguments](#passing-arguments)
  * [Selectors](#selectors)
* [Usage](#usage)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Installation

First, install `@angular-package/core` package with command:

```bash
npm i --save @angular-package/core
```

Add peer dependencies:

```bash
npm i --save lodash-es@4.17.10
```

## Methods

### before()

Do some operations on component before expectation.

**Important:**

* Returned value is used in chained method.
* If method does not return any value matcher depends on actual and expected arguments.

 Parameter | Type | Description
-----------|------|-------------
 callback | (component: T, testingClass?: TestingClass\<T\>) => any | Function with injected component and `this` object.

```typescript
/**
 * Make some operations on component before expectation.
 * @param callback Function with injected component and `this` object.
 */
before(callback: (component: T, testingClass?: MainClass<T>) => any): this
```

Example:

```typescript
{
  'How to use `before()` method': () => testing
    .before(() => 27) // `before()` returns number 27 value.
    .be<number>(27)   // `be()` method expect returned value from `before()` to be number `27`.
}
```

### clear()

Uses jasmine function `it()` to execute tests.

 Parameter | Type | Description
-----------|------|-------------
 name?  | [ResultName][2] | Name of result to set `undefined`.

```typescript
/**
 * Clear result `before` or `query`.
 * @param name Name of result to set `undefined`.
 */
clear(name?: ResultName): this
```

Example:

```typescript
'How to use `before()` method': {
  true: () => testing
    .before(() => 27) // `before()` returns number 27 value.
    .be<number>(27)   // `be()` method expect returned value from `before()` to be number `27`.
    .clear('before')  // Clear last result before(). Chaining method won't use it anymore.
  };
```

### describe()

Uses jasmine function `it()` to execute tests.

 Parameter | Type | Description
-----------|------|-------------
 name?  | [ResultName][2] | Name of result to set `undefined`.

```typescript
/**
 * Primary describe with environment and module definition.
 * @param specToExecute Spec to execute.
 * @param [description=this.description] Jasmine textual description of the main group.
 * @param [moduleDef=this.moduleDef] Angular module definition.
 */
describe(
  specToExecute: Function,
  description: string = this.description,
  moduleDef: TestModuleMetadata = this.moduleDef
): this
```

Example:

```typescript
'How to use `before()` method': {
  true: () => testing
    .before(() => 27) // `before()` returns number 27 value.
    .be<number>(27)   // `be()` method expect returned value from `before()` to be number `27`.
    .clear('before')  // Clear last result before(). Chaining method won't use it anymore.
  };
```

### eachIt()

Uses jasmine function `it()` to execute spec.

 Parameter | Type | Description
-----------|------|-------------
 ...args  | Array\<Spec\> | Spread json object with tests to execute.

```typescript
/**
 * Uses jasmine function `it()` to execute tests.
 * @param args Spread json object with tests to execute.
 */
eachIt(...args: Array<Spec>): void
```

Example:

```typescript
```

### execute()

Execute spec as spread json objects. Every spec has `true` or `false` key name and when
its value is `true` spec will be executed.

 Parameter | Type | Description
-----------|------|-------------
 execute  | Array\<number\> | Select spec to execute.
 ...specs  | Array\<Spec\> | Spread json object with spec to execute.

```typescript
/**
 * Execute specs as spread json objects.
 * @param execute Select spec to execute.
 * @param specs Spread json objects to execute.
 */
execute(execute: Array<number> = [], ...specs: Array<Spec>): this
```

Example:

```typescript
testing.execute({
  'How to use `before()` method': { // Here is test name.
    true: () => testing // Set property key name from `true` to `false` to remove from executing.
      .before(() => { }) // `before()` returns nothing.
      .be<number>(27, 27)   // `be()` method expect value `27` to be `27`.
      .be<string>('test fragment', 'test fragment')
      .be<any>({
        'test object': 'test object'
      })
      .be('firstname', 'Eve') // `firstname` property is available in component so `be()` test `component.firstname` against 'Eve'.
  }
});
```

### spec()

Add spec to execute. Each spec has `'true'` or `'false'` key name and only with value `'true'` spec is executed.

 Parameter | Type | Description
-----------|------|-------------
 spec  | [Spec][1] | List of spec to execute, where `index` is spec name and its value is json object with key name `'false'` or `'true'` and its value is just a `Function`.

```typescript
/**
  * Add spec to list of specs to execute.
  * @param spec Spec to execute.
  * @param [reset=true] Reset specs list to execute, when resseting it is execute group of spec.
  */
spec(spec: Spec, reset = true): this
```

Example:

```typescript
testing.spec({
    'Spec name [index: string]': {
      true: () => testing // Test will be executed because of 'true' key value.
        .selector('div')
        .clear()
    });
```

### property()

Get component property value by using lodash `get()` function.

 Parameter | Type | Description
-----------|------|-------------
 actualOrPropertyName  | string | x

```typescript
/**
 * Get component property value by using lodash `get()` function.
 * @template PT Returned component property value type.
 * @param [actualOrPropertyName] Component property name (key).
 */
property<PT>(actualOrPropertyName: string): PT | null
```

Example:

```typescript
```

### Matchers

#### Passing arguments

Each matcher can accept specific type of [Argument][3]\<T\>. Examples below explain this.

How to check component `firstname` property value:

```typescript
testing
  .spec({
    'firstname should be `Eve`': {
      true: () => testing
        .be<string>('firstname', 'Eve')   // One property check.
        .be<string>({ firstname: 'Eve' }) // Possible many properties check. with different values
        .be<string>(['firstname'], 'Eve') // Possible many properties check with one value.
    }
  })
  .execute();
```

How to check component `removed` property value is set to `true`:

```typescript
testing
  .spec({
    'component property `removed` should be `true`': {
      true: () => testing
        .equal<boolean>('removed', true)
        .equal<boolean>({ removed: true })
        .equal<boolean>(['removed'], true)
        .truthy('removed') // component property `removed` is set to `true`.
    }
  })
  .execute();
```

How to check component many properties with the same and different values:

```typescript
testing
  .spec({
    'component property `removed` should be `true`': {
      true: () => testing
        .equal<any>({ firstname: 'Eve', removed: true })  // Different value types, many properties.
        .equal<string>(['firstname', 'surname'], 'Eve')   // The same value type, many properties.
    }
  })
  .execute();
```

How to test component `Observable` property:

```typescript
testing
  .spec({
    'subscribe to component property `observable$` ': {
      true: () => testing
        .before(component => {
          component.observable$ = new Observable<number>(observer => {
            observer.next(127);
            observer.next(27);
            observer.next(7);
            observer.complete();
          });
        })
        .equal<Array<number>>('observable$', [127, 27, 7])
    }
  })
  .execute();

```

#### be()

Actual value to be the expected value.

 Parameter | Type | Description
-----------|------|-------------
 actualOrExpected  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 expected? | V | "The actual value to be equal to the expected, using deep equality comparison".
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Actual value to be expected value.
 * @template V Expected type.
 * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
 * actual value as component property name list or as component property name with defined value to test expectations against.
 * @param [expected] "The actual value to be equal to the expected, using deep equality comparison".
 * @param [expectationFailOutput] Fail output.
 */
be<V>(actualOrExpected: Argument<V>, expected?: V, expectationFailOutput?: any): this
```

#### contain()

Expect the actual value to contain a specific value.

 Parameter | Type | Description
-----------|------|-------------
 actualOrContain  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 contain? | V | *"The value to look for."*
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Expect the actual value to contain a specific value.
 * @template V Expected type.
 * @param actualOrContain Acts as expected value when chaining, actual value as component property name,
 * actual value as component property name list or as component property name with defined value to test expectations against.
 * @param contain "The value to look for."
 * @param [expectationFailOutput] Fail output.
 */
contain<V = any>(actualOrContain: Argument<V>, contain?: V, expectationFailOutput?: any): this
```

#### defined()

Expect the actual value to be defined. (Not undefined)

 Parameter | Type | Description
-----------|------|-------------
 actualOrExpected  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Expect the actual value to be defined. (Not undefined)
 * @template V Expected type.
 * @param [actualOrExpected] Acts as expected value when chaining, actual value as component property name,
 * actual value as component property name list or as component property name with defined value to test expectations against.
 * @param [expectationFailOutput] Fail output.
 */
defined<V>(actualOrExpected?: Argument<V>, expectationFailOutput?: any): this
```

#### equal()

Expect the actual value to be defined. (Not undefined)

 Parameter | Type | Description
-----------|------|-------------
 actualOrExpected  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 expected? | V | "The actual value to be equal to the expected, using deep equality comparison".
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Actual value to be equal to the expected value.
 * @template V Expected type.
 * @param actualOrExpected Acts as expected value when chaining, actual value as component property name,
 * actual value as component property name list or as component property name with defined value to test expectations against.
 * @param [expected] "The actual value to be equal to the expected, using deep equality comparison".
 * @param [expectationFailOutput] Fail output.
 */
equal<V>(actualOrExpected: Argument<V>, expected?: V, expectationFailOutput?: any): this
```

#### falsy()

Expect the actual value to be falsy.

 Parameter | Type | Description
-----------|------|-------------
 actualOrPropertyName  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against false.
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Expect the actual value to be falsy.
 * @template V Expected type.
 * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against false.
 * @param [expectationFailOutput] Fail output.
 */
falsy<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this
```

#### truthy()

Expect the actual value to be truthy.

 Parameter | Type | Description
-----------|------|-------------
 actualOrPropertyName  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against undefined.
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Expect the actual value to be truthy.
 * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against truthy.
 * @param [expectationFailOutput] Fail output.
 */
truthy<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this
```

#### undefined()

Expect the actual value to be undefined.

 Parameter | Type | Description
-----------|------|-------------
 actualOrPropertyName  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against undefined.
 expectationFailOutput? | any | Fail output.

```typescript
/**
 * Expect the actual value to be undefined.
 * @param [actualOrPropertyName] Actual computed values or as component properties keys values to test expectations against undefined.
 * @param [expectationFailOutput] Fail output.
 */
undefined<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this
```

### Selectors

Each selector is expected to not to be `null`.

#### attribute()

Look for specific attribute by using `DebugElement` with pattern `[${name}="${value}"]` : `[${name}]`.

 Parameter | Type | Description
-----------|------|-------------
 name  | string | Attribue name to look for.
 value? | string | Attribute value to look for.

```typescript
/**
 * Look for specific attribute by using `DebugElement` with pattern `[${name}="${value}"]` : `[${name}]`.
 * @param name Attribue name to look for.
 * @param [value] Attribute value to look for.
 */
attribute(name: string, value?: string): this
```

#### class()

Look for specific class by using `DebugElement`.

 Parameter | Type | Description
-----------|------|-------------
 name  | string | `class` name to look for.

```typescript
/**
 * Look for specific class by using `DebugElement`.
 * @param name Class to look for by using `DebugElement`.
 */
class(name: string): this
```

#### selector()

Typical `By.css` query.

 Parameter | Type | Description
-----------|------|-------------
 selector  | string | Look for specific HTMLElement.

```typescript
/**
 * Typical `By.css` query.
 * @param selector Look for specific HTMLElement.
 */
selector(selector: string): this
```

Example:

```typescript
testing.execute({
  'should have `<h1>` tag': {
    // Look for tag <h1>.
    true: () => testing
      .selector('h1')
      .contain('TestComponent')
  });
```

## Usage

`TestComponent` below will be used for usage example.

```typescript
// test.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
```

```html
<!-- test.component.html -->
<h1>TestComponent</h1>
```

### Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`

```typescript
// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '../../testing';
import { TestComponent } from './test.component';
// End Step
```

### Step 2. Crate new `TestingClass` instance with `TestComponent` declaration

```typescript
// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '../../testing';
import { TestComponent } from './test.component';
// End Step 1.

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testing: TestingClass<TestComponent> =
  new TestingClass<TestComponent>('TestComponent', {
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
  console: true,
  execute: [ ] });
// End Step 2.
```

### Step 3. Add and execute some tests

```typescript
// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '../../testing';
import { TestComponent } from './test.component';
// End Step 1.

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testing: TestingClass<TestComponent> =
  new TestingClass<TestComponent>('TestComponent', {
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
  console: true,
  execute: [ ] });
// End Step 2.

// Step 3. Add and execute some tests
/**
 * Matchers `be()`.
 */
testing
  .spec({
    /**
     * Actual Or Expected.
     */
    '`before()` method returned value number should `be()` the same': {
      true: () => testing
        .before(() => 27)
        .be<number>(27)
        .clear() // Clear last result.
    },

    /**
     * Actual Or Expected.
     */
    '`before()` method returned value string should `be()` the same': {
      true: () => testing
        .before(() => {
          const x = 27;

          return x + 5;
        })
        .be<string>(32)
        .clear() // Clear last result.
    },

    // boolean.
    '`be()` method with passed `actualOrExpected` json where expected value type is boolean': {
      true: () => testing
        .be<boolean>({ active: false }) // Checking component to have property `active` `false`.
        .not
        .be<boolean>({ active: true })  // Checking component to NOT have property `active` `true`.
    },

    // boolean
    '`be()` method with passed json with many keys where expected type is boolean ': {
      true: () => testing
        .be<boolean>({
          active: false,  // Checking component to have property `active` `false`.
          removed: true   // Checking component to have property `removed` `true`.
        })
    },

    // Number.
    '`be()` method with passed `actualOrExpected` json where expected value type is number': {
      true: () => testing
        .be<number>({ age: 127 }) // Checking component to have property age with value 127.
        .not
        .be<number>({ age: 121 }) // Checking component to NOT have property age with value 121.
    },

    // String.
    '`be()` method with passed `actualOrExpected` json where expected value type is string': {
      true: () => testing
        .be<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
        .not
        .be<string>({ surname: 'Eveline' }) // Checking component to NOT have property `surname` value 'Eveline'.
    },

    // any.
    '`be()` method with passed json with many keys where expected type is any': {
      true: () => testing
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
      true: () => testing
        .be<boolean>('active', false) // Checking component to have property `active` value `false`.
        .not
        .be<boolean>('active', true)  // Checking component to NOT have property `active` value `true`.
    },

    // Number.
    '`be()` method with passed actual and type number expected argument': {
      true: () => testing
        .be<number>('age', 127) // Checking component to have property `age` value `127`.
        .not
        .be<number>('age', 121) // Checking component to NOT have property `age` value `121`.
    },

    // String.
    '`be()` method with passed actual and type string expected argument': {
      true: () => testing
        .be<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
        .not
        .be<string>('surname', 'Eveline') // Checking component to NOT have property `surname` value 'Eveline'.
    },

    '`be()` method with passed list of component property names and their expected value type `string`': {
      true: () => testing
        .be<string>([
          'firstname',  // Component property firstname to test against expected `Eve`.
          'surname'     // Component property surname to test against expected `Eve`.
        ], 'Eve')       // Expected value.
    }
  })
  .execute()

  /**
   * Matchers `equal`.
   */
  .spec({
    /**
     * Actual Or Expected.
     */
    // boolean.
    '`equal()` method with passed `actualOrExpected` json where expected value type is boolean': {
      true: () => testing
        .equal<boolean>({ active: false }) // Checking component to have property `active` `false`.
        .not
        .equal<boolean>({ active: true })  // Checking component to NOT have property `active` `true`.
    },

    // boolean
    '`equal()` method with passed json with many keys where expected type is boolean ': {
      true: () => testing
        .equal<boolean>({
          active: false,  // Checking component to have property `active` `false`.
          removed: true   // Checking component to have property `removed` `true`.
        })
    },

    // Number.
    '`equal()` method with passed `actualOrExpected` json where expected value type is number': {
      true: () => testing
        .equal<number>({ age: 127 }) // Checking component to have property age with value 127.
        .not
        .equal<number>({ age: 121 }) // Checking component to NOT have property age with value 121.
    },

    // String.
    '`equal()` method with passed `actualOrExpected` json where expected value type is string': {
      true: () => testing
        .equal<string>({ firstname: 'Eve' })   // Checking component to have property `firstname` value 'Eve'.
        .not
        .equal<string>({ surname: 'Eveline' }) // Checking component to NOT have property `surname` value 'Eveline'.
    },

    // any.
    '`equal()` method with passed json with many keys where expected type is any': {
      true: () => testing
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
      true: () => testing
        .equal<boolean>('active', false) // Checking component to have property `active` value `false`.
        .not
        .equal<boolean>('active', true)  // Checking component to NOT have property `active` value `true`.
    },

    // Number.
    '`equal()` method with passed actual and type number expected argument': {
      true: () => testing
        .equal<number>('age', 127) // Checking component to have property `age` value `127`.
        .not
        .equal<number>('age', 121) // Checking component to NOT have property `age` value `121`.
    },

    // String.
    '`equal()` method with passed actual and type string expected argument': {
      true: () => testing
        .equal<string>('firstname', 'Eve')   // Checking component to have property `firstname` value 'Eve'.
        .not
        .equal<string>('surname', 'Eveline') // Checking component to NOT have property `surname` value 'Eveline'.
    },

    '`equal()` method with passed list of component property names and their expected value type `string`': {
      true: () => testing
        .equal<string>([
          'firstname',  // Component property firstname to test against expected `Eve`.
          'surname'     // Component property surname to test against expected `Eve`.
        ], 'Eve')       // Expected value.
    },

    // Object.
    '`equal()` method with passed component property name and expected value type `Object`': {
      true: () => testing
        .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
          { firstname: 'Eve', surname: 'Eve', age: 127, active: false })
        .not
        .equal<{ firstname: string, surname: string, age: number, active: boolean }>('data',
          { firstname: 'Eve', surname: 'Eve', age: 121, active: false }, 'Fail output')
    }
  })
  .execute()

  /**
   * Selectors.
   */
  .spec({
    'should have h1 tag': {
      // Find tag h1.
      true: () => testing
        .selector('h1')
        .contain('TestComponent')
    },
    // Find attribute `data-src` with specified value and expect it exists.
    'should have div with attribute data-src with specified value': {
      true: () => testing
        .attribute('data-src', 'http://getattribute')
        .contain('Attribute')
        .not
        .contain('Attribute1')
        .clear()
    },
    // Find attribute `data-src` with specified value and expect it exists.
    'should have div with attribute data-src without specyfing value': {
      true: () => testing
        .attribute('data-src')
        .contain('Attribute')
        .not
        .contain('Attribute1')
        .clear()
    },
  
    // Find classname and expect that it exists.
    'should have class': {
      true: () => testing.class('getclass')
    }
  })
  .execute();
// End Step 3.
```

## Style guide

Coded by including style guides below.

* [Angular style guide][427]
* [Angular 5 TSLint configuration (best practices)][428]
* [Angular v5 Snippets][429]
* [Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout][430]

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][425]
* [Karma Git Commit Msg](426)

### Versioning

[Semantic Versioning 2.0.0][431]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][432])

## Donate

Package is under [MIT License][432]. Feel invited to help to maintain it with your programming skills, you can also [donate by Donorbox][27] or by paypal. Thank you.

[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)][127]

[0]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/interface/options.interface.ts
[1]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/interface/spec.interface.ts
[2]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/type/result-name.type.ts
[3]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/type/argument.type.ts

[27]: https://donorbox.org/help-creating-open-source-software
[127]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

[424]: https://rollupjs.org/#introduction
[425]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[426]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[427]: https://angular.io/docs/ts/latest/guide/style-guide.html
[428]: https://gist.github.com/stas-kh/2fc80c11c6db0fc4c64354400e29a2b8
[429]: https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
[430]: https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
[431]: http://semver.org/
[432]: https://github.com/angular-package/angular-package/blob/master/LICENSE
[433]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[434]: https://angular.io/api/core/ChangeDetectorRef
[435]: https://angular.io/api/core/testing/TestModuleMetadata
[436]: https://angular.io/api/core/Type
[437]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes