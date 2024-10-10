# @angular-package/reactive

[![npm version](https://badge.fury.io/js/%40angular-package%2Freactive.svg)](https://badge.fury.io/js/%40angular-package%2Freactive)
[![Known Vulnerabilities](https://snyk.io/test/npm/@angular-package/reactive/badge.svg)](https://snyk.io/test/npm/@angular-package/reactive)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

Automatize process of creating some **[rxjs](http://reactivex.io/rxjs/)** features.

* **Treeshake** bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.

---

### Packages

```typescript
import '@angular-package/reactive/subject';
import '@angular-package/reactive/unsubscribe';
```

| Packages         | Description                                    | Status      | Readme       |
|------------------|------------------------------------------------|-------------|--------------|
| subject | Automatize process of creating observable properties in component or service.   | **Ready**  | [Readme][0] |
| unsubscribe | Automatize process of unsubscribe subscriptions in component. | **Ready**  | [Readme][1] |


#### Subject

```typescript
import { ApSubject } '@angular-package/reactive/subject';
import { ApSubjectAsync } '@angular-package/reactive/subject/async';
import { ApSubjectBehavior } '@angular-package/reactive/subject/behavior';
import { ApSubjectReplay } '@angular-package/reactive/subject/replay';
```

| Package  | Module            | Description                                          | Status     | Readme      |
|----------|-------------------|------------------------------------------------------|------------|-------------|
|          | ApSubject         | Decorator to automatize process of creating `Subject` observable on indicated properties in component or service.         | **Ready**  | [Readme][2] |
| async    | ApSubjectAsync    | Decorator to automatize process of transform indicated properties in component or service to `AsyncSubject` observables.    | **Ready**  | [Readme][3] |
| behavior | ApSubjectBehavior | Decorator to automatize process of creating `BehaviorSubject` observable on indicated properties in component or service. | **Ready**  | [Readme][4] |
| replay   | ApSubjectReplay   | Decorator to automatize process of creating `ReplaySubject` observable on indicated properties in component or service.   | **Ready**  | [Readme][5] |

#### Unsubscribe

```typescript
import { ApUnsubscribe } '@angular-package/reactive/unsubscribe';
```

| Module   | Description                                          | Status     | Readme      |
|----------|------------------------------------------------------|------------|-------------|
| ApUnsubscribe | Decorator to automatize process of unsubscribe subscriptions in component. | **Ready**  | [Readme][6] |


[0]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject#readme
[1]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/unsubscribe#readme
[2]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/#readme
[3]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/async#readme
[4]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/behavior#readme
[5]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/replay#readme
[6]: https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/unsubscribe#readme
