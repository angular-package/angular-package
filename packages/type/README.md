# Type


[![npm version](https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg)](https://badge.fury.io/js/%40angular-package%2Fchange-detection)
[![GitHub issues](https://img.shields.io/github/issues/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/issues)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)


```typescript
// Types
import { Constructor, CycleHook, FunctionType, Partial, Types } from '@angular-package/type';

// Type guards
import { instanceOf, typeFuncGuard, typeGuard, typeObjectGuard } from '@angular-package/type'; 
```

**Features**
* Check `Constructor<T>` `string` `number` `boolean` type with `typeGuard` function.
* 


## Table of contents
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

### instanceOf

Check `object` type with `T` and its instance by finding a property `find` in the `object`. The return value is a `boolean` value.

```typescript
instanceOf<T>(object: any, find: string): object is T
```
### instanceOf

Check `object` type with `T` and its instance by finding a property `find` in the `object`. The return value is a `boolean` value.

```typescript
typeFuncGuard = (find, func): boolean => find in func
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
