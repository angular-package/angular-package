# ComponentLoader

Decorator to help handle `ComponentLoaderService` easier.

```typescript
import { ComponentLoader } from '@angular-package/core/component-loader';
```

```typescript
@ComponentLoader<T>(config: ComponentLoaderConfigInterface)
```


**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Handle `ComponentLoaderService` by creating component internal methods and properties linked to service.
* Automatically link indicated properties.
* Define container by querySelector.
* Change component property name.
* Tested with jasmine.

**Cons(-):**
* Need to inject `ComponentLoaderService` in constructor to use decorator with specific name `componentLoaderService`.
* There is no interface implementation for added method and properties in component.

**Important!**
* Add `ComponentLoaderService` to component `providers`.

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Config](#config)
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

<!--
[Live demonstration](http://angular-package.wwwdev.io/core/component-loader)
-->

Demo available inside repository.

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to core package with example demo:
```bash
cd angular-package/packages/core/packages/component-loader/demo
```

Install dependencies and start:
```bash
npm i && npm start
```

## Installation

```bash
npm i @angular-package/core@latest --save
```

Install peer dependencies:

```bash
npm i lodash-es@4.17.7 --save
```

## Config

```typescript
interface ComponentLoaderConfigInterface<T> {
  component: Type<T>;
  componentPropertyName?: string;
  container: string;
  properties?: string[];
  prefix?: string;
  suffix?: string;
}
```

Properties            | Type     | Default value    | Description                           |
----------------------|----------|---------|------------------------------------------------|
component?            | Type<T>  |         | Place where dynamic component will be created. |
componentPropertyName | string   | '__componentRef' | Name of the place where dynamic component will be created. |
prefix?               | string   | '_'              | Prefix to create property that will be wrapped. It is used only in `__link` method. |
properties?           | string[] | []               | Name of properties from source component that will be connected with dynamic component. |
suffix?               | string   | ''               | Suffix to create property that will be wrapped. It is used only in `__link` method. |


## Properties

 Properties             | Wrapping | Default value                          | Description                                    |
------------------------|----------|----------------------------------------|------------------------------------------------|
__component             | componentLoaderService. __component           | | Place where dynamic component will be created. |
__componentPropertyName | componentLoaderService. componentPropertyName | '__componentRef' | Name of the place where dynamic component will be created. |
__prefix                | componentLoaderService. prefix                | '_' | Prefix to create property that will be wrapped. It is used only in `__link` method. |
__properties            | componentLoaderService. properties            | [] | Name of properties from source component that will be connected with dynamic component.  |
__suffix                | componentLoaderService. suffix                | '' | Suffix to create property that will be wrapped. It is used only in `__link` method. |

## Methods

Assign values of property or list of properties from source component to dynamic component instance.

Property | Type             | Default value     | Description               |
---------|------------------|-------------------|---------------------------|
p        | string\|string[] | this.__properties | Properties that values will be set from source component to dynamic component. |
source   | S                |                   | Source component means component which properties values will be assigned to dynamic component. |

```typescript
/**
 * Assign values of property or list of properties from source component to dynamic component instance.
 * @param {(string | string[])} p Property that values will be set from source component to dynamic component.
 * @memberof ComponentLoaderCommonAClass
 */
__assign(p: string | string[]): void;
```

Create resolved component.

Property  | Type             | Description |
----------|------------------|-------------|
component | ComponentType\<T\> | Component that will be created. |

```typescript
/**
 * Create resolved component.
 * @returns {*}
 * @memberof ComponentLoaderClass
 */
__create(): any
```

Destroy component.

```typescript
/**
 * Destroy component.
 * @returns {void}
 * @memberof ComponentLoaderClass
 */
__destroy(): void
```

Get specified property value from dynamic component instance.

Property  | Type   | Description |
----------|--------|-------------|
property  | string | Name of property that will be get from dynamic component instance. |


```typescript
/**
 * Get specified property value from dynamic component instance.
 * @param {string} property Name of property that will be get from instance.
 * @returns {*} Return value.
 * @memberof ComponentLoaderCommonAClass
 */
__get(property: string): any
```

Set specified property value to dynamic component instance.

Property  | Type   | Description |
----------|--------|-------------|
property  | string | Name of property that will be set to dynamic component instance. |
value     | V | Value of property that will be set to dynamic component instance. |


```typescript
/**
 * Set specified property value to dynamic component instance.
 * @param {string} property Name of property that will be set to dynamic component instance.
 * @param {*} value Value of property that will be set to dynamic component instance.
 * @memberof ComponentLoaderCommonAClass
 */
public __set(property: string, value: any): void
```


Subscribe to specified property of dynamic component instance.

Property | Type   | Description |
---------|--------|-------------|
property | string | Property name of dynamic component instance we want to subscribe to. |
...args  | any[]  | Arguments with function with features in order `success`, `error`, `complete` |

```typescript
/**
 * Subscribe to specified property of dynamic component instance.
 * @param {string} property Property name of dynamic component instance.
 * @param {...any[]} args Functions in order success, error, complete.
 * @memberof ComponentLoaderCommonAClass
 */
public __subscribe(property: string, ...args: any[]): void
```

## Usage

Usage example below based on angular-cli **1.6.8** starts from scratch.


**Step 1.** Generate new example project

```bash
ng new demo
```

**Step 2.** Change `tsconfig.json` target from `es5` to `es6`.

```json
{
  "compilerOptions": {
    ...
    "target": "es6",
    ...
  }
}

```

**Step 3.** Add `--aot` to `ng-serve` in `package.json`.
```json
  "scripts": {
    "ng": "ng",
    "start": "ng serve --aot",  // <------------ Here.
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```

**Step 4.** Add component that will be dynamically handled.

```typescript
// dynamic.component.ts
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
    <h3>DynamicComponent</h3>
    age: {{age}}
    <br />
    firstname: {{firstname}}
    <br />
    surname: {{surname}}
    <br />
    identify.age: {{identify?.age}}
    <br />
    identify.firstname: {{identify?.firstname}}
  `
})
export class DynamicComponent {
  @Input() public age;
  @Input() public firstname;
  identify;
  surname;

