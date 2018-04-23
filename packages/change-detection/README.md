# change-detection

Decorator to improve application performance by setting initially change detection component state to `Detached` and detect changes on indicated properties on `set`.

```typescript
import { ApChangeDetection } from '@angular-package/change-detection';
```

```typescript
@ApChangeDetection<T>(properties: ApChangeDetectionProperties, options?: ApChangeDetectionOptions): Function
```

 name | Type | Description 
------|------|-------------
 properties | [*ApChangeDetectionProperties*][1] **{[index:string]:boolean}** | Name of component property with value `true` is sensitive for detection. E.g. `{firstname: true, surname: false}`
 options?   | [*ApChangeDetectionOptions*][2] **{ detach?: string; detect?: string; properties?: string; reattach?: string;}** | Method or property name that is accessible directly in component under this name. E.g. `{detach: '__detach', detect: '_detect', reattach: undefined}`

**Pros(+):**

* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Component property `detection` sets initially its change detection state, where `false` means `Detached`.
* Default component property detection is controlled by component property `_properties: ApChangeDetectionProperties`.
* Some properties and methods names are configurable.
* Uses [`ApChangeDetectorClass`][3] to handle change detection.

**Cons(-):**

* ~~Cannot indicate new properties dynamically.~~ (New property can be added.)
* Need to inject [`ChangeDetectorRef`][4] instance as usually.
* ~~There are no tests.~~ (There are tests.)

**Important!**

* There are two property that aren't configurable by name: `changeDetector`, `detection`.
* Set `ChangeDetectionStrategy.OnPush` in component.
* Inject [`ChangeDetectorRef`][4] to component.
* Initialize detection by setting `detection: boolean` property component with default value as `false`.
* For better understanding what you can do in component extend it with `ApChangeDetectorAClass` or `ApChangeDetection` interface.

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Properties](#properties)
* [Methods](#methods)
* [Usage](#usage)
* [Scripts](#scripts)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

## Demonstration

### Available

[Live demonstration](http://angular-package.wwwdev.io/change-detection)

Demo available inside repository.

## Installation

Install `@angular-package/change-detection` package with command:

```bash
npm i --save @angular-package/change-detection@1.0.0
```

Install `peerDependencies`:

```bash
npm i --save @angular-package/core@1.0.1
```

## Properties

Properties added directly to component.

 Name / Linked  | Type / Default value | Description
----------------|----------------------|-------------
_changeDetector | *ApChangeDetectorClass\<T\>* |   [ApChangeDetectorClass][0] instance.
changeDetector **[_changeDetector]** | ApChangeDetectorClass\<T\> / **ApChangeDetectorClass\<T\>(this, Object.assign({}, properties))** | Wrapper for `_changeDetector` property. Property is linked to `_changeDetector`.
detection **[changeDetector.detection]** | *boolean* / **false** |  Whether detection is on `true` or off `false`. Property is linked to `changeDetector.detection`.
_properties **[changeDetector.properties]** | [*ApChangeDetectionProperties*][1] / **{}** | Detect changes when specified property name is `true` e.g. `{ firstname: true }`. Property is linked to `changeDetector.properties`.

## Methods

Methods directly added to component.

### _detach

Detaches component change detector from the change detector tree.

```typescript
_detach(): void;
```

### _detect

Detect changes in specified component, and also conditionally by providing property name.

```typescript
_detect(property?: string): void;
```

### _reattach

Reattach component change detector to the change detector tree and sets property `detection` to `true`.

```typescript
_reattach(): void;
```

## Usage

**1. Add to any component of your application `ApChangeDetection` decorator like in `component.ts` below.**

```typescript
// component.ts
// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

// @angular-package
import { ApChangeDetection } from '@angular-package/change-detection';
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
import { ApChangeDetector, ApChangeDetectionProperties } from '@angular-package/change-detection/interface';

// internal
import { AddressInterface } from './interface';

export const OPTIONS: ApChangeDetectionOptions = {
  properties: '_properties'
};

export const PROPERTIES = {
  name: false,
  surname: true
};

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ApChangeDetection<ChangeDetectionComponent>(PROPERTIES, OPTIONS)
export
  class ChangeDetectionComponent
  implements ApChangeDetector<ChangeDetectionComponent> {

  // Whether change detection is active or not. If false, change detection status is set to `Detached`.
  // If true, change detection status is set to `CheckOnce` because of OnPush.
  public detection = false; // <--- Required, initialize detection with specified value true or false.
  public changeDetector: ApChangeDetectorClass<ChangeDetectionComponent>; // ChangeDetector instance.
  public _properties: ApChangeDetectionProperties; // --- Not required. Properties that will be detected when true.

  public _address: AddressInterface;
  @Input('address')
  set address(address: AddressInterface) {
    this._address = address;
  }
  get address(): AddressInterface {
    return this._address;
  }

  _name: string;
  @Input('name')
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  @Input('surname') surname;

  public _detach(): void { }
  public _detect(): void { }
  public _reattach(): void { }

  constructor(public c: ChangeDetectorRef) { }

  update($event) {
    this._detect();
  }
}
```

**2. Template file `component.html` of component above displays name and surname, and add some inputs to check how it works.**

```html
<!-- component.html -->
<h1>ChangeDetectionComponent</h1>
{{detection}}
<div>
  <!-- [value]="true" (change)="update($event)"  -->
  <mat-checkbox name="detection" [(ngModel)]="detection">
    Component change detection
    <small>Means Detached when false</small>
  </mat-checkbox>
  <div>
    <mat-form-field>
      <input matInput placeholder="Name" name="name" [(ngModel)]="name" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="_properties.name" *ngIf="detection === false" >
      Detect changes in property
      <small>When component is detached</small>
    </mat-checkbox>
  </div>
  <div>
    <mat-form-field>
      <input matInput placeholder="Surname" name="surname" [(ngModel)]="surname" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="_properties.surname" *ngIf="detection === false">
      Detect changes in property.
      <small>When component is detached</small>
    </mat-checkbox>
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

**4. Displays component with `ApChangeDetection` decorator.**

```html
<!-- app.component.html -->
<app-changedetection-component [address]="{city: 'Web', street: 'HTML'}" [name]="'Angular'" [surname]="'Package'"></app-changedetection-component>
<app-changedetection-component [address]="{city: 'Component', street: 'Decorator'}" [name]="'Change Detection'" [surname]="'Feature'"></app-changedetection-component>
<app-changedetection-component [address]="{city: 'Poznań', street: 'Głuszyna'}" [name]="'Ścibor'" [surname]="'Rudnicki'"></app-changedetection-component>
<app-changedetection-component [address]="{city: 'Web', street: 'HTML'}" [name]="'Angular'" [surname]="'Package'"></app-changedetection-component>
<app-changedetection-component [address]="{city: 'Component', street: 'Decorator'}" [name]="'Change Detection'" [surname]="'Feature'"></app-changedetection-component>
```

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

* [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153).
* [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html).

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license](https://github.com/angular-package/angular-package/blob/master/LICENSE))


[0]: https://github.com/angular-package/angular-package/tree/change-detection/packages/change-detection/packages/change-detector#readme
[1]: https://github.com/angular-package/angular-package/blob/change-detection/packages/change-detection/packages/interface/src/properties.interface.ts
[2]: https://github.com/angular-package/angular-package/blob/change-detection/packages/change-detection/packages/interface/src/options.interface.ts
[3]: https://github.com/angular-package/angular-package/tree/change-detection/packages/change-detection/packages/change-detector#readme
[4]: https://angular.io/api/core/ChangeDetectorRef
