# @angular-package/reactive/subject/replay

Decorator to automatize process of creating [`ReplaySubject`](http://reactivex.io/rxjs/manual/overview.html#replaysubject) observable on indicated properties in component or service.

```typescript
@ApSubjectReplay<T>(buffer: number, windowTime: number, ...properties: string[])
```

**Pros(+):**
* **Treeshake** bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* **Demo** available inside repository.
* It works without `OnInit` lifecycle hook.
* Observable is instantiated on demand.
* Automatically unsubscribe on `OnDestroy` lifecycle hook.
* Possibility to define own `set` and `get`.
* It observes changes on indicated properties, and we can still work on them as usual.
* Can be used with `Injectable()` services.

**Cons(-):**   
* There are no **typeguards**.
* There are no **tests** at the moment.

**Important!**  
* There is need to add `OnDestroy` hook to unsubscribe subscriptions when component is destroyed.
* It's possible to use `complete()` or `subscribe()` component method like `this.complete('property');` or `this.subscribe('property', { next: v => console.log(v) })`.
* Argument `buffer` means that it will send for example `3` values for new subscribers.
* Argument `windowTime` means how old the recorded values can be. Here is description from rxjs website:
> *You can also specify a window time in milliseconds, besides of the buffer size, to determine how old the recorded values can be.*

---

* [Demonstration](#demonstration)
* [Install](#install)
* [Usage](#usage)
  * [Common methods](#common-methods)
  * [Example](#example)
* [Properties](#properties)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

[Live demonstration](http://angular-package.wwwdev.io/reactive/subject)

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

### Common methods

To complete observable:

```typescript
complete(propertyName: string | string[]) => void
```
How to implement:

```typescript
import { ApSubjectReplay } from '@angular-package/reactive/subject/replay';
import { ApSubjectInterface } from '@angular-package/reactive/subject/src/subject.interface'; // [1] implements in component
import { ApCompleteType } from '@angular-package/reactive/subject/src/complete.type'; // [2] add to component with implement

@Component({...})
@ApSubjectReplay<number>('age')
export class ExampleComponent implements ApSubjectInterface {
  public complete: ApCompleteType;
  age = 3;
  age$: Subject<number>; // ------ or this way.
  constructor() {
    this.age = 6;
    this.age$.complete(); // ------ or this way.
    this.complete('age');
  }
}
```

To subscribe to observable:

```typescript
subscribe<T>(propertyName: string, observer: PartialObserver<T>) => void
```

How to implement:

```typescript
import { ApSubjectReplay } from '@angular-package/reactive/subject/replay';
import { ApSubjectInterface } from '@angular-package/reactive/subject/src/subject.interface'; // [1] implements in component
import { ApSubscribeType } from '@angular-package/reactive/subject/src/subscribe.type'; // [3] add to component with implement

@Component({...})
@ApSubjectReplay<number>('age')
export class ExampleComponent implements ApSubjectInterface {
  public subscribe: ApSubscribeType;
  age = 3;
  age$: Subject<number>; // ------ or this way.
  constructor() {
    this.subscribe('age', {
      next: v => console.log('success', v),
      error: err => console.log('error', err),
      complete: () => console.log('complete')
    });

    // --------------------------- or this way.
    this.age$.subscribe({
      next: v => console.log('success', v),
      error: err => console.log('error', err),
      complete: () => console.log('complete')
    });
  }
}
```

### Example

This example is using `@angular/cli`. Update your `app.component.ts` to the following.

```typescript
// app.component.ts
import { Component } from '@angular/core';

// @angular-package
import { ApSubjectReplay } from '@angular-package/reactive/subject/replay';
import { ApCompleteType, ApSubjectInterface, ApSubscribeType } from '@angular-package/reactive/subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
@ApSubjectReplay<number>(5, 500, 'age', 'homeNumber')
@ApSubjectReplay<string>(5, 1000, 'firstname', 'lastname')
export class AppComponent implements ApSubjectInterface {

  complete: ApCompleteType;
  subscribe: ApSubscribeType;

  age: number;
  homeNumber: number;
  firstname: string;

  constructor() {

    this.age = 1;
    this.age = 2;
    this.age = 3;
    this.age = 4;
    this.age = 5;
    this.age = 6;

    this.subscribe<number>('age', {
      next: (v: number) => console.log(v)
    });
  }
}
```

What will be added when you use `ApSubjectReplay` like below:

```typescript
@ApSubjectReplay<string>(3, 600, 'name')
export class ExampleComponent {
  public name = 'Example name';
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _name$   | undefined \| ReplaySubject\<string\> |
|        | $      | name$    | this['_name$'] |
| _      |        | \_name   | 'Example name' |
|        |        | name     | this['_name']; <br /> this['name$'].next(); |

```typescript
@ApSubjectReplay<number>('age')
export class ExampleComponent {
  public age = 27;
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _age$    | undefined \| ReplaySubject\<number\> |
|        | $      | age$     | this['_age$'] |
| _      |        | \_age    | 27 |
|        |        | age      | this['_age']; <br /> this['age$'].next(); |

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
