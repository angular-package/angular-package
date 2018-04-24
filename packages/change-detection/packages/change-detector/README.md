# change-detection/change-detector

Feature to handle component detection tree with indicated properties by using [`ChangeDetectorRef`][2] instance. It is used in [`ApChangeDetection`][0] decorator.

```typescript
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';
```

```typescript
ApChangeDetectorClass<T>(component: T, public properties?: ApChangeDetectionProperties)
```

| Parameter | Type | Description |
|-----------|------|-------------|
| component | *T* | Component to find [`ChangeDetectorRef`][2] instance property name, set default detection and wrap setter of all `properties`. |
| properties? | [*ApChangeDetectionProperties*][1] **{ [index: string]: boolean }** | Detect changes when specified component property name is `true`. E.g. `{firstname: true}`. |

**Pros(+):**

* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Automatically finds [`ChangeDetectorRef`][2] instance.
* Methods `detect()`, `detach()`, `reattach()` and `setDetection()` uses found [`ChangeDetectorRef`][2] instance.
* Wrapping indicated properties to detect changes on them with [`PropertyWrapperClass`][3].
* **Add** component property name to detection.
* **Remove** component property name from detection.

**Cons(-):**

* Need to add argument `component` to each method.

**Important!**

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
npm i --save @angular-package/change-detection@2.0.0
```

Install `peerDependencies`:

```bash
npm i --save @angular-package/core@1.0.1
```

## Properties

 Access modifier | Name | Type | Description
-----------------|------|------|-------------
 private | _cd **?** | *string* | Property name [`ChangeDetectorRef`][2] instance.
 public | detection | *boolean* = **false** | Whether detection is **on (true)** or **off(false)**.
 public | properties **?** | [*ApChangeDetectionProperties*][1] | Detect changes when specified property is **true**.
 public | propertyWrapper  | [*PropertyWrapperClass*][3] = **new PropertyWrapperClass()** | Class to wrap indicated properties.

## Methods

### detach

Detaches component change detector from the change detector tree. The detached change detector will not be checked until it is reattached.
This method sets property `detection` to false, and also invoke method `detectToSetter()`.

 Parameter | Type | Description
-----------|------|-------------
 component | *T* | Used to invoke [`ChangeDetectorRef`][2] methods by using `cd` property, in this case `detach()`.

```typescript
/**
 * Detaches component change detector from the change detector tree.
 * The detached change detector will not be checked until it is reattached.
 * This method sets property `detection` to `false`, and also invoke method `detectToSetter()`.
 * @param {T} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detach()`.
 * @returns {this} ApChangeDetectorClass.
 * @memberof ApChangeDetectorClass
 */
public detach(component: T): this
```

### detect

Detect changes in specified component, and conditionally by providing property name.

 Parameter | Type | Description
-----------|------|-------------
 component | *T* | Used to invoke [`ChangeDetectorRef`][2] methods by using `cd` property, in this case `detectChanges()`.
 property? | *string* | Name of property found in `properties` as true to invoke `detectChanges()`.

```typescript
/**
 * Detect changes in specified component, and also conditionally by providing property name.
 * @param {T} component Object to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `detectChanges()`.
 * @param {string} [property] Name of property found in `properties` as true to invoke `detectChanges()`.
 * @returns {this} ApChangeDetectorClass.
 * @memberof ApChangeDetectorClass
 */
public detect(component: T, property?: string): this
```

### detectToSetter

All indicated properties will have added method `detect()` to setter.

 Parameter | Type | Description
-----------|------|-------------
 component | *T* | Object where properties are going to be wrapped.

```typescript
/**
 * All indicated properties will have added method `detect()` to setter.
 * @param {T} component Object where properties are going to be wrapped.
 * @returns {this}
 * @memberof ApChangeDetectorClass
 */
public detectToSetter(component: T):
```

### reattach

Reattach component change detector to the change detector tree and sets property `detection` to `true`.

 Parameter | Type | Description
-----------|------|-------------
 component | *T* | Used to invoke [`ChangeDetectorRef`][2] methods by using `cd` property, in this case `reattach()`.

```typescript
/**
 * Reattach component change detector to the change detector tree and sets property `detection` to `true`.
 * @param {T} component Used to invoke `ChangeDetectorRef` methods by using `cd` property, in this case `reattach()`.
 * @returns {this} ApChangeDetectorClass.
 * @memberof ApChangeDetectorClass
 */
