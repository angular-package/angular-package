# @angular-package/core/property

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Bind or wrap indicated source [component][443] [properties][445] with specific target.

```typescript
import { BindProperty, PropertyClass } from '@angular-package/core/property';
```

**Pros(+):**

* Treeshake bundle with **[Rollup][424]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* It uses `@angular-package/core/store` to store [setter][439]/[getter][440] and cycle hooks.
* Simple bind [component][443] [property][445] e.g. to [service][444] [property][445].
* Wrap [component][443] [property][445] with specific functionality. e.g. to [service][444] [property][445].
* Remove wrap/bind from [property][445].
* Decorator to easy handle its features.
* Tested with [jasmine][442].

**Cons(-):**
* 

*Please, give feedback about found any pros and especially cons.*

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Organization](#organization)
* [Style guide](#style-guide)
* [Git](#git)
* [License](#license)
* [Donate](#donate)

----

## Demonstration



## Installation

```bash
npm i @angular-package/core@latest --save
```

## Usage

```typescript

```

## Organization

Folders and files [organization][426].

## Style guide

Coded by including style guides - [click][427].

## GIT

Git commit conventions and versioning described [here][425].

## License

MIT © angular-package ([license][432])

## Donate

Package is under [MIT License][432]. Feel invited to help to maintain it with your programming skills, you can also [donate by Donorbox][27] or by paypal. Thank you.

[![donate](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)][127]

[0]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader#readme
[1]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/handler#readme
[2]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/property#readme
[3]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/store#readme
[4]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/testing#readme

[27]: https://donorbox.org/help-creating-open-source-software
[127]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

[424]: https://rollupjs.org/#introduction

[425]: https://github.com/angular-package/angular-package/blob/master/GIT.md
[426]: https://github.com/angular-package/angular-package/blob/master/ORGANIZATION.md
[427]: https://github.com/angular-package/angular-package/blob/master/STYLE-GUIDE.md

[432]: https://github.com/angular-package/angular-package/blob/master/LICENSE
[433]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[434]: https://angular.io/api/core/ChangeDetectorRef
[435]: https://angular.io/api/core/testing/TestModuleMetadata
[436]: https://angular.io/api/core/Type
[437]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[438]: https://angular.io/guide/dynamic-component-loader
[439]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[440]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[441]: https://angular.io/guide/lifecycle-hooks
[442]: https://jasmine.github.io/2.0/introduction
[443]: https://angular.io/api/core/Component
[444]: https://angular.io/tutorial/toh-pt4
[445]: https://www.w3schools.com/js/js_object_properties.asp