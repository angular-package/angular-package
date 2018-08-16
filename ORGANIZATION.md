# Folder and file structure

Organization of most files that can be found in this repository.
All packages files are placed in `packages` named folder. Source of each package is located in `src` folder.

- Component file has `.component.ts` in name.
- Service file has `.service.ts` in name.

```javascript
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
 |   ├──test/                                       * All tests, if we don\'t want to have in separate folders.
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