public reattach(component: T): this
```

### setDetection

Detach or reattach component depends on `detection` property value.

 Parameter | Type | Description
-----------|------|-------------
 component | *T* | Component to change its own detector tree.

```typescript
/**
 * Detach or reattach component depends on `detection` property value
 * @param {T} component Component to change its own detector tree.
 * @returns {this}
 * @memberof ApChangeDetectorClass
 */
public setDetection(component: T): this
```

### find

Search for [`ChangeDetectorRef`][2] instance in specified component to store its property name.

 Parameter | Type | Description
-----------|------|--------------
 component | *T* | To find [`ChangeDetectorRef`][2] instance.

```typescript
/**
 * Search for `ChangeDetectorRef` instance in specified component to store its property name.
 * @param {T} component To find `ChangeDetectorRef` instance.
 * @returns {this}
 * @memberof ApChangeDetectorClass
 */
public find(component: T): this
```

## Usage

### 1. Add the following component typescript file.

```typescript
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ApChangeDetectorClass } from '@angular-package/change-detection/change-detector';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush, // <------------- Set change detection strategy to OnPush.
  selector: 'app-class',
  templateUrl: './class.component.html'
})
export class ClassComponent implements OnInit {

  changeDetector: ApChangeDetectorClass<ClassComponent>; // <------- Add property where `ApChangeDetectorClass` instance will be applied.

  firstname = 'Firstname';
  surname = 'Surname';
  age = 27;

  constructor(public c: ChangeDetectorRef) { // <------------------- Inject ChangeDetectorRef.
    this.changeDetector = new ApChangeDetectorClass<ClassComponent>(this,
    { firstname: true, surname: false, age: false }); // <---------- Properties with true are sensitive to changes.
    // this.changeDetector.detection = false; // <------------------ It is possible to change detection from default false to true.
    // this.changeDetector.setDetection(this); // <----------------- It is possible to set detection depends on detection property.
  }
  detect() {
    this.changeDetector.detect(this);
  }

  ngOnInit() {
    console.log(this);
  }

  update($event) {
    this.detect();
    console.log($event);
  }
}
```

### 2. Structure of `class.component.html`

```html
<h1>ClassComponent</h1>
{{changeDetector.detection}}
<button type="button" (click)="detect()">Detect changes</button>
<div>
  <!-- [value]="true" (change)="update($event)"  -->
  <mat-checkbox name="changeDetector.detection" [(ngModel)]="changeDetector.detection">
    Component change detection
    <small>Means Detached when false</small>
  </mat-checkbox>
  <div>
    <mat-form-field>
      <input matInput placeholder="Firstname" name="firstname" [(ngModel)]="firstname" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="changeDetector.properties.firstname" *ngIf="changeDetector.detection === false" >
      Detect changes in property
      <small>When component is detached</small>
    </mat-checkbox>
  </div>
  <div>
    <mat-form-field>
      <input matInput placeholder="Surname" name="surname" [(ngModel)]="surname" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="changeDetector.properties.surname" *ngIf="changeDetector.detection === false">
      Detect changes in property.
      <small>When component is detached</small>
    </mat-checkbox>
  </div>
  <p>
    {{firstname}} {{surname}} {{age}}
  </p>
</div>
```

### 3. Add `ClassComponent` to `AppModule` declarations

```typescript
// external.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// internal.
import { AppComponent } from './app.component';
import { ClassComponent } from './class.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent // <-------------------- Add here.
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // @angular/material
    MatButtonModule, // added
    MatCheckboxModule, // added
    MatInputModule, // added
    MatRadioModule // added
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### 4.Use in any other component by providing tag `app-class`

```html
<app-class></app-class>
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

* [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
* [Karma Git Commit Msg](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

### Versioning

[Semantic Versioning 2.0.0](http://semver.org/)

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes.
* MINOR version when you add functionality in a backwards-compatible manner.
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license](https://github.com/angular-package/angular-package/blob/master/LICENSE))

[0]: https://github.com/angular-package/angular-package/tree/master/packages/change-detection#readme
[1]: https://github.com/angular-package/angular-package/blob/master/packages/change-detection/packages/interface/src/properties.interface.ts
[2]: https://angular.io/api/core/ChangeDetectorRef
[3]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/property-wrapper