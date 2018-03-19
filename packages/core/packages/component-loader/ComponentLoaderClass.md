# ComponentLoaderClass

Class to make dynamic component handle easier.

```typescript
import { ComponentLoaderClass } from '@angular-package/core/component-loader';
```

**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Easy way to create and destroy specified component.
* `assign` method to set specific property value from source component to dynamic component.
* `set` method to set specific property value in dynamic component or `get` to get property value from dynamic component.
* `connect` method to make properties from source component connected with dynamic component.
* Everything is well tested with jasmine.

**Cons(-):**

It seems to haven't any.

**Important!**
* Default component container is set to `#container`, but it can be overwrited with `ViewChild` to `container` property.
* `__componentPropertyName` - name of property where dynamic component will be placed.

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

### Demonstration


### Installation

```bash
npm i @angular-package/core@latest --save
```

### Properties


 Properties             | Default value                      | Description                                    |
------------------------|------------------------------------|------------------------------------------------|
__component             | this[this.__componentPropertyName] | Place where dynamic component will be created. |
__componentPropertyName | '__componentRef'                   | Name of the place where dynamic component will be created. |
__prefix                | '_'                                | Prefix to create property that will be wrapped. It is used only in `__connect` method. |
__properties            | []                                 | Name of properties from source component that will be connected with dynamic component.  |
__suffix                | ''                                 | Suffix to create property that will be wrapped. It is used only in `__connect` method. |
container               | #container                         | `@ViewChild()` container where created component will be applied. |


### Methods

Assign values of property or list of properties from source component to dynamic component instance.

Property | Type             | Default value     | Description               |
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

Create in html `#container` resolved component.

Property  | Type             | Description |
----------|------------------|-------------|
component | ComponentType\<T\> | Component that will be created. |

```typescript
/**
 * Create in html `#container` resolved component.
 * @param {ComponentType<T>} component Component that will be created.
 * @returns {this}
 * @memberof ComponentLoaderClass
 */
__create(component: ComponentType<T>): this
```

Destroy component.

```typescript
/**
 * Destroy component.
 * @returns {null}
 * @memberof ComponentLoaderClass
 */
__destroy(): null
```

Get specified property value from dynamic component instance.

Property  | Type   | Description |
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

Property | Type             | Default value     | Description               |
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

Property  | Type   | Description |
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

### Usage

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

**Step 3.** Add component that will be dynamically handled.

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
  identify = {};
  surname;

  @Output() event: EventEmitter<any> = new EventEmitter();

  emit() {
    this.event.emit('event');
  }
}

```

**Step 4.** Add component that will handle `DynamicComponent`.
```typescript
// default.component.ts
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ComponentLoaderClass } from '@angular-package/core/component-loader';

import { DynamicComponent } from './dynamic-component';

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
    <div #container></div>
  ` // <----- create #container variable in template.
})
export
  class DefaultComponent
  extends ComponentLoaderClass<DynamicComponent> // <--- extend with ComponenLoaderClass<T>.
  implements OnInit {

  age = 27;
  firstname = 'Martin';
  surname = 'Ikar';
  identify = {
    age: this.age,
    firstname: this.firstname
  };

  constructor(c: ComponentFactoryResolver) { // <----- inject componentFactoryResolver.
    super(c);
  }

  ngOnInit() {
    this.__create(DynamicComponent);
    this.__connect(['surname', 'identify']);

    this.identify = {
      age: 37,
      firstname: 'No firstname'
    };
    this.identify.age = 34;
    this.surname = 'Surname is connected properly.';

    this.__assign(['age', 'firstname'], this);
    this.__set('identify', this.identify);

    setTimeout(() => {
      this.__destroy();
    }, 5000);
  }
}
```

**Step 5.** Add `DynamicComponent` and `DefaultComponent` to `AppModule`.
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

