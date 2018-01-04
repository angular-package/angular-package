# @angular-package/prism/rxjs

Rxjs Angular 5+ Prism highlighter module.

**Pros(+):**
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Component `changeDetectionStrategy` is set to `OnPush`, It gives better overall __performance__. 
* Dynamically change highlight string with `code` input property.
* Interpolate string to highlight with `interpolation` object.
* `@angular-package/reactive/decorator` with `rxjs/Subject` to Subscribe to `code` and `language` property changes.

**Cons(-):**
* Hooks are defined globally.
* No demonstration.


----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [PrismComponent](#prismcomponent)
  * [@Input](#input)
  * [Lifecycle Hooks](#lifecycle-hooks)
* [Scripts](#scripts)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----



## Demonstration

Not available

## Installation

To install, run:

```bash
npm install @angular-package/prism --save
```

Add peer dependencies:
```bash
npm i --save @types/prismjs@1.9.0 prismjs@1.9.0
```

## Usage

**Step 1.** Import `ApPrismRxjsModule` into your module.

```typescript
// example.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApPrismRxjsModule } from '@angular-package/prism/rxjs'; // <--- Here
import { ExampleComponent } from './example.component';

@NgModule({
  declarations: [ ExampleComponent ],
  imports: [ CommonModule, ApPrismRxjsModule ], // <--- here
  exports: [ ExampleComponent ]
})
export class ExampleModule { }
```

**Step 2.** Use prism component with `ng-content`:

```typescript
// example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `
    <ngx-prism [language]="language">
      {{content}}
    </ngx-prism>
  `
})
export class ExampleComponent {
  language = 'html';
  content = '<p>test</p>';
  constructor() { }
}
```

or use `PrismComponent` by providing `code` and `interpolation` property in `ExampleComponent`.

```typescript
// example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `
    <ngx-prism
      [language] = "language"
      [hooks] = "hooks"
      [code] = "content"
      [interpolation] = "interpolate"
    ></ngx-prism>`
})
export class ExampleComponent {
  content = '<p>test {{language}}</p>';
  hooks = {
    'before-sanity-check': (env) => { console.log(`before-sanity-check`, env); },
    'before-highlight': (env) => { console.log(`before-highlight`, env); },
    'after-highlight': (env) => { console.log(`after-highlight`, env); },
    'complete': (env) => { console.log(`complete`, env); },
    'before-insert': (env) => { console.log(`before-insert`, env); }
  };
  interpolate = {
    language: 'language interpolated'
  };
  language = 'html';
  constructor() { }
}
```

**Step 3.** Import `prismjs` theme files in `@angular/cli` like below.

```css
@import '~prismjs/themes/prism-coy.css';
@import '~prismjs/themes/prism-dark.css';
@import '~prismjs/themes/prism-funky.css';
@import '~prismjs/themes/prism-okaidia.css';
@import '~prismjs/themes/prism-solarizedlight.css';
@import '~prismjs/themes/prism-tomorrow.css';
@import '~prismjs/themes/prism-twilight.css';
@import '~prismjs/themes/prism.css';
```


## PrismComponent

It is designed to use `ng-content` and property `code` separately. You can **NOT** use both the same time.

### @Input

| name | Type | Description |
|----------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| async | boolean | Works only with `ng-content`. *"Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code."* - prismjs |
| callback | (element: Element) => void \| undefined = undefined | *"An optional callback to be invoked after the highlighting is done. Mostly useful when async is true, since in that case, the highlighting is done asynchronously."* - prismjs  |
| code | string | *"A string with the code to be highlighted."* - prismjs |
| **hooks** | Object | Callback with specific execute time and name: `before-sanity-check`, `before-highlight`, `after-highlight`, `complete`, `before-insert`. |
| **interpolation** | Object \| undefined | Data property values to inject.  |
| language | string | *"Valid language identifier, for example 'javascript', 'css'."* - prismjs |


### Lifecycle Hooks

[Angular Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)

**ngAfterViewInit()**    
Performs `highlightElement(element, async, callback)` prismjs method.

**ngOnChanges()**    
Detect input property `code` or `language` changes by comparing `currentValue` to `previousValue`.    
If yes, set component property `change` to `true`.    

**ngOnDestroy()**   
Unsubscribe Rxjs.Subject subscription in Object property `subscription.code` and `subscription.language`.

**ngOnInit()**   
Initiate subscribes to property `code` and `language` with `@angular-package/reactive/decorator/subscribe` decorator `Subscribe()`.

## Scripts

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to just created folder:

```bash
cd angular-package/packages/prism
```

To build a clean package, means before that script removes node_modules, dist folder and install dependencies:

```bash
npm run clean:start
```

To build a package:

```bash
npm start
```

To run karma tests on both `core` and `rxjs` package:

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

MIT © angular-package

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)