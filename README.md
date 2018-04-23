# angular-package

[![GitHub issues](https://img.shields.io/github/issues/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/issues)
[![GitHub stars](https://img.shields.io/github/stars/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/stargazers)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Useful packages written on Angular framework.

#### Available packages

| Package          | Description                                                                              | Status        | Readme      |
|------------------|------------------------------------------------------------------------------------------|---------------|-------------|
| change-detection | Improve application performance.                                                         | [![npm version](https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg)](https://badge.fury.io/js/%40angular-package%2Fchange-detection) | [Readme][0] |
| chart            | Re-usable charts - especially on nvd3.                                                   | Not ready     | [Readme][1] |
| core             | Some core features used in other **angular-package** libraries.                          | [![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore) | [Readme][2] |
| common           |                                                                                          | Not ready     | [Readme][3] |
| docs             | Modules to create documentation with **[MaterialDesign](https://material.angular.io/)**. | [![npm version](https://badge.fury.io/js/%40angular-package%2Fdocs.svg)](https://badge.fury.io/js/%40angular-package%2Fdocs) | [Readme][4] |
| form             | Dynamic forms or html form elements.                                                     | Not started   | [Readme][5] |
| markdown         | Markdown to html using marked a markdown <br/>parser and comiler.                        | Not started   | [Readme][6] |
| prism            | `Prism` highlighter module.                                                              | [![npm version](https://badge.fury.io/js/%40angular-package%2Fprism.svg)](https://badge.fury.io/js/%40angular-package%2Fprism) | [Readme][7] |
| reactive         | Automatize process of creating some **[`rxjs/Rx`](http://reactivex.io/rxjs/)** features. | [![npm version](https://badge.fury.io/js/%40angular-package%2Freactive.svg)](https://badge.fury.io/js/%40angular-package%2Freactive) | [Readme][8] |
| ui               | User interface based on **[MaterialDesign](https://material.angular.io/)**.              | *In Progress* | [Readme][9] |

 [0]: https://github.com/angular-package/angular-package/tree/master/packages/change-detection#readme
 [1]: https://
 [2]: https://github.com/angular-package/angular-package/tree/master/packages/core#readme
 [3]: https://
 [4]: https://github.com/angular-package/angular-package/tree/master/packages/docs#readme
 [5]: https://
 [6]: https://
 [7]: https://github.com/angular-package/angular-package/tree/master/packages/prism#readme
 [8]: https://github.com/angular-package/angular-package/tree/master/packages/reactive#readme
 [9]: https://

## Folder and file structure

Organization of most files that can be found in this repository.

```
 packages/                                          * All packages files are placed here.
 ├──change-detection/                               * Example `@angular-package/change-detection` package.
 |   ├──demo/                                       * Package change-detection demonstration, based mostly on `@angular/cli`.
 |   ├──packages/                                   * Sub-packages of change-detection, it is the same folder like /dist or /build.
 |   |   ├──demo/                                   * Package change-detection demonstration, based mostly on `@angular/cli`.
 |   |   ├──subject/                                * Sub-package subject `@angular-package/change-detection/subject`.
 |   |   |   ├──async/                              * Sub-package subject/async `@angular-package/change-detection/subject/async`.
 |   |   |   |   ├──demo/
 |   |   |   |   ├──src/
 |   |   |   |   ├──test/
 |   |   |   |   └──index.ts
 |   |   |   ├──demo/
 |   |   |   ├──src/
 |   |   |   |   ├──subject-async.component.html
 |   |   |   |   ├──subject-async.component.ts
 |   |   |   |   ├──subject-async.module.ts
 |   |   |   |   └──index.ts                        * Export `ApSubjectAsyncModule`.
 |   |   |   ├──test/
 |   |   |   ├──index.ts
 |   |   |   └──README.md
 |   |   ├──subscribe/                              * Sub-package subscribe `@angular-package/change-detection/subscribe`.
 |   |   |   ├──demo/                               * subscribe sub-package demonstration, based mostly on `@angular/cli`.
 |   |   |   ├──src/                                * Source files for sub-package subscribe.
 |   |   |   ├──test/                               * Test files for sub-package subscribe.
 |   |   |   ├──index.ts                            * Exports importants of subscribe sub-package.
 |   |   |   └──README.md                           * Subscribe sub-package documentation.
 |   |   ├──src/                                    * Primary source `@angular-package/change-detection` folder.
 |   |   └──index.ts                                * Export sub-packages, then you can get all from `@angular-package/change-detection`.
 |   ├──subject/                                    * Rollup compiled folder based on packages/subject.
 |   ├──subscribe/                                  * Rollup compiled folder based on packages/subscribe.
 |   ├──test/                                       * All tests, if we don't want to have in separate folders.
 |   ├──.gitignore                                  * Ignore files in repository.
 |   ├──.npmignore                                  * Ignore files in npm.
 |   ├──.travis.yml                                 * Travis configuration.
 |   ├──bundle.umd.js                               * Rollup bundle.
 |   ├──bundle.umd.js.map                           * Rollup bundle.
 |   ├──index.d.ts
 |   ├──index.js
 |   ├──index.js.map
 |   ├──index.metadata.json
 |   ├──karma.conf.js
 |   ├──LICENSE
 |   ├──package-lock.json
 |   ├──package.json
 |   ├──README.md
 |   ├──rollup.config.js
 |   ├──tsconfig.json
 |   ├──tslint.json
 |   └──yarn.lock
 └──reactive/                                       * Another example package.
```