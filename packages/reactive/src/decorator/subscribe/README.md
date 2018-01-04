# @angular-package/reactive/decorator/subscribe

Decorator to automatize process of creating observable properties in component.

```typescript
@Subscribe<T>(observables: string[])
```

**Pros(+):**
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Everything happens on `onInit` lifecycle hook, and there is no need to remember to implement it.
* Automatically unsubscribe all subscribed properties on `onDestroy` lifecycle hook, and there is no need to remember to implement it.
* It uses `setters` and `getters` but there is still possibility to define own.
* It observes changes to specified property name, so you can still work on property as usual.

**Cons(-):**   
* Possibility to use only `Subject<T>()`.
* Need to add `ngOnInit()` and `ngOnDestroy()` lifecycle hooks.
* There are no typeguards.
* There are no test at the moment.
* It is needed to define properties in component.

**Important**  
* First, property with suffix $$ for example `property$$` is automatically set as `new Subject<T>()`.
* Second, property with suffix $ for example `property$` is automatically set as `this['property$$'].asObservable()`.
* Every property with name from observables will have added to setter `this['property$$'].next(value)`.
* Define `public property$: Observable<any>;` to subscribe to this property changes.

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

[Live demonstration](http://angular-package.wwwdev.io/reactive/decorator)

Demonstration usage with `@angular/cli` available on github [repository](https://github.com/angular-package/angular-package/tree/master/packages/reactive/demo):

```bash
git clone https://github.com/angular-package/angular-package.git
cd angular-package/packages/reactive/demo
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
// subscribe.component.ts
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscribe } from '@angular-package/reactive/decorator/subscribe';

@Component({
  selector: 'app-subscribe-component',
  templateUrl: './subscribe.component.html'
})
@Subscribe<string>(['prop', 'inputPropSG'])
@Subscribe<number>(['inputProp'])
export class SubscribeComponent implements OnDestroy, OnInit {

  prop = 'Because it is';
  @Input('inputProp') inputProp: number;

  _inputPropSG: string;
  @Input('inputPropSG') set inputPropSG(value: string) {
    this._inputPropSG = value;
  }
  get inputPropSG(): string {
    return this._inputPropSG;
  }

  /**
   * Observable instance to subscribe.
   * @type {Observable<string>}
   * @memberof SubscribeComponent
   */
  public prop$: Observable<string>;
  public inputPropSG$: Observable<string>;

  /**
   *
   * @type {Observable<number>}
   * @memberof SubscribeComponent
   */
  public inputProp$: Observable<number>;

  /**
   * Subscription instance of observable.
   * @type {Subscription}
   * @memberof SubscribeComponent
   */
  public prop$$$: Subscription;
  public inputProp$$$: Subscription;
  public inputPropSG$$$: Subscription;

  constructor() { }

  ngOnDestroy() {
    console.log(this);
  }

  ngOnInit() {
    this.prop$$$ = this.prop$.subscribe({
      next: (value: string) => {
        console.log(`subscribe['prop']: `, value, this);
      }
    });
    this.inputPropSG$$$ = this.inputPropSG$.subscribe({
      next: (value: string) => {
        console.log(`subscribe['inputPropSG']: `, value, this);
      }
    });
    this.inputProp$$$ = this.inputProp$.subscribe({
      next: (value: number) => {
        console.log(`subscribe['inputProp']: `, value);
      }
    });
  }

  update(input: any) {
    this[input['name']] = input['value'];
  }
}

```

**Step 2.** With template file
```html
<!-- subscribe.component.html -->
<h2>
  Subscribe
</h2>
<h3>InputPropSG</h3>
<p>
  Property type <strong>`string`</strong> with <strong>@Input</strong> decorator and setter/getter defined.
</p>
<ng-content select="[slot1]"></ng-content>
<div [innerHTML]="(inputPropSG$ | async) || inputPropSG"></div>

<h3>InputProp</h3>
<p>
  Property type <strong>`number`</strong>.
</p>
<ng-content select="[slot2]"></ng-content>
<div [innerHTML]="(inputProp$ | async) || inputProp"></div>

<h3>prop</h3>
<p>
  Property type <strong>`string`</strong>.
</p>
<p>
  <input #elprop type="text" name="prop" value="{{prop}}" (change)="update(elprop)" />
</p>
<div [innerHTML]="(prop$ | async) || prop"></div>
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
