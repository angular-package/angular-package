# @angular-package/prism/core

[![npm version](https://badge.fury.io/js/%40angular-package%2Fprism.svg)](https://badge.fury.io/js/%40angular-package%2Fprism)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Core Angular 5+ Prism highlighter module.

```typescript
import { ApPrismModule } from '@angular-package/prism/core';
```

## Table of contents

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Inputs](#inputs)
* [Usage](#usage)
* [Scripts](#scripts)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

### Pros(+)

* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Added [@angular-package/change-detection](https://github.com/angular-package/angular-package/tree/master/packages/change-detection) feature with all its **pros** and **cons**.
* Dynamically changes highlight string with `code` input property.
* It uses prismjs `highlightElement(element, async, callback)` to higlight, so `async` and `hooks` internal prism features can be used.
* Interpolates string to highlight with `interpolation` object.
* Performs highlight depending on whether property change detection is active or unactive.
* `@angular/cli` usage [**demonstration**](https://github.com/angular-package/angular-package/tree/master/packages/prism/demo) inside repository.
* No known vulnerabilities found by [**snyk.io**](https://snyk.io/test/npm/@angular-package/prism).

### Cons(-)

* Globally defined hooks.
* Cannot use both `ng-content` and property `code` the same time.

### Important

* By default all properties are sensitive to detection.
* Instead of using `ngOnChanges` angular cycle hook, now, it base only on **setters** and **getters**.
* It is designed to use `ng-content` and property `code` separately. You should **NOT** use both the same time.
* In `@angular/cli` add `--aot` to `ng serve` in scripts to have script `"start": "ng serve --aot"`.
* Component selector has changed from `ngx-prism` to `ap-prism`.

---

## Demonstration

[Live demonstration](http://angular-package.wwwdev.io/prism)

Clone this repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to **packages/prism/demo** folder and in command line write the following:

```bash
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

## Installation

First, install `@angular-package/prism` package with command:

```bash
npm i --save @angular-package/prism
```

Add peer dependencies:

```bash
npm i --save
  @angular-package/change-detection@1.0.0
  @angular-package/core@1.0.1
  @angular-package/reactive@2.0.1-beta
  @types/prismjs@1.9.0
  prismjs@1.14.0

```

## Inputs parameters

| Name | Type | Description |
|----------|---------------|--|
| async | boolean = false | *"Whether to use Web Workers to improve performance and avoid blocking the UI when highlighting very large chunks of code."* - prismjs |
| attribute | [ApPrismTemplate][6]\<[ApHTMLElementAttributes][7]\<string\>\> | To add or remove the specified list of attributes with `string` value to `pre`, `code` [HTMLElement][433].  |
| callback? | [CallbackType][5] | *"An optional callback to be invoked after the highlighting is done. Mostly useful when async is true, since in that case, the highlighting is done asynchronously."* - prismjs  |
| class | [ApPrismTemplate][6]\<string\> | To add or remove the specified list of class to `pre`, `code` [HTMLElement][433].  |
| code? | string | *"A string with the code to be highlighted."* - prismjs |
| detection | boolean = false | Whether detection is on(true) or off(false). |
| **hooks?** | Object | Callback with specific execute time and name: `before-sanity-check`, `before-highlight`, `after-highlight`, `complete`, `before-insert`. |
| **interpolation?** | Object | Data property values to inject.  |
| language? | string | *"Valid language identifier, for example 'javascript', 'css'."* - prismjs |
| properties? | [ApChangeDetectionProperties][4] | Properties provided with `index` as name and value `true` will be sensitive for changes. |

## Usage

**Step 1.** Import `ApPrismModule` into your module:

```typescript
// example.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApPrismModule } from '@angular-package/prism'; // <----- Here
import { ExampleComponent } from './example.component'; // your component

@NgModule({
  declarations: [ ExampleComponent ],
  imports: [
    CommonModule,
    ApPrismModule // <----- Here
  ],
  exports: [ ExampleComponent ]
})
export class ExampleModule { }
```

**Step 2.** Use `<ap-prism></ap-prism>` tag with content inside and specify its content with property `[language]` to highlight it:

```typescript
// example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `
    <ap-prism [language]="language">
      {{content}}
    </ap-prism>
  `
})
export class ExampleComponent {
  language = 'html';
  content = '<p>test</p>';
  constructor() { }
}
```

or use `<ap-prism></ap-prism>` tag with `[code]` and `[interpolation]` attribute like in `ExampleComponent` below:

```typescript
// example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'example-component',
  template: `
    <ap-prism
      [language] = "language"
      [hooks] = "hooks"
      [code] = "content"
      [interpolation] = "interpolate"
    ></ap-prism>`
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

**Step 3.** Import themes files in `@angular/cli`:

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

## Style guide

* [Angular style guide][0]
* [Angular 5 TSLint configuration (best practices)][1]
* [Angular v5 Snippets][2]
* [Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout][3]

## Scripts

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to just created folder:

```bash
cd angular-package/packages/prism
```

To build a clean package, that means script before build removes `./coverage` `./index.*` `./bundle.umd.*` `./core` `./rxjs` `./node_modules`:

```bash
npm run clean:start
```

To build a package:

```bash
npm start
```

To clean all build directories `./coverage` `./index.*` `./bundle.umd.*` `./core` `./rxjs` `./node_modules`:

```bash
npm run clean:all
```

To run **tslint** check:

```bash
npm run tslint
```

To run karma **tests**:

```bash
npm test
```

## GIT

### Commit

* [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
* [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

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

MIT © angular-package ([license][432])

## Donate

[Click to donate][27]

[0]: https://angular.io/docs/ts/latest/guide/style-guide.html
[1]: https://gist.github.com/stas-kh/2fc80c11c6db0fc4c64354400e29a2b8
[2]: https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
[3]: https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
[4]: https://github.com/angular-package/angular-package/blob/master/packages/change-detection/packages/interface/src/properties.interface.ts
[5]: https://github.com/angular-package/angular-package/tree/master/packages/prism/packages/core
[6]: https://github.com/angular-package/angular-package/tree/master/packages/prism/packages/core
[7]: https://github.com/angular-package/angular-package/tree/master/packages/prism/packages/core
[27]: https://donorbox.org/help-creating-open-source-software
[432]: https://github.com/angular-package/angular-package/blob/master/LICENSE
[433]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[434]: https://angular.io/api/core/ChangeDetectorRef