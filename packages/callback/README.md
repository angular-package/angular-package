# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [function][js-function].          | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [Error][js-error].                          | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [prism][prism-github-readme]         | [Prism][prism-js] highlighter module.                  | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/callback

Manages the callback [`function`][js-function].

[![Gitter][gitter-badge]][gitter-chat]
<!-- npm badge -->
[![npm version][callback-npm-badge-svg]][callback-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][callback-badge-issues]][callback-issues]
[![GitHub forks][callback-badge-forks]][callback-forks]
[![GitHub stars][callback-badge-stars]][callback-stars]
[![GitHub license][callback-badge-license]][callback-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [`Callback`](#callback)
* [Interface](#interface)
* [Type](#type)
* [Changelog](#changelog)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/callback` folder of the [library skeleton][skeleton] then run the commands below.

### Build

Run `ng build callback` to build the package. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Install `@angular-package/testing` with command:

```typescript
npm i @angular-package/testing --no-save
```

Run `ng test callback` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/callback` package with command:

```bash
npm i @angular-package/callback --save
```

<br>

## Api

```typescript
import {
  // Class.
  Callback,
} from '@angular-package/callback';
```

<br>

## `Callback`

Manages the callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] and [`ForEachCallback`][package-type-foreachcallback] type.

<br>

**Static methods:**

| Callback.                                                   | Description |
| :---------------------------------------------------------- | :---------- |
| [`defineErrorCallback()`](#callbackdefineerrorcallback)     | Defines callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`][error-validationerror] with a specified `message` on a state from the supplied `throwOnState`. |
| [`defineForEachCallback()`](#callbackdefineforeachcallback) | Defines callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type to handle `forEach()` method of functions prefixed with `are` from [`@angular-package/type`][type-npm-readme]. |
| [`defineResultCallback()`](#callbackdefineresultcallback)   | Defines callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type that contains [`ResultHandler`](#resulthandler) function to handle the `result`, `value`, and optional `payload` without returning the `result`. |
| [`guard()`](#callbackguard)                                 | Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type. |
| [`isCallback()`](#callbackiscallback)                       | Checks if the provided `value` is an instance of [`Callback`](#callback) with optional allowed names under which callback functions can be stored. |

**Constructor:**

| Constructor                           | Description |
| :------------------------------------ | :---------- |
| [`Callback()`](#callback-constructor) | Initialize an instance of [`Callback`](#callback) with allowed names under which callback functions can be stored. |

**Instance methods:**

| Callback.prototype.                                   | Description |
| :---------------------------------------------------- | :---------- |
| [`getForEachCallback()`][callback-getforeachcallback] | Gets from the storage specified by-name callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type. |
| [`getResultCallback()`][callback-getresultcallback]   | Gets from the storage specified by-name callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type. |
| [`setErrorCallback()`][callback-seterrorcallback]     | Sets a callback [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type that throws [`ValidationError`][error-validationerror] with a specified message on a state from the provided `throwOnState` to the storage under the given allowed name restricted by `AllowNames`. |
| [`setForEachCallback()`][callback-setforeachcallback] | Sets a callback [`function`][js-function]  of a [`ForEachCallback`][package-type-foreachcallback] type to the storage under the given allowed `name`, which is restricted by `AllowNames`. |
| [`setResultCallback()`][callback-setresultcallback]   | Sets a callback [`function`][js-function]  of a [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name`, which is restricted by `AllowNames`. |
| [`setValidationError()`][callback-setvalidationerror] | Sets custom instance of `ValidationError`. |

[callback-getforeachcallback]: #callbackprototypegetforeachcallback
[callback-getresultcallback]: #callbackprototypegetresultcallback
[callback-seterrorcallback]: #callbackprototypeseterrorcallback
[callback-setforeachcallback]: #callbackprototypesetforeachcallback
[callback-setresultcallback]: #callbackprototypesetresultcallback

<br>

### `Callback` static methods

#### `Callback.defineErrorCallback()`

[![update]][callback-github-changelog]

Defines callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to throw [`ValidationError`][error-validationerror] with a specified `message` on a state from the supplied `throwOnState`. The provided `result`, `value`, and `payload` from the defined callback function of [`ResultCallback`][package-type-resultcallback] are being passed to a thrown error of [`ValidationError`][error-validationerror].

```typescript
static defineErrorCallback<Value = any, Payload extends object = object>(
  message: string | ErrorMessage,
  throwOnState: boolean = false,
  resultHandler?: ResultHandler<Value, Payload>,
  defaultPayload?: Payload,
  validationError: ValidationError = this.validationError
): ResultCallback<Value, Payload> {
  return Callback.defineResultCallback((result, value, payload): any => (
    (isFunction(resultHandler) && resultHandler(result, value, payload)),
    (isFalse(throwOnState) ? isFalse(result) : isTrue(result)) && (
      Object.assign(validationError, {
        result,
        value,
        payload,
      }).setMessage(message).throw(message)
    )
  ), defaultPayload);
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of returned [`ResultCallback`][package-type-resultcallback] function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of returned [`ResultCallback`][package-type-resultcallback] function constrained by the [`object`][js-object] type. Its value **can be** captured from a type of the provided `defaultPayload` optional parameter. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `message: string \| ErrorMessage`               | The message of [`string`][js-string] type or [`ErrorMessage`](#errormessage) interface to throw with an error of [`ValidationError`][error-validationerror]. |
| `throwOnState: boolean`                         | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`][error-validationerror] should be thrown. By default, it's set to `false`. |
| `resultHandler?: ResultHandler<Value, Payload>` | An optional [`function`][js-function] of [`ResultHandler`](#resulthandler) type to inject into returned callback function of [`ResultCallback`][package-type-resultcallback] type in order to execute it before the thrown error. |
| `defaultPayload?: Payload`                      | An optional [`object`][js-object] of generic type variable `Payload` as the default `value` of `payload` parameter of [`ResultHandler`](#resulthandler) function from the supplied `resultHandler` parameter. Its properties **cannot be** overwritten. |

**Returns:**

| Returns                          | Type                      | Description  |
| :------------------------------- | :-----------------------: | :----------- |
| `ResultCallback<Value, Payload>` | [`function`][ts-function] | The **return type** is a [`function`][js-function] of a [`ResultCallback`][package-type-resultcallback] type. |

The **return value** is a [`function`][js-function] of the [`ResultCallback`][package-type-resultcallback] type that throws a [`ValidationError`][error-validationerror].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { is } from '@angular-package/type';

// Define callback function of `ResultCallback` type for the `is.string()` method.
const stringCallback = Callback.defineErrorCallback(
  // The message of string type.
  'Something went wrong',
  // A state in which error is being thrown.
  false,
  // Injected callback function executed before the thrown error.
  (result, value, payload) => {
    // Console returns {field: 'firstName', moreField: ''}
    console.log(payload);
  },
  // Property `field` cannot be overwritten. 
  // The object is being passed to the given 'injected' callback function.
  { field: 'firstName' }
);

// Uncaught ValidationError: Something went wrong
is.string(5, stringCallback, { field: 'cannot be overwritten', moreField: '' });
```

```typescript
// Example usage with specifying generic type variables `Value` and `Payload` and the message of an `ErrorMessage`.
import { Callback } from '@angular-package/callback';
import { is } from '@angular-package/type';

// Define callback function for the `is.string()` method to check `firstName` against string type.
const isNameCallback = Callback.defineErrorCallback<string,{ field?: 'firstName'; age?: number }>(
  // The message of the `ErrorMessage` interface.
  {
    problem: 'Name must be a string type.',
    fix: 'There is no direct solution to the described problem.',
    template: `\nCustom problem: [problem] \nCustom fix: [fix]` // Change the template for the message.
  },
  false,
  (result, value, payload) => {
    // Console returns {name: 'isFirstName', field: 'firstName'}
    console.log(payload);
  },
  { field: 'firstName' }
);

// Attempt to use the created callback function.
isNameCallback(
  true,

  // error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.
  27,

  // Payload must be { field?: 'firstName', age?: number }
  // Cannot overwrite property `field`.
  { age: 'Twenty Seven' }
);

// Define `isFirstName()` function to check the string.
const isFirstName = (value: any, callback = isNameCallback): value is boolean =>
  is.string(3, callback, { name: 'isFirstName' });

// Uncaught ValidationError:
// Custom problem: Name must be a string type.
// Custom fix: There is no direct solution to the described problem.
isFirstName(3);

// Caught ValidationError:
// Custom problem: Name must be a string type.
// Custom fix: There is no direct solution to the described problem.
try {
  isFirstName(3);
} catch (e) {
  e.result; // false
  e.value; // 3
  e.payload; // {name: 'isFirstName', field: 'firstName'}
}
```

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { is, ResultCallback } from '@angular-package/type';

// Define the `Person` type.
type Person = { id?: number; firstName?: string; age?: number };

// Define the `isPerson()` function.
const isPerson = (
  value: Person,
  callback: ResultCallback<Person, { database: string }> = (result) => result
): any => callback(typeof value === 'object', value);

// Define callback function of `ResultCallback` for the `isPerson()` function.
const personErrorCallback = Callback.defineErrorCallback<Person>(
  'It is not a person',
  true,
  (result, value, payload) =>
    // Console returns true, {id:1, firstName: 'name', age: 27}
    console.log(result, value, payload),
  { database: 'person_1' }
);

try {
  isPerson({ id: 1, firstName: 'name', age: 27 }, personErrorCallback);
} catch (e) {
  // Console returns { "database": "person_1" }
  console.log(e.payload);
}
```

<br>

#### `Callback.defineForEachCallback()`

[![new]][callback-github-changelog]

Defines callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type to handle `forEach()` method of functions prefixed with `are` from [`@angular-package/type`][type-npm-readme].

```typescript
static defineForEachCallback<Value = any, Payload extends object = object>(
  forEachCallback: ForEachCallback<Value, Payload>,
  defaultPayload?: Payload
): ForEachCallback<Value, Payload> {
  return (result, value, index, array, payload) =>
    forEachCallback(result, value, index, array, {
      ...payload,
      ...defaultPayload,
    } as any);
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of the [`ForEachCallback`][package-type-foreachcallback] function in the supplied `forEachCallback` parameter and return type. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of the [`ForEachCallback`][package-type-foreachcallback] function of the supplied `forEachCallback` parameter and the return type.  Its value **can be** captured from a type of the provided `defaultPayload` optional parameter. |

**Parameters:**

| Name: type                                         | Description |
| :------------------------------------------------- | :---------- |
| `forEachCallback: ForEachCallback<Value, Payload>` | The [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type to define. |
| `defaultPayload?: Payload`                         | An optional [`object`][js-object] of generic type variable `Payload` as the default `value` of `payload` parameter of the returned [`ForEachCallback`][package-type-foreachcallback] function. Its properties **cannot be** overwritten. |

**Returns:**

| Returns                           | Type                      | Description |
| :-------------------------------- | :-----------------------: | :---------- |
| `ForEachCallback<Value, Payload>` | [`function`][ts-function] | The **return type** is a [`function`][ts-function] of [`ForEachCallback`][package-type-foreachcallback]. |

The **return value** is a [`function`][js-function] of the [`ForEachCallback`][package-type-foreachcallback] type.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { are } from '@angular-package/type';

// Define callback function of `ForEachCallback` type for the `are.string()` method.
const areStringCallback = Callback.defineForEachCallback(
  (result, value, index, array, payload) => {
    console.log(`areString()`, result, value, index, array, payload);
  },
  { database: 'person' } as any
);

are
  .string('someone', null, '')
  // Console returns
  // areString() true someone 0 (3) ['someone', null, ''] {name: 'no name', database: 'person'}
  // areString() false null 1 (3) ['someone', null, ''] {name: 'no name', database: 'person'}
  // areString() true  2 (3) ['someone', null, ''] {name: 'no name', database: 'person'}
  .forEach(areStringCallback, { name: 'no name' });
```

```typescript
// Example usage in the `class`.
import { Callback } from '@angular-package/callback';
import { are, ForEachCallback } from '@angular-package/type';

// Define class `Person`.
class Person {
  #callback!: Callback<'check'>;

  #persons: Array<{ checked: boolean; name: string }> = [
    { checked: false, name: 'Someone' },
    { checked: false, name: undefined as any },
    { checked: true, name: 'Someone' },
  ];

  constructor(handleCallback: Callback<'check'>) {
    if (handleCallback) {
      this.#callback = handleCallback;
    }
  }

  public check(
    callbackFn: ForEachCallback = this.#callback.getForEachCallback('check')
  ): this {
    are
      .true(...this.#persons.map((v) => v.checked))
      .forEach(callbackFn, this.#persons);
    return this;
  }
}

// Initialize default callbacks.
const defaultCallbacks = new Callback('check').setForEachCallback<boolean, any>(
  'check',
  (result, value, index, array, persons) => {
    if (result === true) {
      // Console returns 2 true {checked: true, name: 'Someone'}
      console.log(index, result, persons[index]);
    } else {
      persons[index].checked = true;
    }
  }
);

// Inject `defaultCallbacks` into instance of `Person` and set `checked` to `true` if `false` by using `check()` method.
new Person(defaultCallbacks).check();
```

<br>

#### `Callback.defineResultCallback()`

[![update]][callback-github-changelog]

Defines callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type that contains [`ResultHandler`](#resulthandler) function to handle the `result`, `value`, and optional `payload` without returning the `result`.

```typescript
static defineResultCallback<Value = any, Payload extends object = object>(
  resultHandler: ResultHandler<Value, Payload>,
  defaultPayload?: Payload
): ResultCallback<Value, Payload> {
  return (result, value, payload) => (
    resultHandler(result, value, {
      ...payload,
      ...defaultPayload,
    } as Payload),
    result
  );
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of returned [`ResultCallback`][package-type-resultcallback] function and [`ResultHandler`](#resulthandler) function from the supplied `resultHandler` parameter. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of returned [`ResultCallback`][package-type-resultcallback] function and [`ResultHandler`](#resulthandler) function from the supplied `resultHandler` parameter, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `defaultPayload` optional parameter. |

**Parameters:**

| Name: type                                     | Description |
| :--------------------------------------------- | :---------- |
| `resultHandler: ResultHandler<Value, Payload>` | The [`function`][js-function] of [`ResultHandler`](#resulthandler) type to inject into returned callback function of [`ResultCallback`][package-type-resultcallback] type. |
| `defaultPayload?: Payload`                     | An optional [`object`][js-object] of generic type variable `Payload` as the default `value` of `payload` parameter of returned [`ResultCallback`][package-type-resultcallback] function and [`ResultHandler`](#resulthandler) function from given `resultHandler` parameter. Its properties **cannot be** overwritten. |

**Returns:**

| Returns                          | Type                      | Description |
| :------------------------------- | :-----------------------: | :---------- |
| `ResultCallback<Value, Payload>` | [`function`][ts-function] | The **return type** is a [`function`][ts-function] of [`ResultCallback`][package-type-resultcallback]. |

The **return value** is a [`function`][js-function] of the [`ResultCallback`][package-type-resultcallback] type that contains the given [`function`][js-function] of [`ResultHandler`](#resulthandler) type.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { is } from '@angular-package/type';

const stringCallback = Callback.defineResultCallback(
  (result: boolean, payload) => {
    if (is.false(result)) {
      console.log(`Something went wrong`, payload);
    }
  }
);

// Returns in console 'Something went wrong' 5
is.string(5, stringCallback);
```

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { ResultCallback } from '@angular-package/type';

// Define the `Person` type.
type Person = { id?: number; firstName?: string; age?: number };

// Define `isPerson()` function.
const isPerson = (
  value: Person,
  callback: ResultCallback<Person, { database: string }> = (result) => result
): any => callback(typeof value === 'object', value);

// Define callback function of `ResultCallback` type.
const personResultCallback = Callback.defineResultCallback(
  (result, value, payload) => {
    if (payload !== undefined) {
      console.log(result, value, payload);
    }
  },
  { database: 'person' }
);

// Console returns true { firstName: 'My name' } { database: 'person' }
isPerson({ firstName: 'My name' }, personResultCallback);
```

<br>

#### `Callback.guard()`

[![update]][callback-github-changelog]

Guards the provided `resultCallback` to be [`ResultCallback`][package-type-resultcallback] type.

```typescript
static guard<Value = any, Payload extends object = object>(
  resultCallback: ResultCallback<Value, Payload>
): resultCallback is ResultCallback<Value, Payload> {
  return guardFunction(resultCallback);
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of the returned [`ResultCallback`][package-type-resultcallback] function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of the [`ResultCallback`][package-type-resultcallback] and [`ResultHandler`](#resulthandler) function constrained by the [`object`][js-object] type. Its value can be captured from a type of the provided `defaultPayload` optional parameter. |

**Parameters:**

| Name: type                                       | Description |
| :----------------------------------------------- | :---------- |
| `resultCallback: ResultCallback<Value, Payload>` | The [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type to guard. |

**Returns:**

| Returns                                            | Type                    | Description  |
| :------------------------------------------------- | :---------------------: | :----------- |
| `resultCallback is ResultCallback<Value, Payload>` | [`boolean`][ts-boolean] | The **return type** is [`boolean`][ts-boolean] as the result of its statement that indicates the provided `resultCallback` is a [`function`][ts-function] of a [`ResultCallback`][package-type-resultcallback] type. |

The **return value** is a `boolean` indicating whether the provided `resultCallback` parameter is a [`function`][js-function].

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

Callback.guard(result => result); // Returns `true`.
Callback.guard({} as any); // Returns `false`.
Callback.guard((result, value, payload, more) => result); // Type error, because of `more` parameter.
```

<br>

#### `Callback.isCallback()`

Checks if the provided `value` is an instance of [`Callback`](#callback) with optional allowed names under which callback functions can be stored.

```typescript
static isCallback<AllowNames extends string>(
  value: any,
  ...allowNames: AllowNames[]
): value is Callback<AllowNames> {
  return isInstance(value, Callback);
}
```

**Generic type variables:**

| Name         |  Default value        | Description |
| :----------- | :-------------------: |:----------- |
| `AllowNames` | [`string`][ts-string] | A generic type variable `AllowNames` constrained by the [`string`][js-string] type that is used to **indicate** allowed names under which callback functions can be stored via the return type `value is Callback<AllowNames>`. Its value **can be** captured from the provided `allowNames` rest parameter. |

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `value: any`                  | The `value` of any type to check. |
| `...allowNames: AllowNames[]` | A [rest parameter][js-rest-parameter] of generic type variable `AllowNames` is being used only to capture the type for `AllowNames` of returned [`Callback`](#callback). |

**Returns:**

| Returns                         | Type                    | Description |
| :------------------------------ | :---------------------: | :---------- |
| `value is Callback<AllowNames>` | [`boolean`][ts-boolean] | The **return type** is [`boolean`][ts-boolean] as the result of its statement that indicates the provided `value` is [`Callback`](#callback) with allowed names from the provided `allowNames` parameter or generic type variable `AllowNames`. |

The **return value** is a `boolean` indicating whether the `value` is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

Callback.isCallback({}); // Returns `false`
Callback.isCallback(new Callback()); // Returns `true`

const callback = new Callback('one', 'two', 'three');
if (Callback.isCallback(callback)) {
  // There's no hint on `name` parameter about allowed names.
  callback.setResultCallback('one', result => result);
}
if (Callback.isCallback(callback, 'one', 'two')) {
  // There is a hint from the provided `allowNames` parameter of the `isCallback()` method.
  callback.setResultCallback('one', result => result);
}
```

<br>

### `Callback` constructor

#### `Callback()`

Initialize an instance of [`Callback`](#callback) with allowed names under which callback functions can be stored.

```typescript
new Callback<AllowNames extends string>(...allowNames: AllowNames[]) {
  this.#allowedNames = guard.array(allowNames)
    ? new Set(allowNames)
    : this.#allowedNames;
}
```

**Generic type variables:**

| Name         |  Default value        | Description |
| :----------- | :-------------------: |:----------- |
| `AllowNames` | [`string`][ts-string] | A generic type variable of `AllowNames` name constrained by [`string`][js-string] type that is used to **restrict** allowed names under which callback functions can be stored. Its value **must be** captured from the provided `allowNames` rest parameter to work properly with `isNameAllowed()` private method. |

**Parameters:**

| Name: type                   | Description |
| :--------------------------- | :---------- |
| `allowNames: AllowedNames[]` | A [rest parameter][js-rest-parameter] of [`string`][js-string] type allowed names under which callback functions can be stored. Only those names given by this parameter are being checked by the `isNameAllowed()` private method. |

**Returns:**

The **return value** is new instance of a [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('set', 'define');
```

<br>

### `Callback` instance methods

#### `Callback.prototype.getForEachCallback()`

[![new]][callback-github-changelog]

Gets from the storage specified by-name callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type.

```typescript
public getForEachCallback<
  Value = any,
  Payload extends object = object,
  Name extends AllowNames = AllowNames
>(name: Name, capturePayload?: Payload): ForEachCallback<Value, Payload> {
  return this.#storage.get(name);
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of returned [`ForEachCallback`][package-type-foreachcallback] function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of returned [`ForEachCallback`][package-type-foreachcallback] function, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `capturePayload` optional parameter. |
| `Name`    | `AllowNames`          | A generic type variable `Name` constrained by generic type variable `AllowNames`, captured from the supplied `name` indicates the name under which callback [`function`][ts-function] is picked from the storage. |

**Parameters:**

| Name: type                 | Description |
| :------------------------- | :---------- |
| `name: Name`               | The name of a generic type variable `Name` to get stored callback [`function`][js-function]. |
| `capturePayload?: Payload` | An optional [`object`][js-object] of generic type variable `Payload` that is used only to capture the value by the generic type variable `Payload`. |

**Returns:**

| Returns                           | Type                      | Description |
| :-------------------------------- | :-----------------------: | :---------- |
| `ForEachCallback<Value, Payload>` | [`function`][ts-function] | The **return type** is [`ForEachCallback`][package-type-foreachcallback] [`function`][ts-function]. |

The **return value** is the callback [`function`][js-function] of the [`ForEachCallback`][package-type-foreachcallback] type from the storage.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName');

// Define the default `payload`.
const defaultPersonPayload = { database: 'person', field: 'firstName' };
const additionalPersonPayload: {name?: string, age?: number} = { };

// Set the callback function of the `ResultCallback` type under the 'firstName' name.
callback.setForEachCallback(
  // The name under which the given callback is stored.
  'firstName',
  // Callback function to store.
  (result, value, index, array, payload) => {
    // Console returns {age: 27, name: 'age', database: 'person', field: 'firstName'}
    console.log(payload);
  },
  // Payload passed to the given callback function, which cannot be overwritten.
  { ...additionalPersonPayload, ...defaultPersonPayload }
);

// Direct usage.
callback.getForEachCallback(
  // The name under which callback function is stored.
  'firstName',
  // Capture the type of generic type variable `Payload.
  additionalPersonPayload
)(false, 'my name', 1, [], { age: 27, name: 'age' });

// Get the function of the `ForEachCallback` type stored under the 'firstName' name.
// Use generic type variables to get type of the `Payload`.
const personCallback = callback.getForEachCallback<
  string,
  typeof additionalPersonPayload
>('firstName');

// Console returns {age: 127, database: 'person', field: 'firstName'}
personCallback(false, 'my name', 1, [], { age: 127 });
```

```typescript
// Example usage in the `class`.
import { Callback } from '@angular-package/callback';
import { are, ForEachCallback } from '@angular-package/type';

class Person {
  #callback!: Callback<'check'>;

  #persons: Array<{ checked: boolean; name: string }> = [
    { checked: false, name: 'Someone' },
    { checked: false, name: undefined as any },
    { checked: true, name: 'Someone' },
  ];

  constructor(handleCallback: Callback<'check'>) {
    if (handleCallback) {
      this.#callback = handleCallback;
    }
  }

  public check(
    callbackFn: ForEachCallback = this.#callback.getForEachCallback('check')
  ): this {
    are
      .true(...this.#persons.map((v) => v.checked))
      .forEach(callbackFn, this.#persons);
    return this;
  }
}

// Initialize default callbacks.
const defaultCallbacks = new Callback('check').setForEachCallback<boolean, any>(
  'check',
  (result, value, index, array, persons) => {
    if (result === true) {
      console.log(index, result, persons[index]);
    } else {
      persons[index].checked = true;
    }
  }
);

// Inject `defaultCallbacks` into the `Person` and set `checked` to `true` if `false`.
new Person(defaultCallbacks).check();
```

<br>

#### `Callback.prototype.getResultCallback()`

[![new]][callback-github-changelog]

Gets from the storage specified by-name callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type.

```typescript
public getResultCallback<
  Value = any,
  Payload extends object = object,
  Name extends AllowNames = AllowNames
>(name: Name, capturePayload?: Payload): ResultCallback<Value, Payload> {
  return this.#storage.get(name);
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of returned [`ResultCallback`][package-type-resultcallback] function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of returned [`ResultCallback`][package-type-resultcallback] function, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `capturePayload` optional parameter. |
| `Name`    | `AllowNames`          | A generic type variable `Name` constrained by generic type variable `AllowNames`, captured from the supplied `name` indicates the name under which callback [`function`][ts-function] is picked from the storage. |

**Parameters:**

| Name: type                 | Description |
| :------------------------- | :---------- |
| `name: Name`               | The name of a generic type variable `Name` to get the stored callback [`function`][js-function]. |
| `capturePayload?: Payload` | An optional [`object`][js-object] of generic type variable `Payload` that is used only to capture the value by the generic type variable `Payload`. |

**Returns:**

| Returns                          | Type                      | Description |
| :------------------------------- | :-----------------------: | :---------- |
| `ResultCallback<Value, Payload>` | [`function`][ts-function] | The **return type** is [`ResultCallback`][package-type-resultcallback] [`function`][ts-function]. |

The **return value** is the callback [`function`][js-function] of the [`ResultCallback`][package-type-resultcallback] type from the storage.

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName');

callback
  // Set the callback function of the `ResultCallback` type under the 'firstName' name.
  .setResultCallback('firstName', result => result)
  // Get the function of the `ResultCallback` type stored under the 'firstName' name.
  .getResultCallback('firstName');
```

```typescript
// Generic type variable payload example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callbackInstance = new Callback('firstName');

// Define type for the `Payload`.
type CustomPayload = { id: number; name: string };

// Set the callback function of `ResultCallback` under the 'firstName' name.
callbackInstance.setResultCallback<any, CustomPayload>(
  'firstName',
  (result, value, payload) => {
    result //
    value // 
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  }
);

// Get the function of the `ResultCallback` type stored under the 'firstName' name with the `CustomPayload` type.
const firstNameCallback = callbackInstance.getResultCallback<
  any,
  CustomPayload
>('firstName');

// Use the defined callback function with a defined `CustomPayload`.
firstNameCallback(false, 5, { id: 5, name: 'there is no name', age: 1 }); // TypeError because of the `age`
```

<br>

#### `Callback.prototype.setErrorCallback`

[![update]][callback-github-changelog]

Sets callback [`function`][js-function] of [`ResultCallback`][package-type-resultcallback] type that throws [`ValidationError`][error-validationerror] with a specified `message` on a state from the provided `throwOnState` to the storage under the given allowed `name`.

```typescript
public setErrorCallback<
  Value = any,
  Payload extends object = object,
  Name extends AllowNames = AllowNames
>(
  name: Name,
  message: string | ErrorMessage,
  throwOnState: boolean = false,
  resultHandler?: ResultHandler<Value, Payload>,
  defaultPayload?: Payload
): this {
  if (this.isNameAllowed(name)) {
    this.#storage.set(
      name,
      Callback.defineErrorCallback(
        message,
        throwOnState,
        resultHandler,
        defaultPayload
      )
    );
  }
  return this;
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of [`ResultHandler`](#resulthandler) function from optional supplied `resultHandler` parameter. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of [`ResultHandler`](#resulthandler) function from optional supplied `resultHandler` parameter, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `defaultPayload` optional parameter. |
| `Name`    | `AllowNames`          | A generic type variable `Name` constrained by generic type variable `AllowNames`, captured from supplied `name` indicates the name under which callback [`function`][ts-function] is stored. |

**Parameters:**

| Name: type                                      | Description |
| :---------------------------------------------- | :---------- |
| `name: Name`                                    | The name of a generic type variable `Name` under which callback [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()`.|
| `message: string \| ErrorMessage`               | The message of [`string`][js-string] type or [`ErrorMessage`](#errormessage) interface, to throw with an error of [`ValidationError`][error-validationerror]. |
| `throwOnState: boolean`                         | A state of [`boolean`][js-boolean] type on which an error of [`ValidationError`][error-validationerror] should be thrown. By default, it's set to `false`. |
| `resultHandler?: ResultHandler<Value, Payload>` | An optional [`function`][js-function] of [`ResultHandler`](#resulthandler) type to inject into returned callback function of [`ResultCallback`][package-type-resultcallback] type in order to execute it before the thrown error. |
| `defaultPayload?: Payload`                      | An optional [`object`][js-object] of generic type variable `Payload` as the default `value` of `payload` parameter of returned [`ResultCallback`][package-type-resultcallback] function and [`ResultHandler`](#resulthandler) function from the supplied `resultHandler` parameter. Its properties **cannot be** overwritten. |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of [`Callback`](#callback). |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName', 'lastName');

// Set the error callback function of the `ResultCallback` type under the 'lastName' name.
callback.setErrorCallback('lastName', 'LastName must be a string type', false);
```

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName', 'lastName');

// Set the error callback function of the `ResultCallback` type under the 'lastName' name.
callback.setErrorCallback(
  'lastName',
  'LastName must be a string type',
  false,
  (result, value, payload) => {
    payload?.field // Returns 'lastName'
    payload // Returns {moreField: true, field: 'lastName'}
  },
  { field: 'lastName' }
);

// Execute stored callback function.
callback.getResultCallback('lastName', { moreField: true })(true, 'my name', { moreField: true });
```

<br>

#### `Callback.prototype.setForEachCallback`

[![new]][callback-github-changelog]

Sets callback [`function`][js-function] of [`ForEachCallback`][package-type-foreachcallback] type to the storage under the given allowed `name`.

```typescript
public setForEachCallback<
  Value = any,
  Payload extends object = object,
  Name extends AllowNames = AllowNames
>(
  name: Name,
  forEachCallback: ForEachCallback<Value, Payload>,
  defaultPayload?: Payload
): this {
  if (this.isNameAllowed(name)) {
    this.#storage.set(
      name,
      Callback.defineForEachCallback(forEachCallback, defaultPayload)
    );
  }
  return this;
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of supplied `forEachCallback` function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of supplied `forEachCallback` function, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `defaultPayload` optional parameter. |
| `Name`    | `AllowNames`          | A generic type variable `Name` constrained by generic type variable `AllowNames`, captured from supplied `name` indicates the name under which callback [`function`][ts-function] is stored. |

**Parameters:**

| Name: type                                         | Description |
| :------------------------------------------------- | :---------- |
| `name: Name`                                       | The name of a generic type variable `Name` under which callback [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()`. |
| `forEachCallback: ForEachCallback<Value, Payload>` | The callback function of [`ForEachCallback`][package-type-foreachcallback] type to set under the given `name`. |
| `defaultPayload?: Payload`                         | An optional [`object`][js-object] of generic type variable `Payload` as the default value of `payload` parameter of supplied `forEachCallback` function. Its properties **cannot be** overwritten. |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of [`Callback`](#callback). |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';
import { are } from '@angular-package/type';

// Define database with addresses.
const database = [
  { city: 'New York', postCode: 1 },
  { city: 'Warsaw', postCode: 2 },
  { city: 'London', postCode: 3 },
  { city: undefined, postCode: 4 },
  { city: null, postCode: 6 },
  { city: 'San Francisco', postCode: 5 },
];

// Define callback for `are` checking functions.
const checkAddress = new Callback('city');

// Set callback function for checking the city against the string type.
checkAddress.setForEachCallback(
  'city',
  (result, value, index, array, addresses) =>
    result === false ? console.log(value) : console.log(value),
  database
);

// Execute the check.
are
  .string(...database.map((v) => v.city))
  .forEach(checkAddress.getForEachCallback('city'), database);
```

<br>

#### `Callback.prototype.setResultCallback()`

[![update]][callback-github-changelog]

Sets callback `function` of [`ResultCallback`][package-type-resultcallback] type to the storage under the given allowed `name`.

```typescript
public setResultCallback<
  Value = any,
  Payload extends object = object,
  Name extends AllowNames = AllowNames
>(
  name: Name,
  resultHandler: ResultHandler<Value, Payload>,
  defaultPayload?: Payload
): this {
  if (this.isNameAllowed(name)) {
    this.#storage.set(
      name,
      Callback.defineResultCallback(resultHandler, defaultPayload)
    );
  }
  return this;
}
```

**Generic type variables:**

| Name      | Default value         | Description |
| :-------- | :-------------------: | :---------- |
| `Value`   | [`any`][ts-any]       | A generic type variable `Value` by default equal to [`any`][ts-any] determines the type of the `value` parameter of supplied [`resultHandler`](#resulthandler) function. |
| `Payload` | [`object`][ts-object] | The shape of the optional `payload` parameter of supplied [`resultHandler`](#resulthandler) function, constrained by the [`object`][ts-object] type. Its value **can be** captured from a type of the provided `capturePayload` optional parameter. |
| `Name`    | `AllowNames`          | A generic type variable `Name` constrained by generic type variable `AllowNames`, captured from supplied `name` indicates the name under which callback [`function`][ts-function] is stored. |

**Parameters:**

| Name: type                                     | Description |
| :--------------------------------------------- | :---------- |
| `name: Name`                                   | The name of a generic type variable `Name` under which callback [`function`][js-function] is stored. The allowed status of the provided `name` is checked by the private method `isNameAllowed()`. |
| `resultHandler: ResultHandler<Value, Payload>` | The [`function`][js-function] of the [`ResultHandler`](#resulthandler) type to handle the `result`, `value`, and optional `payload` of the [`ResultCallback`][package-type-resultcallback] function without returning the `result`. |
| `defaultPayload?: Payload`                     | An optional [`object`][js-object] of generic type variable `Payload` as the default value of `payload` parameter of supplied `resultHandler` function. Its properties **cannot be** overwritten. |

**Returns:**

| Returns | Type     | Description |
| :------ | :------: | :---------- |
| `this`  | `object` | The **return type** is an instance of `Callback`. |

The **return value** is an instance of [`Callback`](#callback).

**Usage:**

```typescript
// Example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName');

// Set the callback function under the given name.
callback.setResultCallback('firstName', result => result);
```

```typescript
// Generic type variable `Value` and `Payload` example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName');

// Type for the `Payload`.
type CustomPayload = { id: number; name: string };

// Set the callback function under the given name.
callback.setResultCallback<string, CustomPayload>(
  'firstName',
  (result, value, payload) => {
    result // boolean type
    value // string type
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  }
);
```

```typescript
// Captured `Payload` example usage.
import { Callback } from '@angular-package/callback';

// Initialize `Callback`.
const callback = new Callback('firstName');

// Constant from which is going to be captured type for the `Payload`.
const payLoadToCapture = { id: 1, name: '' };

// Set the callback function under the given name.
callback.setResultCallback(
  'firstName',
  (result, value, payload) => {
    if (payload) {
      // It handles two properties from the payload.
      // payload.id
      // payload.name
    }
  },
  payLoadToCapture
);
```

<br>

## Type

#### `ResultHandler`

[![update]][callback-github-changelog]

**Internal** function to handle the arguments of the [`ResultCallback`][package-type-resultcallback] function before its result return.

```typescript
type ResultHandler<Value = any, Payload extends object = object> = (
  result: boolean,
  value: Value,
  payload?: Payload
) => void;
```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/callback/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][callback-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: callback  -->
  <!-- GitHub: badges -->
  [callback-badge-issues]: https://img.shields.io/github/issues/angular-package/callback
  [callback-badge-forks]: https://img.shields.io/github/forks/angular-package/callback
  [callback-badge-stars]: https://img.shields.io/github/stars/angular-package/callback
  [callback-badge-license]: https://img.shields.io/github/license/angular-package/callback
  <!-- GitHub: badges links -->
  [callback-issues]: https://github.com/angular-package/callback/issues
  [callback-forks]: https://github.com/angular-package/callback/network
  [callback-license]: https://github.com/angular-package/callback/blob/master/LICENSE
  [callback-stars]: https://github.com/angular-package/callback/stargazers

<!-- This package -->

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme
  [callback-github-changelog]: https://github.com/angular-package/callback/blob/main/CHANGELOG.md

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

  <!-- error -->
  [error-validationerror]: https://github.com/angular-package/error#validationerror

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-foreachcallback]: https://github.com/angular-package/type#foreachcallback
  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-key]: https://github.com/angular-package/type#key

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
