# angular-package

<img align="left" width="100" height="100" src="https://avatars.githubusercontent.com/u/31412194?s=400&u=c9929aa36826318ccac8f7b84516e1ce3af7e21c&v=4" />

The angular-package supports the development process of [angular][angulario]-based applications in varied ways through the thoughtful, reusable, easy-to-use small pieces of code called packages.

[**docs.angular-package.dev**](https://docs.angular-package.dev)

<br>

## Packages

| Package                                                 | Description                                                       | Status |
| :------------------------------------------------------ | :---------------------------------------------------------------- | -----: |
| [callback][callback-github-readme]                      | Manages the callback [`function`][js-function].                   | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme]                    | Improves application performance.                                 | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| **[component-loader][component-loader-github-readme]**  | **Handles dynamic loading components.**                           | [![npm version][component-loader-npm-badge-png]][component-loader-npm-badge] |
| [core][core-github-readme]                              | Core features.                                                    | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]                            | Manages an [`Error`][js-error].                                   | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [name][name-github-readme]                              | The name with prefix and suffix.                                  | [![npm version][name-npm-badge-png]][name-npm-badge] |
| [preferences][preferences-github-readme]                | Preferences, settings, options, configuration and setup in steps. | [![npm version][preferences-npm-badge-png]][preferences-npm-badge] |
| [prism][prism-github-readme]                            | [`Prism`][prism-js] highlighter module.                           | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]                      | Handles object properties.                                        | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [range][range-github-readme]                            | The range between a minimum and maximum.                          | [![npm version][range-npm-badge-png]][range-npm-badge] |
| [reactive][reactive-github-readme]                      | Automatize the process of creating some rxjs features.            | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [storage][storage-github-readme]                        | The storage of data under allowed names.                          | [![npm version][storage-npm-badge-png]][storage-npm-badge] |
| [tag][tag-github-readme]                                | Any tag with optional attributes.                                 | [![npm version][tag-npm-badge-png]][tag-npm-badge] |
| [testing][testing-github-readme]                        | Support for testing other packages.                               | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [text][text-github-readme]                              | Text on the template with replaceable tags.                       | [![npm version][text-npm-badge-png]][text-npm-badge] |
| [type][type-github-readme]                              | Common types, type guards, and type checkers.                     | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]                                  | Configurable user interface.                                      | [![npm version][ui-npm-badge-png]][ui-npm-badge] |
| [wrapper][wrapper-github-readme]                        | Wrap the text with the opening and closing chars.                 | [![npm version][wrapper-npm-badge-png]][wrapper-npm-badge] |

