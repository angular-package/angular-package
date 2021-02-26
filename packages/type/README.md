# Type

[![npm version](https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg)](https://badge.fury.io/js/%40angular-package%2Fchange-detection)
[![GitHub issues](https://img.shields.io/github/issues/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/issues)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Common types, function guards and checkers for `angular-package` library.

```typescript
// Types
import { Constructor, CycleHook, FunctionType, Partial, Types } from '@angular-package/type';

// Type guards
import { instanceOf, typeFuncGuard, typeGuard, typeObjectGuard } from '@angular-package/type'; 
```

**Features**
* **Checks** function by finding a name in it with an `isFunction` function.
* **Checks** any object is a generic `Type` type with an `isObject<Type>` function.
* **Guards** the value to be `number` type with the `isNumber` function.
* **Guards** the value to be `string` type with `isString` function.
* **Type guards** an object with a generic type and **checks** by finding a `property` in the `object` with a `isObjectType<Type>` function.
* **Type guards** value with the generic type and **checks** its type with `boolean` `bigint` `number` `string` with `isPrimitiveType<Type>` function.
 l
**How angular-package understands**

Check
> is to check argument value type to not let it be different than in type guard.

Type guard
> is to guard type in the code editor: it not let provides unexpected value.

Guard
> is a combination both above to type guard and check.

----

* [Installation](#installation)
* [Functions](#functions)
* [Types](#types)
* [Usage](#usage)
* [Library](#library)
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

## Functions

### isFunction

Check function `func` by finding `name` in the `func`. The return value is a `boolean` value.

```typescript
const isFunction = (name: string, func: FunctionType): func is FunctionType => name in func;
```

parameter   | type           | description
------------|----------------|---------------
`name`      | `string`       | Name to find in function parameter `func`
`func`      | `FunctionType` | Function to find `name` in
### isNumber

Guard the `value` to be `number` type. The return value is a `boolean` value.

```typescript
const isNumber = (value: number): value is number => typeof value === 'number';
```
### isObjectType

Guard the `object` to be `Type` type and check by finding `property` in the `object`. The return value is a `boolean` value.

```typescript
const isObjectType = <Type>(object: Type, property: string): object is Type => property in object;
```

### isObject

Check any `object` to be `Type`. The return value is a `boolean` value.

```typescript
const isObject = <Type>(object: any): object is Type => object;
```


## Usage



## Library 

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.9.
### Code scaffolding

Run `ng generate component component-name --project type` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project type`.
> Note: Don't forget to add `--project type` or else it will be added to the default project in your `angular.json` file. 

### Build

Run `ng build type` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build type`, go to the dist folder `cd dist/type` and run `npm publish`.

### Running unit tests

Run `ng test type` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

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
