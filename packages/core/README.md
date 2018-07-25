# @angular-package/core

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)

Some features used in other **angular-package** libraries.

```typescript
import '@angular-package/core';
```

* Treeshake bundle with **[Rollup][424]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.

*Please, give feedback about found any pros and especially cons.*

----

* [Packages](#packages)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Packages

| Name | Description | Status | |
|---------|-------------|--------|--------|
| component-loader | To make handle [dynamic component loader][438] easier. | **Ready** | [\>\>][0] |
| handler | Services to handle [HTMLElement][433] [attributes][437]. | *Beta* | [\>\>][1] |
| property | Bind or wrap indicated [component][443] properties with specific target. | *Beta* | [\>\>][2] |
| store | Stores target [setters][439]/[getters][440] and [cycle-hooks][441]. | **Ready**  | [\>\>][3] |
| testing | Wrapper class to control the execution of [jasmine][442] spec, automatize some its features to help reduce code to write, or maybe even simplify writing some simple spec. | *Beta*  | [\>\>][4] |

## Style guide

* [Angular style guide][427]
* [Angular 5 TSLint configuration (best practices)][428]
* [Angular v5 Snippets][429]
* [Angular 6 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout][430]

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][425]
* [Karma Git Commit Msg](426)

### Versioning

[Semantic Versioning 2.0.0][431]

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
[437]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[438]: https://angular.io/guide/dynamic-component-loader
[439]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[440]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[441]: https://angular.io/guide/lifecycle-hooks
[442]: https://jasmine.github.io/2.0/introduction
[443]: https://angular.io/api/core/Component