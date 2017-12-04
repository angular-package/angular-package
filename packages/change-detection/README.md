# @angular-package/change-detection

Decorator to improve component performance by setting initially change detection state to `Detached` and detect changes on specified properties when `set`.


**(+)Pros:**
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Component change detection mechanism controll.
* Initially detached from change detection tree.
* Uses `set` to detect specified property changes.

**(-)Cons:**
* Need to provide instance of `ChangeDetectorRef`.

**Important!**
* Live demo and inside folder available soon.
* Set `ChangeDetectionStrategy` to `OnPush`.
* Provide `ChangeDetectorRef` to component `constructor()`.

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

**Not available yet**

[Live demonstration](#angular-package.wwwdev.io/change-detection)

## Installation

First, install `@angular-package/change-detection` package with command:

```bash
npm i --save @angular-package/change-detection
```

## Usage

```typescript
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { DetectChanges } from '@angular-package/change-detection';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'component',
  templateUrl:  './component.html'
})
@DetectChanges({
  name: { changeDetection: true },
  surname: { changeDetection: true }
})
export class Component {

  public _name: string;
  @Input('name')
  set name(name: string) {
    console.log(`set name: `, name);
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  public _surname: string;
  @Input('surname')
  set surname(surname: string) {
    console.log(`set surname: `, surname);
    this._surname = surname;
  }
  get surname(): string {
    return this._surname;
  }

  constructor(public cd: ChangeDetectorRef) { }
}
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

MIT © angular-package

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
