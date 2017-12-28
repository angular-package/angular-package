# @angular-package/change-detection

Package to improve application performance by setting initially change detection component state to `Detached` and detect changes on choosed properties when they are `set`.


**Pros(+):**
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Component change detection properties are controlled by property `__properties: PropertiesInterface`.
* Set component initially to `Detached` to detach from change detection tree to improve application performance.
* Uses `set` to detect specified property changes.

**Cons(-):**
* Cannot add dynamically property.
* Need to provide `ChangeDetectorRef` instance.
* Need to add `ngOnInit()` and `ngAfterContentinit()` methods to work properly.

**Important!**
* Set `ChangeDetectionStrategy` to `OnPush`.
* Inject `ChangeDetectorRef` to component `constructor()`.
* Implement `ngOnInit()` and `ngAfterContentInit()` methods.

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Scripts](#scripts)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----


## Demonstration

**Available**

[Live demonstration](http://angular-package.wwwdev.io/change-detection)

Demo available inside repository.

## Installation

First, install `@angular-package/change-detection` package with command:

```bash
npm i --save @angular-package/change-detection
```

## Usage

**1. Add to any component of your application `ChangeDetection` decorator like in `component.ts` below.**
```typescript
// component.ts
// external
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ChangeDetection } from '@angular-package/change-detection';

// internal
import { AddressInterface } from './interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush, // <--- Set detection strategy to `OnPush`.
  selector: 'changedetection-component',
  templateUrl: './component.html'
})
@ChangeDetection(
  false,  // <--- Set change detection status to `Detached`.
  {
    name: true,  // <--- Detect changes on specific properties when true. [propertyName]: detection(true:false). It can be changed dynamically with `this.__properties` property.
    surname: false
  }
)
export class ChangeDetectionComponent
  implements
  OnInit,  // <--- Implement OnInit
  AfterViewInit { // <--- Implement AfterViewInit

  __properties: any;

  public _address: AddressInterface
  @Input('address')
  set address(address: AddressInterface) {
    this._address = address;
  }
  get address(): AddressInterface {
    return this._address;
  }

  @Input('name') _name;
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  @Input('surname') surname;

  constructor(public changeDetector: ChangeDetectorRef) { }  // <--- Inject `ChangeDetectorRef`.

  ngOnInit() { } // <--- Add method ngOnInit.
  ngAfterContentInit() { } // <--- Add method AfterContentInit.
  ngAfterViewInit() { }
  update($event) {
    this.__properties = this.__properties;
    console.log(`update`, $event, this);
  }
}

```

**2. Template file `component.html` of component above displays name and surname, and add some inputs to check how it works.**
```html
<!-- component.html -->
<div>
  <input type="checkbox" name="detection" [value]="true" (change)="update($event)" [(ngModel)]="__detection" />
  <div>
    <input type="text" placeholder="Name" name="name" [(ngModel)]="name" />
    <input type="checkbox" (change)="update($event)" [(ngModel)]="__properties.name" *ngIf="__detection === false" />
  </div>
  <div>
    <input type="text" placeholder="Surname" name="surname" [(ngModel)]="surname" />
    <input type="checkbox" (change)="update($event)" [(ngModel)]="__properties.surname" *ngIf="__detection === false" />
  </div>
  <p>
    {{name}} {{surname}}
  </p>
</div>
```

**3. Add newly created component to `AppModule`.**
```typescript
// external.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// internal.
import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent // <-- Add component above to primary module.
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

**4. Displays component with `ChangeDetection` decorator.**
```html
<!-- app.component.html -->
<changedetection-component [address]="{city: 'Web', street: 'HTML'}" [name]="'Chris'" [surname]="'Cyborg'"></changedetection-component>
```

## Arguments

```typescript
ChangeDetection(detection = false, properties: PropertiesInterface)
```

| name | Type | Description |
|----------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| detection | boolean = true | Whether change detection is active or not. If **not**, change detection status is set to `Detached`. If **yes**, change detection status is set to `CheckOnce`. |
| properties | PropertiesInterface<br /> **{[index:string]:boolean}** | If change detection is set to `Detached`, properties provided with `index` as name and value `true` will be sensitive for changes. |




## Scripts

Clone repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to just created folder:

```bash
cd angular-package/packages/change-detection
```

To build a clean package, means before that script removes node_modules, dist folder and install dependencies:

```bash
npm run clean:start
```

To build a package:

```bash
npm start
```

To run karma tests:

```bash
npm test
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

MIT © angular-package ([license](https://github.com/angular-package/angular-package/blob/master/LICENSE))

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
