# @angular-package/core/component-loader

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Makes handle [dynamic component loader][506] easier.

```typescript
import {
  ComponentLoader,
  ComponentLoaderClass,
  ComponentLoaderService
} from '@angular-package/core/component-loader';
```

---

* Treeshake bundle with **[Rollup][400]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Possible to test each package separately with npm command e.g. `npm run test:property`, `npm run test:testing`.
* All notable changes to this package are documented in [**CHANGELOG.md**][10].
* Organized folders and files [**structure**][301].

*Please, give feedback about found any pros and especially cons.*

---

## Features

| Feature | Description | Status | Readme |
|---------|-------------|--------|--------|
| `ComponentLoader` | Decorator to wrap `ComponentLoaderService` methods and to connect properties to dynamic component. | **Ready** | [Readme][0]  |
| `ComponentLoaderClass` | Makes handle dynamic component easier. | **Ready**  | [Readme][1]  |
| `ComponentLoaderService` | Service to easy handle dynamic component. | **Ready**  | [Readme][2]  |

[0]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader/ComponentLoader.md
[1]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader/ComponentLoaderClass.md
[2]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader/ComponentLoaderService.md

---

## Demo

### Live

[Live demonstration](http://angular-package.wwwdev.io/core/component-loader)

### Inside repository

Clone this repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to demo folder:

```bash
cd packages/core/demo
```

Install and run:

```bash
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

## ChangeLog

* Guiding principles based on [Keep a Changelog][304]
* All notable changes to this package are documented in [**CHANGELOG.md**][10].

## Structure

Folders and files [structure][301] organization.

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
[10]: https://github.com/angular-package/angular-package/blob/master/packages/core/packages/component-loader/CHANGELOG.md

[27]: https://donorbox.org/help-creating-open-source-software
[127]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

<!-- 
[424]: https://rollupjs.org/#introduction
[425]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[426]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[427]: https://angular.io/docs/ts/latest/guide/style-guide.html
[428]: https://gist.github.com/stas-kh/2fc80c11c6db0fc4c64354400e29a2b8
[429]: https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
[430]: https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2
[431]: http://semver.org/
[432]: https://github.com/angular-package/angular-package/blob/master/LICENSE
[433]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[434]: https://angular.io/api/core/ChangeDetectorRef
[435]: https://angular.io/api/core/testing/TestModuleMetadata
[436]: https://angular.io/api/core/Type

<!--- General -->
[100]: https://donorbox.org/help-creating-open-source-software
[101]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

<!--- @angular-package -->
[300]: https://github.com/angular-package/angular-package/blob/master/GIT.md
[301]: https://github.com/angular-package/angular-package/blob/master/ORGANIZATION.md
[302]: https://github.com/angular-package/angular-package/blob/master/STYLE-GUIDE.md
[303]: https://github.com/angular-package/angular-package/blob/master/LICENSE
[304]: https://github.com/angular-package/angular-package/blob/master/MAKECHANGELOG.md

<!--- Other -->
[400]: https://rollupjs.org/#introduction
[401]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[402]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[403]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[404]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[405]: https://jasmine.github.io/2.0/introduction
[406]: https://www.w3schools.com/js/js_object_properties.asp
[407]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[408]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

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