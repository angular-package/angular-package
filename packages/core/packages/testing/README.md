# angular-package/core/testing

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Wrapper class to control the execution of jasmine tests, automatize some its features to help reduce code to write, or maybe even simplify writing some simple tests.

```typescript
import { TestingClass } from '@angular-package/core/testing';
```

```typescript
new TestingClass<T>(                        // T - component to create type.
  protected description: string,            // Main description of describe(description, () => {})
  protected moduleDef: TestModuleMetadata,  // Configure of TestBed.configureTestingModule(moduleDef)
  public component: Type<T>,                // Component to create with TestBed.createComponent(component);
  protected options?: TestingOptions        // Control of execution and display console info.
);
```

**Pros(+):**

* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* **Less code to write**
  * Pass tests as json object.
  * Configuring environment with `beforeAll()` function.
  * Every selector is tested with `expect()`.
  * Chaining methods.
* Autodetection type of passed arguments when using matchers.
* Easy to make custom test.
* Choose which test to execute with its unique number given by class.
* Split tests depending on what is tested by using spread operator.

**Cons(-):**

* Need to learn how it works.
* Some jasmine matchers are not available at the moment.
* Not well jsdocumented.
* Not tested :)

*Give feedback about any found cons and pros.*

----

* [Installation](#installation)
* [Methods](#methods)
  * [Matchers](#matchers)
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
 * Do some operations on component before expectation.
 * @param callback Function with injected component and `this` object.
 */
before(callback: (component: T, testingClass?: TestingClass<T>) => any): this
```

Example:

```typescript
'How to use `before()` method': {
  true: () => testing
    .before(() => 27) // `before()` returns number 27 value.
    .be<number>(27)   // `be()` method expect returned value from `before()` to be number `27`.
 };
```

### eachIt()

Uses jasmine function `it()` to execute tests.

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

Execute tests as spread json objects. Every spec has `true` or `false` key name and when
its value is `true` spec will be executed.

 Parameter | Type | Description
-----------|------|-------------
 ...tests  | Array\<Spec\> | Spread json object with tests to execute.

```typescript
/**
 * Execute tests as spread json objects.
 * @param tests Spread json object with tests to execute.
 */
execute(...tests: Array<Spec>): void {
  this.configure(() => this.eachIt(...tests), undefined, undefined);
}
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

### Matchers

#### be()

Actual value to be the expected value.

 Parameter | Type | Description
-----------|------|-------------
 actualOrExpected  | Argument\<V\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
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
 actualOrContain  | Argument\<V\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
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
 actualOrExpected  | Argument\<V\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
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
 actualOrExpected  | Argument\<V\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
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
 actualOrPropertyName  | Argument\<V\> | Actual computed values or as component properties keys values to test expectations against false.
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
 actualOrPropertyName  | Argument\<V\> | Actual computed values or as component properties keys values to test expectations against undefined.
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
 actualOrPropertyName  | Argument\<V\> | Actual computed values or as component properties keys values to test expectations against undefined.
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

For this usage example `TestComponent` below will be used.

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
import { TestingClass } from '@angular-package/core/testing';
import { TestComponent } from './test.component';
// End Step
```

### Step 2. Crate new `TestingClass` instance with `TestComponent` declaration

```typescript
// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '@angular-package/core/testing';
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
  execute: [ ]
});
// End Step 2.
```

### Step 3. Add and execute some tests

```typescript
// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { TestingClass } from '@angular-package/core/testing';
import { TestComponent } from './test.component';
// End Step

// Step 2. Crate new `TestingClass` instance with `TestComponent` declaration
const testing: TestingClass<TestComponent> =
  new TestingClass<TestComponent>('TestComponent', {
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
  console: true,
  execute: [ ]
});
// End Step.

// Step 3. Add and execute some tests
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

// Execute tests.
testing.execute(
  MATCHERS.BE,
  MATCHERS.EQUAL,
  SELECTORS
);
// End Step.
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

@angular-package is under [MIT License][432], but if you want to help to maintain otherwise than with your coding skills, please click to [donate with Donorbox][27] or with paypal.

[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6)

[0]: x
[1]: x
[2]: x
[27]: https://donorbox.org/help-creating-open-source-software
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