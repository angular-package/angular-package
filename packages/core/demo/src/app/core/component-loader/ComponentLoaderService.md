# ComponentLoaderService

Service to make dynamic component handle easier.

```typescript
import { ComponentLoaderService } from '@angular-package/core/component-loader';
```

**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* It extends `ComponentLoaderCommonAClass`, so it has got the same features with some differents like `assign`, `get`, `link`, `set`, `subscribe`.
* Implementation of **create** and **destroy** based on [**article**](https://medium.com/@caroso1222/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6) by [**Carlos Roso**](https://medium.com/@caroso1222).

**Cons(-):**

It seems to haven't any.

**Important!**
* Add `ComponentLoaderService` to component providers.

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

## Properties

 Properties             | Default value                      | Description                                    |
------------------------|------------------------------------|------------------------------------------------|
__component             | this[this.__componentPropertyName] | Place where dynamic component will be created. |
__componentPropertyName | '__componentRef'                   | Name of the place where dynamic component will be created. |
__prefix                | '_'                                | Prefix to create property that will be wrapped. It is used only in `__link` method. |
__properties            | []                                 | Name of properties from source component that will be connected with dynamic component.  |
__suffix                | ''                                 | Suffix to create property that will be wrapped. It is used only in `__link` method. |

## Methods

Append HTMLElement of dynamic component to specified container.

Argument  | Type             | Default value     | Description               |
----------|------------------|-------------------|---------------------------|
container | string           |                   | Name of place for querySelector that dynamic component will be placed. |

```typescript
/**
 * Append HTMLElement of dynamic component to specified container.
 * @param {string} container Name of place for querySelector that dynamic component will be placed.
 * @returns {this}
 * @memberof ComponentLoaderService
 */
appendChild(container: string): this
```

Attach dynamic component view.

```typescript
/**
 * Attach dynamic component view.
 * @returns {this}
 * @memberof ComponentLoaderService
 */
attachView(): this
```

Detach dynamic component view.

```typescript
/**
 * Detach dynamic component view.
 * @returns {this}
 * @memberof ComponentLoaderService
 */
detachView(): this
```

Create, attach and append in one method.

```typescript
/**
 * @template S
 * @param {ComponentLoaderConfigInterface<T>} config
 * @param {S} [source] Component which its properties are linked to dynamic component.
 * @returns {this}
 * @memberof ComponentLoaderService
 */
init<S>(config: ComponentLoaderConfigInterface<T>, source?: S): this
```

Assign values of property or list of properties from source component to dynamic component instance.

Argument | Type             | Default value     | Description               |
---------|------------------|-------------------|---------------------------|
p        | string\|string[] | this.__properties | Properties that values will be set from source component to dynamic component. |
source   | S                |                   | Source component means component which properties values will be assigned to dynamic component. |

```typescript
/**
 * Assign values of property or list of properties from source component to dynamic component instance.
 * @template PT Property type.
 * @template S Source component type.
 * @param {(string | string[])} [p=this.__properties] Property that values will be set from source component to dynamic component.
 * @param {S} source Component which properties values will be assigned to dynamic component.
 * @memberof ComponentLoaderCommonAClass
 */
__assign<PT, S>(p: string | string[] = this.__properties, source: S): void;
```

Create resolved component.

Argument  | Type             | Description |
----------|------------------|-------------|
component | ComponentType\<T\> | Component that will be created. |

```typescript
/**
 * Create resolved component.
 * @template D Type of dynamic component.
 * @param {Type<D>} component Dynamic component to create.
 * @returns {this}
 * @memberof ComponentLoaderService
 */
__create<D = T>(component: Type<D>): this
```

Detach view and destroy dynamic component.

```typescript
/**
 * Destroy component.
 * @returns {undefined}
 * @memberof ComponentLoaderClass
 */
__destroy(): undefined
```

Get specified property value from dynamic component instance.

Argument  | Type   | Description |
----------|--------|-------------|
property  | string | Name of property that will be get from dynamic component instance. |


```typescript
/**
 * Get specified property value from dynamic component instance.
 * @template T Property type.
 * @param {string} property Name of property that will be get from instance.
 * @returns {(T | undefined)} Return value with specified type or undefined.
 * @memberof ComponentLoaderCommonAClass
 */
__get<T>(property: string): T | undefined
```

Link source(extended) component properties with dynamic component instance by using setters and getters.

Argument | Type             | Default value     | Description               |
---------|------------------|-------------------|---------------------------|
p        | string\|string[] | this.__properties | Properties to be connected from source component to dynamic component. |


```typescript
/**
 * Link source(extended) component properties with dynamic component instance by using setters and getters.
 * @param {string[]} [p=this.__properties] Properties to be linked in source component with dynamic component.
 * @memberof ComponentLoaderClass
 */
__link(p: string[] = this.__properties): void
```

Set specified property value to dynamic component instance.

Argument  | Type   | Description |
----------|--------|-------------|
property  | string | Name of property that will be set to dynamic component instance. |
value     | V | Value of property that will be set to dynamic component instance. |


```typescript
/**
 * Set specified property value to dynamic component instance.
 * @template V Property type.
 * @param {string} property Name of property that will be set to dynamic component instance.
 * @param {V} value Value of property that will be set to dynamic component instance.
 * @memberof ComponentLoaderCommonAClass
 */
public __set<V>(property: string, value: V): void
```


Subscribe to specified property of dynamic component instance.

Argument | Type   | Description |
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
    this.componentLoaderService.init({
      component: DynamicComponent,
      componentPropertyName: '_component__',
      container: '.container',
      properties: [ 'age', 'surname' ]
    }, this);

    this.identify = {
      age: 37,
      firstname: 'No firstname'
    };
    this.identify.age = 34;
    this.surname = 'Surname is connected properly.';

    this.componentLoaderService.__assign(['age', 'firstname'], this);
    this.componentLoaderService.__set('identify', this.identify);
    console.log(this);
  }

  destroy() {
    this.componentLoaderService.__destroy();
    console.log(this);
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

To build a clean package, means before that script removes node_modules, dist folder and install dependencies:

```bash
npm run clean:start
```

To build a package:

```bash
npm start
```

To clean all dist folders:
```bash
npm run clean:all
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