Click on the package name to visit its [GitHub](https://github.com/) page.

<br>

## angular-package/component-loader

Handles dynamic loading components.

[![Gitter][gitter-badge]][gitter-chat]
[![Discord][discord-badge]][discord-channel]
[![Twitter][twitter-badge]][twitter-follow]
<!-- npm badge -->
[![npm version][component-loader-npm-badge-svg]][component-loader-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][component-loader-badge-issues]][component-loader-issues]
[![GitHub forks][component-loader-badge-forks]][component-loader-forks]
[![GitHub stars][component-loader-badge-stars]][component-loader-stars]
[![GitHub license][component-loader-badge-license]][component-loader-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

<br>

## Documentation

For the detailed documentation go to [**https://component-loader.angular-package.dev**](https://component-loader.angular-package.dev)

<br>

## Table of contents

* [Skeleton](#skeleton)
* [Installation](#installation)
* [Changelog](#changelog)
* [Api](#api)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

<br>

## Skeleton

The package was generated by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) `13` version. Copy package to the `packages/component-loader` folder of the [library skeleton][skeleton] then run the commands below.

### Code scaffolding

Run `ng generate component component-name --project component-loader` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project component-loader`.
> Note: Don't forget to add `--project component-loader` or else it will be added to the default project in your `angular.json` file.

### Build

Run `ng build component-loader` to build the package. The build artifacts will be stored in the `dist/component-loader` directory.

### Publishing

After building your library with `ng build component-loader`, go to the dist folder `cd dist/component-loader` and run `npm publish`.

### Running unit tests

Before the test can be performed install `@angular-package/testing` and `@angular-package/type` with command:

```typescript
npm i @angular-package/testing @angular-package/type --no-save
```

Run `ng test component-loader` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/component-loader` package with command:

```bash
npm i @angular-package/component-loader --save
```

<br>

## Api

```typescript
import {
  // Class.
  ComponentLoader,
  ComponentLoaderService,
  // Decorator.
  LoadComponent,
  // Interface.
  LoadComponentConfig
} from '@angular-package/component-loader';
```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/component-loader/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][component-loader-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- Discord -->
[discord-badge]: https://img.shields.io/discord/925168966098386944
[discord-channel]: https://discord.com/channels/925168966098386944/925168966098386948

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- Twitter -->
[twitter-badge]: https://img.shields.io/twitter/url?style=social&label=Follow%20%40angularpackage&url=https%3A%2F%2Ftwitter.com%2Fangularpackage
[twitter-follow]: https://twitter.com/angularpackage

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: component-loader  -->
  <!-- GitHub: badges -->
  [component-loader-badge-issues]: https://img.shields.io/github/issues/angular-package/component-loader
  [component-loader-badge-forks]: https://img.shields.io/github/forks/angular-package/component-loader
  [component-loader-badge-stars]: https://img.shields.io/github/stars/angular-package/component-loader
  [component-loader-badge-license]: https://img.shields.io/github/license/angular-package/component-loader
  <!-- GitHub: badges links -->
  [component-loader-issues]: https://github.com/angular-package/component-loader/issues
  [component-loader-forks]: https://github.com/angular-package/component-loader/network
  [component-loader-license]: https://github.com/angular-package/component-loader/blob/master/LICENSE
  [component-loader-stars]: https://github.com/angular-package/component-loader/stargazers
<!-- This package -->
  [component-loader-github-changelog]: https://github.com/angular-package/component-loader/blob/main/CHANGELOG.md

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-callbackpayload]: https://github.com/angular-package/callback#callbackpayload
  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [component-loader-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [component-loader-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [component-loader-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [component-loader-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [component-loader-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: name -->
  <!-- npm -->
  [name-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fname.svg
  [name-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fname.png
  [name-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fname
  [name-npm-readme]: https://www.npmjs.com/package/@angular-package/name#readme

  <!-- GitHub -->
  [name-github-readme]: https://github.com/angular-package/name#readme

<!-- Package: preferences -->
  <!-- npm -->
  [preferences-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fpreferences.svg
  [preferences-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fpreferences.png
  [preferences-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fpreferences
  [preferences-npm-readme]: https://www.npmjs.com/package/@angular-package/preferences#readme

  <!-- GitHub -->
  [preferences-github-readme]: https://github.com/angular-package/preferences#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: range -->
  <!-- npm -->
  [range-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Frange.svg
  [range-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Frange.png
  [range-npm-badge]: https://badge.fury.io/js/%40angular-package%2Frange
  [range-npm-readme]: https://www.npmjs.com/package/@angular-package/range#readme

  <!-- GitHub -->
  [range-github-readme]: https://github.com/angular-package/range#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: storage -->
  <!-- npm -->
  [storage-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fstorage.svg
  [storage-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fstorage.png
  [storage-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fstorage
  [storage-npm-readme]: https://www.npmjs.com/package/@angular-package/storage#readme

  <!-- GitHub -->
  [storage-github-readme]: https://github.com/angular-package/storage#readme

<!-- Package: tag -->
  <!-- npm -->
  [tag-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftag.svg
  [tag-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftag.png
  [tag-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftag
  [tag-npm-readme]: https://www.npmjs.com/package/@angular-package/tag#readme

  <!-- GitHub -->
  [tag-github-readme]: https://github.com/angular-package/tag#readme

<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: text -->
  <!-- npm -->
  [text-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftext.svg
  [text-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftext.png
  [text-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftext
  [text-npm-readme]: https://www.npmjs.com/package/@angular-package/text#readme

  <!-- GitHub -->
  [text-github-readme]: https://github.com/angular-package/text#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fui.png
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Package: wrapper -->
  <!-- npm -->
  [wrapper-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fwrapper.svg
  [wrapper-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fwrapper.png
  [wrapper-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fwrapper
  [wrapper-npm-readme]: https://www.npmjs.com/package/@angular-package/wrapper#readme

  <!-- GitHub -->
  [wrapper-github-readme]: https://github.com/angular-package/wrapper#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
