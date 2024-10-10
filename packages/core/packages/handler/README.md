# @angular-package/core/handler

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Services to handle [HTMLElement][401] [attributes][402] and [class][407] method arguments.

```typescript
import {
  ArgumentHandlerClass,
  AttributeHandlerService,
  ClassHandlerService
} from '@angular-package/core/handler';
```

---

* [Demo](#demo)
* [Installation](#installation)
* [ChangeLog](#changelog)
* [Structure](#structure)
* [Style guide](#style-guide)
* [Git](#git)
* [License](#license)
* [Donate](#donate)

---

| Feature | Description | Status | Readme |
|---------|-------------|--------|--------|
| `ArgumentHandlerClass` | Method argument handle. | **Ready** | [Readme][0] |
| `AttributeHandlerService` | General [HTMLElement][401] [attribute][402] handle. | **Ready** | [Readme][1] |
| `ClassHandlerService` | [HTMLElement][401] [class][407] [attribute][402] handle. | **Ready** | [Readme][2] |

---

## Demo

### Live

[Live demonstration](http://angular-package.wwwdev.io/core/handler)

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

## Installation

```bash
npm i @angular-package/core@latest --save
```

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

[0]: https://github.com/angular-package/angular-package/tree/master/packages/core/handler/ArgumentHandlerClass.md
[1]: https://github.com/angular-package/angular-package/tree/master/packages/core/handler/AttributeHandlerService.md
[2]: https://github.com/angular-package/angular-package/tree/master/packages/core/handler/ClassHandlerService.md

[10]: https://github.com/angular-package/angular-package/tree/master/packages/core/handler/CHANGELOG.md

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