  @Output() event: EventEmitter<any> = new EventEmitter();

  emit() {
    this.event.emit('event');
  }
}
```

**Step 5.** Add component that will handle `DynamicComponent`.
```typescript
// default.component.ts
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentLoader, ComponentLoaderService } from '@angular-package/core/component-loader';

import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-default-component',
  template: `
    <h3>DefaultComponent</h3>
    age: {{age}}
    <br />
    firstname: {{firstname}}
    <br />
    surname: {{surname}}
    <br />
    identify.age: {{identify?.age}}
    <br />
    identify.firstname: {{identify?.firstname}}
    <br />
    <button (click)="create()">Create</button>
    <button (click)="destroy()">Destroy</button>
    <br />
    <div class="container"></div>
  `,
  providers: [
    ComponentLoaderService
  ]
})
@ComponentLoader<DynamicComponent>({
  component: DynamicComponent,
  componentPropertyName: '__component_',
  container: '.container',
  prefix: '_',
  properties: [ 'age', 'surname' ],
  suffix: '_'
})
export class DefaultComponent implements OnInit {

  age = 27;
  firstname = 'Martin';
  surname = 'Ikar';
  identify = {
    age: this.age,
    firstname: this.firstname
  };

  constructor(public componentLoaderService: ComponentLoaderService<DynamicComponent>) { } // <----- inject ComponentLoaderService.

  ngOnInit() { }

  create() {
    this['__create']();

    this.identify = {
      age: 37,
      firstname: 'No firstname'
    };
    this.identify.age = 34;
    this.surname = 'Surname is connected properly.';

    this['__assign'](['age', 'firstname']);
    this['__set']('identify', this.identify);
  }

  destroy() {
    this['__destroy']();
  }
}

```

**Step 6.** Add `DynamicComponent` and `DefaultComponent` to `AppModule`.
```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DefaultComponent } from './default-component'; // <----- import DefaultComponent.
import { DynamicComponent } from './dynamic-component'; // <----- import DynamicComponent.

@NgModule({
  entryComponents: [
    DynamicComponent // <----- add DynamicComponent to entryComponents to make it possible to dynamically create.
  ],
  declarations: [
    AppComponent,
    DefaultComponent, // <----- add DefaultComponent here.
    DynamicComponent // <----- add DynamicComponent here, too.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**Step 7.** Display `DefaultComponent` in `AppComponent` by using tag.
```html
// app.component.html
<app-default-component></app-default-component>
```

## Scripts

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to just created folder:

```bash
cd angular-package/packages/core
```

To build a clean package, means before that script removes node_modules, build folders/files and install dependencies:

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
