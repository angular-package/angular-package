# angular-package/core/testing

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Wrapper class to control the execution of [jasmine][405] spec, automatize some its features to help reduce code to write, or maybe even simplify writing some simple spec.

```typescript
import { TestingClass } from '@angular-package/core/testing';
```

```typescript
new TestingClass<T>(                        // T - component to create type.
  protected description: string,            // Main description of describe(description, () => {}).
  protected moduleDef: TestModuleMetadata,  // Configure of TestBed.configureTestingModule(moduleDef).
  public componentTest: Type<T>,            // Component to create with TestBed.createComponent(component);
  protected options?: Options               // Control of execution and display `console.log()`.
);

```

 Parameter | Type | Description
-----------|------|-------------
 `description` | string | Main description in `describe(description, () => {})`.
 `moduleDef` | [TestModuleMetadata][504] | Configure testing module with `TestBed.configureTestingModule(moduleDef)`.
 `component` | [Type][505]\<T\> | [Component][501] to create with `TestBed.createComponent(component)`.
 `options?` | [Options][0] | Execution and [log][410] display control.

---

**Pros(+):**

* Treeshake bundle with **[Rollup][400]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* **Less code to write**
  * Automatize process of configuring environment.
  * Automatically test each selector to not to be `null`.
  * Pass spec as json object.
  * Chaining methods.
  * Autodetect type of passed arguments when using matchers.
* Easy way to make custom spec.
* Control spec execution with its unique automatically given number.
* Group spec depending on what is going to be tested by using method `spec()`.
* All notable changes to this package are documented in [**CHANGELOG.md**][10].
* Organized folders and files [**structure**][301].

**Cons(-):**

* Need to learn how it works.
* Not all [jasmine][405] matchers are available at the moment.

*Please, give feedback about any found cons and pros.*

---

