# @angular-package/reactive/decorator

Additional Angular 5+ decorators to speed up development.	

----

* [Demonstration](#demonstration)
* [Install](#install)
* [Usage](#usage)
  * [@Subscribe](#subscribe)
  * [@Unsubscribe](#unsubscribe)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

Demonstration usage with `@angular/cli` get from github [repository](https://github.com/angular-package/angular-package.git):

```bash
git clone https://github.com/angular-package/angular-package.git
cd packages/reactive/src/decorator/demo
npm i && npm start
```

Open http://localhost:4200/ in your browser.


## Install

To i, run:

```bash
npm i @angular-package/reactive --save
```

## Usage

### @Subscribe

```typescript
@Subscribe<T>(observables: string[])
```


**Pros(+):**   
* Everything happens on `onInit` lifecycle hook, and you do not need to remember to implement it.
* Automatically unsubscribe all subscribed properties on `onDestroy` lifecycle hook, and you do not need to remember to implement it.
* You can still define your own `setter` and `getter`.
* It observes changes to specified property name, so you can still work on property as usual.

**Cons(-):**   
* Possibility to use only `Subject`.
* There are no typeguards.



**Example** on `@angular/cli`, add the following component:

```typescript
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subscribe } from '@ngx-reactive/decorator';

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

### @Unsubscribe

**Pros(+):**   
* Simple unsubscribe with argument as array of string or automatically search for active subscriptions in component when argument is undefined.
* Everything happens on `onDestroy` lifecycle hook, and you do not need to remember to implement it.

**Cons(-):**   
* It is searching only in first level of component properties like `this['property']`.


```typescript
@Unsubscribe<T>(observables?: string[])
```

**Example** on `@angular/cli`, add the following component:

```typescript
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribe } from '@ngx-reactive/decorator';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html'
})
@Unsubscribe()
export class UnsubscribeComponent implements OnDestroy, OnInit {

  subject: Subject<string> = new Subject();
  observable: Observable<string> = this.subject.asObservable();
  subscription: Subscription = this.observable.subscribe({
    next: (value: string) => {
      console.log(`subscribe`, value);
    }
  });

  constructor() { }

  ngOnDestroy() {
    console.log(this);
  }

  ngOnInit() {
    this.subject.next('aaaa');
  }
}
```

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
