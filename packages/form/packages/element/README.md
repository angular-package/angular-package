<img src="http://ngx-form.wwwdev.io/color_logo_transparent_background.png" alt="ngx-form logo" title="ngx-form" align="right" width="128" />

# @ngx-form/element

[![npm version](https://badge.fury.io/js/%40ngx-form%2Felement.svg)](https://badge.fury.io/js/%40ngx-form%2Felement)
[![GitHub version](https://badge.fury.io/gh/ngx-form%2Felement.svg)](https://badge.fury.io/gh/ngx-form%2Felement)
[![Package Quality](http://npm.packagequality.com/shield/ngx-form.svg)](http://packagequality.com/#?package=ngx-form)
[![Known Vulnerabilities](https://snyk.io/test/npm/@ngx-form/element/badge.svg)](https://snyk.io/test/npm/@ngx-form/element)
[![Semver](http://img.shields.io/SemVer/2.0.0.png)](http://semver.org/spec/v2.0.0.html)
[![GitHub issues](https://img.shields.io/github/issues/ngx-form/element.svg)](https://github.com/ngx-form/element/issues)
[![GitHub forks](https://img.shields.io/github/forks/ngx-form/element.svg)](https://github.com/ngx-form/element/network)
[![GitHub stars](https://img.shields.io/github/stars/ngx-form/element.svg)](https://github.com/ngx-form/element/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ngx-form/element/master/LICENSE)

Angular 2+ module to dynamically create previously configured html form element using `config` attribute.

----

* [Documentation site](#documentation)
* [Installation](#installation)
* [Usage](#usage)
* [Style guide](#style-guide)
* Git
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Documentation

[http://ngx-form.wwwdev.io](http://ngx-form.wwwdev.io)

## Installation

To install, run:

```bash
npm install --save @ngx-form/element
```

## Usage
```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// internal
import { FormElementModule } from '@ngx-form/element';
import { InputComponent } from './input.component';
import { SelectComponent } from './select.component';

@NgModule({
  entryComponents: [
    InputComponent,
    SelectComponent
  ],
  imports: [
    // external
    BrowserModule,
    ReactiveFormsModule,

    // internal
    FormElementModule.forRoot({
      elements: [
        {
          name: 'input',
          component: InputComponent // your component here
        },
        {
          name: 'select',
          component: SelectComponent // your component here
        }
      ]
    })
  ],
  declarations: [ ]
})
export class ExampleModule { }
```

## Style guide

[Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)   

## GIT

### Commit
- [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
- [Karma git commit](http://karma-runner.github.io/0.10/dev/git-commit-msg.html)

### Versioning
Semantic Versioning 2.0.0 http://semver.org/

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

MIT © ngx-form

## Donate
[Click to donate](https://donorbox.org/help-creating-open-source-software)
