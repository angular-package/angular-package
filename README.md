# angular-package

Useful packages written on Angular framework.

#### Available packages

| Package          | Description                                    | Status      | Readme         |
|------------------|------------------------------------------------|-------------|--------------|
| change-detection | Initially change detection component state to `Detached`<br/> and detect changes on choosed properties on `set`. | **Ready**  |   [Readme][0] |
| chart            | Re-usable charts. Especially on nvd3.          | Not ready.              |   [Readme][1]  |
| core             | Some core features used in other **angular-package** libraries. | **Ready**     |   [Readme][2]  |
| common           |                                                | Not ready    |   [Readme][3]  |
| docs             | Angular 5+ **modules** to create documentation on Angular Material. | *In progress* |   [Readme][4] |
| form             | Create dynamically forms or html form elements.| Not started   |   [Readme][5]  |
| markdown         | Angular 5+ markdown to html using marked a markdown <br/>parser and compiler.  | Not started   |   [Readme][6]  |
| prism            | Simple Angular 5+ Prism highlighter module.    | **Ready**     |   [Readme][7] |
| reactive         | Angular Reactive. | *In progress*   |   [Readme][8] |
| ui               | Angular Package user interface. | *In Progress*  |   [Readme][9] |


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

Most files that can be found in this repository.

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