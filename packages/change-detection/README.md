# change-detection

Decorator to improve application performance by setting initially change detection component state to `Detached` and detect changes on indicated properties on `set`.

```typescript
import { ApChangeDetection } from '@angular-package/change-detection';
```
```typescript
@ApChangeDetection(properties: PropertiesInterface)
```

| name       | Type           | Description |
|------------|----------------|-------------|
| properties | PropertiesInterface<br /> **{[index:string]:boolean}** | If change detection is set to `Detached`, properties provided with `index` as name and value `true` will be sensitive for changes. |


**Pros(+):**
* Treeshake bundle with **[Rollup](https://rollupjs.org/#introduction)** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Detection are controlled by component property `__properties: PropertiesInterface`.
* Component initially is `Detached` from change detection tree which improves application performance.
* Uses `set` to detect indicated property changes.

**Cons(-):**
* Cannot indicate new properties dynamically.
* Need to inject `ChangeDetectorRef` instance as usually.
* There are no tests.

**Improvements**
* There is no need to use any angular lifecycle hook, because it is initialized by specifying component property `_detection: boolean` value.

**Important!**
* Set `ChangeDetectionStrategy.OnPush` in component.
* Inject `ChangeDetectorRef` in component.
* Initialize detection by setting `_detection: boolean` property component. 
* For better understanding what you can do in component extend it with `ApChangeDetectorAClass`.

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Usage](#usage)
* [Scripts](#scripts)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----


## Demonstration

**Available**

[Live demonstration](http://angular-package.wwwdev.io/change-detection)

Demo available inside repository.

## Installation

Install `@angular-package/change-detection` package with command:

```bash
npm i --save @angular-package/change-detection@1.0.0
```

Install `peerDependencies`:

```bash
npm i --save @angular-package/core@0.1.5
```

## Usage

**1. Add to any component of your application `ApChangeDetection` decorator like in `component.ts` below.**
```typescript
// component.ts
// external
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ApChangeDetection } from '@angular-package/change-detection';
import { ApChangeDetectorAClass } from '@angular-package/change-detection/change-detector';
import { ApPropertiesInterface } from '@angular-package/change-detection/interface';

@Component({
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-changedetection-component',
  templateUrl: './component.html',
  styleUrls: [ 'component.scss' ]
})
@ApChangeDetection<ChangeDetectionComponent>({
  name: false,
  surname: true
})
export class ChangeDetectionComponent implements ApChangeDetectorAClass {

  // Whether change detection is active or not. If false, change detection status is set to `Detached`. 
  // If true, change detection status is set to `CheckOnce` because of OnPush.
  public _detection = false; // <--- Required. Initialize detection.
  public _properties: ApPropertiesInterface; // --- Not required.

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

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  update($event) {
    this._properties = this._properties;
    console.log(`update`, $event, this);
  }
}
```

**2. Template file `component.html` of component above displays name and surname, and add some inputs to check how it works.**
```html
<!-- component.html -->
{{_detection}}
<div>
  <mat-checkbox name="detection" [(ngModel)]="_detection">
    Component change detection
    <small>Means Detached when false</small>
  </mat-checkbox>
  <div>
    <mat-form-field>
      <input matInput placeholder="Name" name="name" [(ngModel)]="name" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="_properties.name" *ngIf="_detection === false" >
      Detect changes in property
      <small>When component is detached</small>
    </mat-checkbox>
  </div>
  <div>
    <mat-form-field>
      <input matInput placeholder="Surname" name="surname" [(ngModel)]="surname" />
    </mat-form-field>
    <mat-checkbox (change)="update($event)" [(ngModel)]="_properties.surname" *ngIf="_detection === false">
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
