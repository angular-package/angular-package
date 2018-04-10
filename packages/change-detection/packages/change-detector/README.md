# change-detection/change-detector

Feature to find component `ChangeDetectorRef` instance and handle its detection tree with indicated properties. It is used in `ApChangeDetection` decorator.

```typescript
import { 
  ApChangeDetectorClass,
  ApChangeDetectorAClass
} from '@angular-package/change-detection/change-detector';
```
```typescript
ApChangeDetectorClass<T>(component: Type<T>)
```

| Parameter | Type      | Description                            |
|-----------|-----------|----------------------------------------|
| component | Type\<T\> | Component to find `ChangeDetectorRef`. |


**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.

**Cons(-):**

**Differences**
* 

**Important!**

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Properties](#properties)
* [Methods](#methods)
* [Usage](#usage)
* [Scripts](#scripts)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----


## Demonstration

**Available**

[Live demonstration](http://angular-package.wwwdev.io/change-detection)

Demo available inside repository.

## Installation

Install `@angular-package/change-detection` package with command:

```bash
npm i --save @angular-package/change-detection@2.0.0
```

Install `peerDependencies`:

```bash
npm i --save @angular-package/core@1.0.1 lodash-es@4.17.8
```

## Properties

| Access modifier | name        | Type                        | Description                                          |
|-----------------|-------------|-----------------------------|------------------------------------------------------|
| private         | cd?         | string                      | Property name of found `ChangeDetectorRef` instance. |
| public          | detection   | boolean = false             | Whether detection is **on** or **off**.              |
| public          | properties? | ApChangeDetectionProperties | Detect changes when specified property is **true**.  |


## Methods

### detach
Detaches component change detector from the change detector tree. The detached change detector will not be checked until it is reattached.

| Parameter | Type      | Default value | Description                                                                                 |
|-----------|-----------|---------------|---------------------------------------------------------------------------------------------|
| component | Type\<T\> | -             | Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detach()`. |

```typescript
/**
 * Detaches component change detector from the change detector tree.
 * The detached change detector will not be checked until it is reattached.
 * @param {Type<T>} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detach()`.
 * @memberof ApChangeDetectorClass
 */
public detach(component: Type<T>): void
```

### detect
Detect changes in specified component, and conditionally by providing property name.

| Parameter | Type      | Default value | Description                                                                                        |
|-----------|-----------|---------------|----------------------------------------------------------------------------------------------------|
| component | Type\<T\> | -             | Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detectChanges()`. |
| property? | string    | -             | Name of property found in `properties` as true to invoke `detectChanges()`.                        |


```typescript
/**
 * Detect changes in specified component, and conditionally by providing property name.
 * @param {Type<T>} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detectChanges()`.
 * @param {string} [property] Name of property found in `properties` as true to invoke `detectChanges()`.
 * @memberof ApChangeDetectorClass
 */
public detect(component: Type<T>, property?: string): void
```

### reattach
Reattach component change detector to the change detector tree.

| Parameter | Type      | Default value | Description                                                                                        |
|-----------|-----------|---------------|----------------------------------------------------------------------------------------------------|
| component | Type\<T\> | -             | Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `reattach()`.      |


```typescript
/**
 * Reattach component change detector to the change detector tree.
 * @param {Type<T>} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `reattach()`.
 * @memberof ApChangeDetectorClass
 */
public reattach(component: Type<T>): void
```

### find
Private method invoked in constructor, once. Search for change detector instance in specified component and return its key.

| Parameter | Type      | Default value | Description                           |
|-----------|-----------|---------------|---------------------------------------|
| component | Type\<T\> | -             | To find `ChangeDetectorRef` instance. |

```typescript
/**
 * Search for change detector instance in specified component and return its key.
 * @private
 * @param {Type<T>} component To find `ChangeDetectorRef` instance.
 * @returns {string}
 * @memberof ApChangeDetectorClass
 */
private find(component: Type<T>): string
```

## Usage


## Scripts

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to just created folder:

```bash
cd angular-package/packages/change-detection
```

To build a clean package, means before that script removes node_modules, dist folder and install dependencies:

```bash
npm run clean:start
```

To build a package:

```bash
npm start
```

To run karma tests:

```bash
npm test
```

## GIT

### Commit

- [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)   
- [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

**Given a version number MAJOR.MINOR.PATCH, increment the:**  
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.   

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license](https://github.com/angular-package/angular-package/blob/master/LICENSE))
