# @angular-package/reactive

[![npm version](https://badge.fury.io/js/%40angular-package%2Freactive.svg)](https://badge.fury.io/js/%40angular-package%2Freactive)
[![Known Vulnerabilities](https://snyk.io/test/npm/@angular-package/reactive/badge.svg)](https://snyk.io/test/npm/@angular-package/reactive)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Packages that works with rxjs.

* **Treeshake** bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.

#### Available reactive packages

| Packages         | Description                                    | Status      | Readme       |
|------------------|------------------------------------------------|-------------|--------------|
| subject | Automatize process of creating observable properties in component or service.   | **Ready**  | [Readme][0] |
| unsubscribe | Decorator to automatize process of unsubscribe subscriptions in component. | **Ready**  | [Readme][1] |


#### subject

```typescript
import '@angular-package/reactive/subject';
```

Available reactive/subject packages

| Package  | Module            | Description                                          | Status     | Readme      |
|----------|-------------------|------------------------------------------------------|------------|-------------|
|         | ApSubject         | Automatize process of creating rxjs/Subject.         | **Ready**  | [Readme][2] |
| async   | ApSubjectAsync    | Automatize process of creating rxjs/AsyncSubject.    | **Ready**  | [Readme][3] |
| behavior| ApSubjectBehavior | Automatize process of creating rxjs/BehaviorSubject. | **Ready**  | [Readme][4] |
| replay  | ApSubjectReplay   | Automatize process of creating rxjs/ReplaySubject.   | **Ready**  | [Readme][5] |


[0]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject#readme
[1]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/unsubscribe#readme
[2]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/#readme
[3]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/async#readme
[4]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/behavior#readme
[5]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/replay#readme