* [Demo](#demo)
* [Installation](#installation)
* [Methods](#methods)
  * [Matchers](#matchers)
    * [Passing arguments](#passing-arguments)
  * [Selectors](#selectors)
* [Usage](#usage)
* [ChangeLog](#changelog)
* [Structure](#structure)
* [Style guide](#style-guide)
* [Git](#git)
* [License](#license)
* [Donate](#donate)

---

## Demo

### Live

~~[Live demonstration](http://angular-package.wwwdev.io/core/property)~~

### Inside repository

Clone this repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to demo folder:

```bash
cd packages/core/demo
```

Install and run:

```bash
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

## Installation

First, install `@angular-package/core` package with command:

```bash
npm i --save @angular-package/core@latest
```

## Methods

### .before()

Make some operations on [component][501] before expectation.

* Returned value is used in the next chained **matcher** method.
* If the next matcher method does not return any value it depends on its arguments.

```typescript
// main.class.ts
before(callback: (component: T, testingClass?: MainClass<T>) => any): this;
```

 Parameter | Type | Description
-----------|------|-------------
 `callback` | (component: T, testingClass?: [MainClass][6]\<T\>) => any | [Function][409] with injected [component][501] and `this` [object][408].

Example:

```typescript
testingClass // <--------------- TestingClass instance.
  .spec('Expect how to use', {
    '`before()` method': testing => testing
      .before(() => 27) // <---- `before()` returns number 27 value.
      .be<number>(27) // <------ `be()` method expect returned value from `before()` to be number `27`.
      .equal<number>(27) // <--- `equal()` method expect returned value from `before()` to equal number `27`.
  });
```

### .clear()

Clear returned result of `.before()` method when name is set to `before` and `.attribute()` `.class()` `.selector()` method when name is set to `query` or both when name is `undefined`.

```typescript
// main.class.ts
clear(name?: ResultName): this;
```

 Parameter | Type | Description
-----------|------|-------------
 `name?`  | [ResultName][2] | Name of the result to be cleared. It can be set to `before` or `query`, when `undefined` it clears both.

Example:

```typescript
testingClass // <--------------- TestingClass instance.
  .spec('Expect how to use', {
    '`before()` method': testing => testing
      .before(() => 27) // <---- `before()` returns number 27 value.
      .be<number>(27) // <------ `be()` method expect returned value from `before()` to be number `27`.
      .equal<number>(27) // <--- `equal()` method expect returned value from `before()` to equal number `27`.
      .clear('before') // <-----  Clear last result before(). Chained method won't use it anymore.

      .be<number>(27) // <------ `be()` method expect returned value from `before()` to be number `27` but it is `undefined`.
  });
```

### .execute()

Execute spec expectations declared before by using `spec()` method. It also restores original settings before each execute and use settings from arguments.

```typescript
// testing.class.ts
execute(execute?: Execute, log?: ConsoleLog): this;
```

 Parameter | Type | Description
-----------|------|-------------
 `execute?`  | [Execute][4] | Filter executing specs by declaring its unique given number as array. When it is `[1, 5]` it executes number `1` and `5`, when `true` or `undefined` it executes all, when `false` it is not executing anything.
 `log?`  | [ConsoleLog][5] | Which logs to display. Four Options are available: boolean `true` = Both executed and skipped specs are logged. Boolean `false` = Executed and skipped specs are'nt logged. String `executed` = Executed specs are logged. String `skipped` = skipped specs are logged.

Example:

```typescript
testingClass // <--------------- TestingClass instance.
  .spec('Expect how to use', {
    '`before()` method': testing => testing
      .before(() => 27) // <---- `before()` returns number 27 value.
      .be<number>(27) // <------ `be()` method expect returned value from `before()` to be number `27`.
      .equal<number>(27) // <--- `equal()` method expect returned value from `before()` to equal number `27`.
  })
  .execute([1], true); // <----- Execute expectation `it()` with number `1` declared by `spec()`
                       //        method with displaying all logs.
```

### .spec()

Add more information about actual spec to the main description and new specs to execute when `reset` is `true` or add to existing specs when reset is `false`.

```typescript
// testing.class.ts
spec(description: string, spec: Spec<T>, reset = true): this;
```

 Parameter | Type | Description
-----------|------|-------------
 `description` | string | Additional description.
 `spec` | [Spec][1]\<T\> | Specs to execute, where `key` is jasmine it description `it(key, () => {});`.
 `reset` | boolean = `true` | Reset the specs to execute, it means create new list.

Example:

```typescript
testingClass // <--------------- TestingClass instance.
  .spec('Expect method `be()`', {
    'to check expectation against 27': testing => testing
      .before(() => 27) // <---- `before()` returns number 27 value.
      .be<number>(27) // <------ `be()` method expect returned value from `before()` to be number `27`.
  })
  // Push spec with seperate description.
  .spec('Expect method `clear()`', {
    'to clear before result': testing => testing
      .before(() => 27) // <---- `before()` returns number 27 value.
      .equal<number>(27) // <--- `equal()` method expect returned value from `before()` to equal number `27`.
      .clear('before') // <-----  Clear last result before(). Chaining method won't use it anymore.
  }, false) // <----------------  DO NOT remove spec declared before.
  .execute(); // <--------------- It executes both spec.
```

### .get()

Get component property value by using lodash `get()` function.

```typescript
// main.class.ts
get<PT>(path: string): PT | undefined;
```

 Parameter | Type | Description
-----------|------|-------------
 `path`  | string |  The path of the property to get.

Example:

```typescript
testingClass // <---------------------- TestingClass instance.
  .spec('Should get', {
    'property `observable$`': testing => testing
      // Get component propery `observable$` and use it with subscribe method.
      .get<Observable<any>>('observable$')
      .subscribe((value: any): void => console.log(value), () => { }, () => { })
  });
```

### .set()

Set component property value by using lodash `get()` function.

```typescript
// main.class.ts
set<PT>(path: string, value: PT): this;
```

 Parameter | Type | Description
-----------|------|-------------
 `path`  | string | The path of the property to set.
 `value`  | PT | The value to set.

Example:

```typescript
testingClass // <---------------------- TestingClass instance.
  .spec('expect age to', {
    'be or equal number 27': testing => testing
      .set<number>('age', 27) // <----- Set component property `age` to 27.
      .be<number>('age', 27) // <------ `be()` method expect component property 'age' value to be `27`.
      .equal<number>('age', 27) // <--- `equal()` method expect component property 'age' value to equal `27`.
  });
```

### Matchers

#### Passing arguments

Examples below explain how each matcher accept specific type of [Argument][3]\<T\>.

How to check component `firstname` property value:

```typescript
testingClass // <---------------------- TestingClass instance.
  .spec({
    'firstname should be `Eve`': {
      true: () => testing
        .be<string>('firstname', 'Eve')   // One property check by providing `string`.
        .be<string>({ firstname: 'Eve' }) // Possible many properties check with different values.
                                          // By providing `object` where `key` is property name.
        .be<string>(['firstname'], 'Eve') // Possible many properties check with one value.
                                          // By providing list of property names with one value.
    }
  })
  .execute();
```

How to check component `removed` property value is set to `true`:

```typescript
testingClass // <---------------------- TestingClass instance.
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

How to check many component properties with the same and different values:

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
 `actualOrExpected`  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 `expected?` | V | "The actual value to be equal to the expected, using deep equality comparison".
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrContain`  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 `contain?` | V | *"The value to look for."*
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrExpected`  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrExpected`  | [Argument][3]\<T\> | Acts as expected value when chaining, actual value as component property name, actual value as component property name list or as component property name with defined value to test expectations against.
 `expected?` | V | "The actual value to be equal to the expected, using deep equality comparison".
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrPropertyName`  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against false.
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrPropertyName`  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against undefined.
 `expectationFailOutput?` | any | Fail output.

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
 `actualOrPropertyName`  | [Argument][3]\<T\> | Actual computed values or as component properties keys values to test expectations against undefined.
 `expectationFailOutput?` | any | Fail output.

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
 `name`  | string | Attribue name to look for.
 `value?` | string | Attribute value to look for.

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
 `name`  | string | `class` name to look for.

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
 `selector`  | string | Look for specific HTMLElement.

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

## ChangeLog

* Guiding principles based on [Keep a Changelog][304]
* All notable changes to this package are documented in [**CHANGELOG.md**][10].

## Structure

Folders and files [structure][301] organization.

## Style guide

Coding with included [style guides][302].

## GIT

Git commit conventions and versioning described [here][300].

## License

MIT © angular-package ([license][303])

## Donate

Package is under [MIT License][303]. Feel invited to help to maintain it with your programming skills, you can also [donate by Donorbox][100] or by [paypal][101].

**Why donate ?**
**wwwdev.io** organization is non-profit, has a volunteer board, no employees or any paid person. Its goal is to work on **javascript/typescript** software, especially dedicated to [angular.io][508] framework and to help open-source software grow by using [MIT License][303] which allows it to be used comercially. So, it is hope you consider supporting our efforts.

[![donate](https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif)][101]

<!--- This package -->
[0]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/interface/options.interface.ts
[1]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/interface/spec.interface.ts
[2]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/type/result-name.type.ts
[3]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/type/argument.type.ts
[4]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/type/execute.type.ts
[5]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/type/console-log.type.ts
[6]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/src/main.class.ts

[10]: https://github.com/angular-package/angular-package/blob/core/packages/core/packages/testing/CHANGELOG.md

[27]: https://donorbox.org/help-creating-open-source-software
[127]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

<!--
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

<!--- @angular-package -->
[300]: https://github.com/angular-package/angular-package/blob/core/GIT.md
[301]: https://github.com/angular-package/angular-package/blob/core/ORGANIZATION.md
[302]: https://github.com/angular-package/angular-package/blob/core/STYLE-GUIDE.md
[303]: https://github.com/angular-package/angular-package/blob/core/LICENSE
[304]: https://github.com/angular-package/angular-package/blob/core/MAKECHANGELOG.md

<!--- Other -->
[400]: https://rollupjs.org/#introduction
[401]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[402]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[403]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[404]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[405]: https://jasmine.github.io/2.0/introduction
[406]: https://www.w3schools.com/js/js_object_properties.asp
[407]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[408]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[409]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[410]: https://developer.mozilla.org/en-US/docs/Web/API/Console/log

<!--- @angular -->
[500]: https://angular-2-training-book.rangle.io/v/v2.3/handout/features/decorators.html
[501]: https://angular.io/api/core/Component
[502]: https://angular.io/tutorial/toh-pt4
[503]: https://angular.io/api/core/ChangeDetectorRef
[504]: https://angular.io/api/core/testing/TestModuleMetadata
[505]: https://angular.io/api/core/Type
[506]: https://angular.io/guide/dynamic-component-loader
[507]: https://angular.io/guide/lifecycle-hooks
[508]: https://angular.io/