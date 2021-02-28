# Type

[![GitHub issues](https://img.shields.io/github/issues/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/issues)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Common types, function guards and checkers for `angular-package` library.

```typescript
// Type guards
import { guardNumber, guardObject, guardPrimitive, guardString, guardType } from '@angular-package/type'; 

// Check types
import { isFunction, isNumber, isObject, isPrimitive, isString, isType } from '@angular-package/type';

// Types
import { Constructor, CycleHook, FunctionType, Partial, Types } from '@angular-package/type';
```

**Features**
* **Checks** function by finding a name in it with an `isFunction` function.
* **Checks** any object is a generic `Type` type with an `isObject<Type>` function.
* **Guards** the value to be `number` type with the `isNumber` function.
* **Guards** the value to be `string` type with `isString` function.
* **Type guards** an object with a generic type and **checks** by finding a `property` in the `object` with a `isObjectType<Type>` function.
* **Type guards** value with the generic type and **checks** its type with `boolean` `bigint` `number` `string` with `isPrimitiveType<Type>` function.
**How angular-package understands**

Check
> is to check argument value type to not let it be different than in type guard.

Type guard
> is to guard type in the code editor: it not let provides unexpected value.

Guard
> is a combination both above to type guard and check.

----

* [Installation](#installation)
* [Checks](#checks)
* [Guards](#guards)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

## Installation

Install `@angular-package/type` package with command:

```bash
npm i --save @angular-package/type
```

## Checks
### isFunction()
Check function `func` by finding `name` in the `func`. The return value is a `boolean` value.

Import function
```typescript
import { isFunction } from '@angular-package/type';
```

Imported function code
```typescript
const isFunction = (name: string, func: FunctionType): func is FunctionType => name in func;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
name        | `string`       | Name to find in function argument `func`
func        | `FunctionType` | The function to find `name` in it


### isNumber()
Check is **any** `value` a `number` type. The return value is a `boolean` value.

Import function
```typescript
import { isNumber } from '@angular-package/type';
```

Imported function code
```typescript
const isNumber = (value: any): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check to be `number`


### isObject()
Check is **any** `object` a generic `Type` type. The return value is a `boolean` value.

Import function
```typescript
import { isObject } from '@angular-package/type';
```

Imported function code
```typescript
const isObject = <Type>(object: any): object is Type => object;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
object      | `any`          | Any `object` to check to be generic `Type` object


### isPrimitive()
Check is **any** `value` a `number` type. The return value is a `boolean` value.

Import function
```typescript
import { isNumber } from '@angular-package/type';
```

Imported function code
```typescript
const isNumber = (value: any): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check to be `number`


### isString()
Check is **any** `value` a `number` type. The return value is a `boolean` value.

Import function
```typescript
import { isNumber } from '@angular-package/type';
```

Imported function code
```typescript
const isNumber = (value: any): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check to be `number`


### isType()
Check is **any** `value` a `number` type. The return value is a `boolean` value.

Import function
```typescript
import { isNumber } from '@angular-package/type';
```

Imported function code
```typescript
const isType = <Type>(value: any, type: Types<Type>): value is Type => (typeof type === 'string') ? (typeof value === type) : value instanceof type;
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `any`          | Any `value` to check to be `Types<Type>`
type        | `Types<Type>`  | Constructor `Constructor<Type>` type or one of `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check


## Guards
### guardNumber()
Guard the `value` to be `number` type. The return value is a `boolean` value.

Import function
```typescript
import { guardNumber } from '@angular-package/type';
```

Imported function code
```typescript
const guardNumber = (value: number): value is number => typeof value === 'number';
```

**Parameter description**
Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `number`       | Number value to type guard and check


### guardObject()
Guard the `object` to be generic `Type` type and check by finding `property` in the `object`. The return value is a `boolean` value.

Import function
```typescript
import { guardObject } from '@angular-package/type';
```

Imported function code
```typescript
const guardObject = <Type>(object: Type, property: string): object is Type => property in object;
```

**Parameter description**
Parameter   | Type         | Description
------------|      :---:   |---------------
object      | `Type`       | Generic `Type` type object to find `property` name in it 
property    | `string`     | Property name to find in argument `object`


### guardPrimitive()
Guard the `value` to be one of the `Primitives` type. The return value is a `boolean` value.

Import function by using code below
```typescript
import { guardPrimitive } from '@angular-package/type';
```

Imported function code below
```typescript
const guardPrimitive = <Type>(value: Type, type: Primitives): value is Type => typeof value === type;
```

**Parameter description**
Parameter   | Type         | Description
------------|      :---:   |---------------
value       | `Type`       | Generic `Type` value to type guard and check
type        | `Primitives` | One of the primitive `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check


### guardString()
Guard the `value` to be `string` type. The return value is a `boolean` value.

Import function
```typescript
import { guardString } from '@angular-package/type';
```

Imported function code
```typescript
const guardString = (value: string): value is string => typeof value === 'string';
```

Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `string`       | String value to type guard and check


### guardType()
Guard the `value` to be a `constructor` generic `Type` type or on of the primitive `boolean`, `bigint`, `number`, `string` type. The return value is a `boolean` value.

Import function
```typescript
import { guardType } from '@angular-package/type';
```

Imported function code
```typescript
const guardType = <Type>(value: Type, type: Types<Type>): value is Type => (typeof type === 'string') ? (typeof value === type) : value instanceof type;
```

Parameter   | Type           | Description
------------|      :---:     |---------------
value       | `Type`         | Generic `Type` value to type guard and check
type        | `Types<Type>`  | Constructor `Constructor<Type>` type or one of `'boolean'`, `'bigint'`, `'number'`, `'string'` type to check


## GIT
### Commit

* [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
* [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

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

MIT © angular-package ([license](https://github.com/angular-package/angular-package/blob/master/LICENSE))
