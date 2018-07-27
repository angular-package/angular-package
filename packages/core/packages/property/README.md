# @angular-package/core/property

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Bind or wrap indicated source [component][501] [properties][406] with specific target.

```typescript
import { BindProperty, PropertyClass } from '@angular-package/core/property';
```

```typescript
new PropertyClass(
  prefix?: string,  // New property prefix name.
  suffix?: string   // New property suffix name.
);
```

 Parameter | Type | Description
-----------|------|-------------
 prefix? | string | New property **prefix** name e.g. `_` then `_name`.
 suffix? | string | New property **suffix** name e.g. `_` then `name_`.

**Pros(+):**

* Treeshake bundle with **[Rollup][400]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* It uses `PrefixSuffixClass`.
* It uses `@angular-package/core/store` to store [setter][403]/[getter][404] and cycle hooks.
* Simple bind [component][501] [property][406] e.g. to [service][502] [property][406].
* Wrap [component][501] [property][406] with specific functionality. e.g. to [service][502] [property][406].
* Remove wrap/bind from [property][406].
* [Decorator][500] [@BindProperty()][5] to easy handle its features.
* Tested with [`@angular-package/core/testing`][4].

**Cons(-):**

* Methods `bind()`, `clear()`, `wrap` have "try catch" hack because of unrecognized error.

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

Folders and files [organization][301].

## Style guide

Coding with included [style guides][302].

## GIT

Git commit conventions and versioning described [here][300].

## License

MIT © angular-package ([license][303])

## Donate

Package is under [MIT License][303]. Feel invited to help to maintain it with your programming skills, you can also [donate by Donorbox][100] or by [paypal][101].

**Why donate ?**
**wwwdev.io** organization is non-profit, has a volunteer board, no employees or any paid person. Its goal is to work on **javascript/typescript** software, especially dedicated to [angular.io][508] framework and to help open-source software grow by using [MIT License][303] which allows it to be used comercially. So, it is hope you consider supporting our efforts.

[![donate](https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif)][101]

<!--- This package -->
[0]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader#readme
[1]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/handler#readme
[2]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/property#readme
[3]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/store#readme
[4]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/testing#readme
[5]: https://github.com/angular-package/angular-package/tree/core/packages/core/packages/property/bind

<!--- General -->
[100]: https://donorbox.org/help-creating-open-source-software
[101]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

<!--- @angular-package -->
[300]: https://github.com/angular-package/angular-package/blob/master/GIT.md
[301]: https://github.com/angular-package/angular-package/blob/master/ORGANIZATION.md
[302]: https://github.com/angular-package/angular-package/blob/master/STYLE-GUIDE.md
[303]: https://github.com/angular-package/angular-package/blob/master/LICENSE

<!--- Other -->
[400]: https://rollupjs.org/#introduction
[401]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[402]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[403]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[404]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[405]: https://jasmine.github.io/2.0/introduction
[406]: https://www.w3schools.com/js/js_object_properties.asp

<!--- @angular -->
[500]: https://angular-2-training-book.rangle.io/v/v2.3/handout/features/decorators.html
[501]: https://angular.io/api/core/Component
[502]: https://angular.io/tutorial/toh-pt4
[503]: https://angular.io/api/core/ChangeDetectorRef
[504]: https://angular.io/api/core/testing/TestModuleMetadata
[505]: https://angular.io/api/core/Type
[506]: https://angular.io/guide/dynamic-component-loader
[507]: https://angular.io/guide/lifecycle-hooks
[508]: https://angular.io/