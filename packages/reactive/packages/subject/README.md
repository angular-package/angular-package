# @angular-package/reactive/subject

Decorator to automatize process of creating `Subject` observable on indicated component properties.

```typescript
@ApSubject<T>(...properties: string[])
```

**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* ~~Everything happens on `onInit` lifecycle hook, and there is no need to remember to implement it.~~ (`OnInit` lifecycle hook is no longer in use).
* `Subject` is instantiated on demand.
* Automatically unsubscribe on `OnDestroy` lifecycle hook.
* Possibility to define own `set` and `get`.
* It observes changes on indicated properties, and we can still work on them as usual.
* Can be used with `Injectable()` services.

**Cons(-):**   
* ~~Need to add lifecycle hooks: `ngOnInit()` to initialize `Subject` and `ngOnDestroy()` to unsubscribe `Subscription`.~~  (There is no need to add `OnInit` cycle hook anymore but there is need to add `OnDestroy` hook to unsubscribe on destroy moment)
* ~~In services need to call `ngOnInit()` method in `constructor()`, and need to remember to `Unsubscribe()` all properties from injectable service (f.e. demo).~~
* There are no **typeguards**.
* There are no **tests** at the moment.
* ~~It is needed to define properties in component.~~

**Important!**  
* It's possible to use `complete()` or `subscribe()` component method like `this.complete('property');` or `this.subscribe('property', { next: v => console.log(v) })`.
* Property with suffix $ for example `property$` is set as `new Subject<T>()` on demand, it means when you write `this.property$.subscribe()`.
* ~~Property with suffix $ for example `property$` is automatically set as `this['property$$'].asObservable()`.~~ 
* ~~Define `public property$: Observable<any>;` to subscribe to this property changes.~~

---

* [Demonstration](#demonstration)
* [Install](#install)
* [Usage](#usage)
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
cd angular-package/packages/reactive/packages/decorator/demo
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200/) in your browser.


## Install

To install, run:

```bash
npm i @angular-package/reactive --save
```

## Usage

**Example** on `@angular/cli`.

Update your `app.component.ts` to the following.

```typescript
// app.component.ts
// external
import { Component } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subject } from 'rxjs/Subject';

// @angular-package
import { ApSubject } from '@angular-package/reactive/subject';

import { ApSubjectInterface } from '@angular-package/reactive/subject/src/subject.interface'; // [1] implements in component
import { ApCompleteType } from '@angular-package/reactive/subject/src/complete.type'; // [2] add to component with implement
import { ApSubscribeType } from '@angular-package/reactive/subject/src/subscribe.type'; // [3] add to component with implement

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ApSubject<string>('name')
@ApSubject<number>('age')
export class AppComponent implements
  ApSubjectInterface, // <------- [1] implemented
  OnDestroy {

  complete: ApCompleteType; // <--- [2] defined complete function
  subscribe: ApSubscribeType; // <--- [3] defined subscribe function

  public age_: number;
  set age(value: number) {
    this.age_ = value;
  }
  get age(): number {
    return this.age_;
  }

  public name: string;
  public name$: Subject<string>;

  constructor() {
    // First way by using subscribe function.
    this.subscribe('age', {
      next: v => console.log(`age(${v}) _age(${this['_age']}) age_(${this['age_']})`)
    });
    this.age = 3;
    this.age = 6;
    this.age = 9;
    this.age = 27;

    // Second way of subscribe directly to Subject.
    this.name$.subscribe({
      next: v => console.log(`name(${v}) _name(${this['_name']})`)
    });
    this.name = 'M';
    this.name = 'Ma';
    this.name = 'Mart';

    // From now name$ observable is complete.
    this.completed('name');

    // Subscribe is no longer working.
    this.name = 'Mart';
    this.name = 'Marti';
    this.name = 'Martin';
  }

  ngOnDestroy() { }

  completed(property: string) {
    if (property) {
      this.complete(property);
    }
  }
}
```

What will be added when you use `ApSubject` like below:

```typescript
@ApSubject<string>('name')
export class ExampleComponent {
  public name = 'Example name';
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _name$   | undefined \| Subject\<string\> |
|        | $      | name$    | this['_name$'] |
| _      |        | \_name   | 'Example name' |
|        |        | name     | this['_name']; <br /> this['name$'].next(); |


```typescript
@ApSubject<number>('age')
export class ExampleComponent {
  public age = 27;
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _age$    | undefined \| Subject\<number\> |
|        | $      | age$     | this['_age$'] |
| _      |        | \_age    | 27 |
|        |        | age      | this['_age']; <br /> this['age$'].next(); |

And common methods inside `ExampleComponent`:

To complete observable.

```typescript
complete(name: string)
```

To subscribe to observable.

```typescript
subscribe(name: string, observer: {
  next: (v) => console.log('success', v),
  error: (err) => console.log('error', err),
  complete: () => console.log('complete')
})
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
