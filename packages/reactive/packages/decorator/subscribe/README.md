# @angular-package/reactive/decorator/subscribe

Decorator to automatize process of creating observable properties in component.

```typescript
@Subscribe<T>(observables: string[])
```

**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Everything happens on `onInit` lifecycle hook, and there is no need to remember to implement it.
* Automatically unsubscribe all subscribed properties on `onDestroy` lifecycle hook, and there is no need to remember to implement it.
* It uses `setters` and `getters` but there is still possibility to define own.
* It observes changes to specified property name, so you can still work on property as usual.
* Can be used with `Injectable()` services.

**Cons(-):**   
* Possibility to use only `Subject<T>()`.
* Need to add `ngOnInit` and `ngOnDestroy()` lifecycle hooks.
* In services need to call `ngOnInit()` method in `constructor()`, and need to remember to `Unsubscribe()` all properties from injectable service (f.e. demo).
* There are no typeguards.
* There are no test at the moment.
* It is needed to define properties in component.

**Important!**  
* First, property with suffix $$ for example `property$$` is automatically set as `new Subject<T>()`.
* Second, property with suffix $ for example `property$` is automatically set as `this['property$$'].asObservable()`.
* Every property with name from observables will have added to setter `this['property$$'].next(value)`.
* Define `public property$: Observable<any>;` to subscribe to this property changes.

---- 

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

[Live demonstration](http://angular-package.wwwdev.io/reactive/decorator)

Demonstration usage with `@angular/cli` available on github [repository](https://github.com/angular-package/angular-package/tree/master/packages/reactive/demo):

```bash
git clone https://github.com/angular-package/angular-package.git
cd angular-package/packages/reactive/decorator/demo
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
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subscribe } from '@angular-package/reactive/decorator/subscribe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Subscribe<string>(['name'])
@Subscribe<number>(['age'])
export class AppComponent implements OnInit {

  public nameSubscription: Subscription;
  public ageSubscription: Subscription;

  public name: string;
  public name$: Observable<string>;

  public age$: Observable<number>;
  public age_: number;
  set age(value: number) {
    this.age_ = value;
  }
  get age(): number {
    return this.age_;
  }

  ngOnInit() {
    this.nameSubscription = this.name$.subscribe({
      next: (value: string) => {
        console.log(value);
      }
    });

    this.ageSubscription = this.age$.subscribe({
      next: (value: number) => {
        console.log(value);
      }
    });

    this.age = 27;
    this.name = `Brayan`;
  }

}
```

What will be added.

| Prefix | Suffix | Property | Value            |
|--------|--------|----------|------------------|
|        | $$     | name$$   | new Subject<T>() | 
|        | $      | name$    | this['name$$'].asObservable() | 
| _      |        | _name    | set name(value){ <br/> this['name$$'].next(value); this._name = value; <br />} <br /> get name() { this._name; } | 
|        | $$     | age$$   | new Subject<T>() | 
|        | $      | age$    | this['age$$'].asObservable() | 
|        | _      | age_    | set age(value){ <br/> this['age$$'].next(value); this.age_ = value; <br />} <br /> get age() { this.age_; } | 


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
