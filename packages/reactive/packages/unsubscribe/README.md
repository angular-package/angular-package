# @angular-package/reactive/unsubscribe

Decorator to automatize process of unsubscribe subscriptions in component.

```typescript
@Unsubscribe<T>(...properties: string[])
```

**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Simple unsubscribe with string arguments or automatically search for active subscriptions in component when argument is undefined.
* Everything happens on `onDestroy` lifecycle hook, and there is no need to remember to implement it.

**Cons(-):**
* It is searching only in first level of component properties like `this['property']`.
* Need to add `ngOnDestroy()` lifecycle hooks.
* There are no **tests**.

---- 

* [Demonstration](#demonstration)
* [Install](#install)
* [Usage](#usage)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

Demonstration usage with `@angular/cli` available on github [repository](https://github.com/angular-package/angular-package/tree/master/packages/reactive/packages/subject/demo):

```bash
git clone https://github.com/angular-package/angular-package.git
cd angular-package/packages/reactive/packages/subject/demo
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.

## Install

To install, run:

```bash
npm i @angular-package/reactive --save
```

## Usage

**Example** on `@angular/cli`, add the following component:

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { ApUnsubscribe } from '@angular-package/reactive/unsubscribe';

@Component({
  selector: 'app-unsubscribe', 
  templateUrl: './unsubscribe.component.html' // <-------------- Here can be nothing.
})
@ApUnsubscribe('subscription') // <----------- Remove arguments to check if it is closing all subscriptions
export class UnsubscribeComponent implements OnDestroy, OnInit {

  subject: Subject<string> = new Subject();
  observable: Observable<string> = this.subject.asObservable();
  subscription: Subscription = this.observable.subscribe({
    next: (value: string) => {
      console.log(value);
    }
  });

  constructor() { }

  ngOnDestroy() {
    console.log(`subscription closed: `, this.subscription.closed);
  }

  ngOnInit() {
    this.subject.next('Subscribe to subject property of component');
  }
}

```

## Style guide

[Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) 

## GIT

### Commit

- [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)   
- [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

**Given a version number MAJOR.MINOR.PATCH, increment the:**  
MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.   

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
