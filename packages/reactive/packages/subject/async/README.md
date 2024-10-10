# @angular-package/reactive/subject/async

Decorator to automatize process of transform indicated properties in component to [`AsyncSubject`](http://reactivex.io/rxjs/manual/overview.html#asyncsubject) observable.

```typescript
@ApSubjectAsync<T>(...properties: string[])
```

**Pros(+):**
* **Treeshake** bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* **Demo** available inside repository.
* It works without `OnInit` lifecycle hook.
* Observable is instantiated on demand.
* Automatically unsubscribe on `OnDestroy` lifecycle hook.
* Possibility to define own `set`.
* Can be used with `Injectable()` services.

**Cons(-):**   
* Cannot define own `get` because it returns `AsyncSubject` instance.
* There are no **typeguards**.
* There are no **tests**.

**Important!**  
* There is need to add `OnDestroy` hook to unsubscribe subscriptions when component is destroyed.

---

* [Demonstration](#demonstration)
* [Install](#install)
* [Usage](#usage)
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

### Example

This example is using `@angular/cli`. Update your `app.component.ts` to the following.

```typescript
// app.component.ts
// external
import { Component, OnInit } from '@angular/core';

// @angular-package
import { ApSubjectAsync } from '@angular-package/reactive/subject/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@ApSubjectAsync<string>('firstname')
@ApSubjectAsync<number>('age')
export class AppComponent implements OnInit {

  age: any;
  firstname: any;
  lastname: any;

  constructor() { }

  ngOnInit() {
    this.initFirstname();
    this.initAge();
  }

  initFirstname() {
    this.firstname = 'First name';
    this.firstname = 'Second name';
    this.firstname = 'Third name';
    this.firstname = 'Last name';
    this.firstname.subscribe({
      next: v => console.log(`firstname:`, v)
    });
    this.firstname.complete();
  }

  initAge() {
    this.age = 1;
    this.age = 2;
    this.age = 3;

    this.age.subscribe({
      next: v => console.log(`age:`, v)
    });

    setTimeout(() => {
      this.age = 27;
      this.age.complete();
    }, 2000);
  }
}

```

```html
<!-- app.component.hmtl -->
<div>
  <h2>
    @ApSubjectAsync()
  </h2>
  <p>
    Firstname: {{firstname.value}}
  </p>
  <p>
    Age: {{age.value}}
    <small>
      (After 2000 ms it will become 27.)
    </small>
  </p>
</div>
```

What will be added when you use `ApSubjectAsync` like below:

```typescript
@ApSubjectAsync<string>('name')
export class ExampleComponent {
  public name = 'Example name';
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _name$   | undefined \| AsyncSubject\<string\>) |
|        | $      | name$    | this['_name$'] |
|        |        | name     | get: this['name$']; <br /> set(v: string): this['name$'].next(v); |

```typescript
@ApSubjectAsync<number>('age')
export class ExampleComponent {
  public age = 27;
}
```

| Prefix | Suffix | Property | Value             |
|--------|--------|----------|-------------------|
| _      | $      | _age$    | undefined \| AsyncSubject\<number\>() |
|        | $      | age$     | this['_age$'] |
|        |        | age      | get: this['age$']; <br /> set(v: number): this['age$'].next(v); |

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
