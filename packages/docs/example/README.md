
# @angular-package/docs

**ApDocsExampleModule**   
Angular 5+ module to display code examples to create documentation. 

**Pros(+):**
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* Style with css `--var` by `config` or `forRoot`.
* Component changeDetection is set to `OnPush` - it gives better overall performance.
* Live `@angular/cli` usage demonstration and demo inside repository.
* No known vulnerabilities found by `snyk.io`.
* It uses [@angular/material](https://github.com/angular/material2).
* Responsive design with [@angular/flex-layout](https://github.com/angular/flex-layout).


**Cons(-):**
* Need to change `@Input()` instance to have changes visible on template.
* Tests are not ready yet.

Image preview: 

![Image preview](http://ngx-docs.wwwdev.io/example/preview.png)

----

## Table of contents
* [Demonstration](#demonstration)
* [Installation](#installation)
* [Inputs](#inputs)
* [Usage](#usage)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

[Live demonstration](http://angular-package.wwwdev.io/example)

Clone this repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to `packages/docs/example/demo` folder, in command line write the following:

```bash
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200) in your browser.



## Installation

Install package `@angular-package/docs` with the following command:

```bash
npm i --save @angular-package/docs
```

In the next step, add `peerDependencies` packages with the following command:

```bash
npm i --save @angular/flex-layout@2.0.0-beta.10-4905443 @angular/material@5.0.2 @angukar/cdk@5.0.2 @angular-package/prism@2.0.0 @types/prismjs@1.9.0 prismjs@1.9.0
```

You are ready to use it.


## Inputs

All `@Input` properties in table below.

| Name | Type | Description |
|----------|----------------|---------------------------|
| config | PackageConfigInterface | Example window `css` style property. |
| css  | string | Expanded **example** `css` style. |
| html | string | Expanded **example** `html` code. |
| launch | LaunchInterface {location: string, tooltip: string} | Launch right top corner button `location` and `tooltip`. |
| title | string | Title of **example**. |
| ts | string | Expanded **example** `typescript` code. |


**PackageConfigInterface**

| Name | Type | Default |
|----------|----------------|---------------------------|
| border  | string | 1px solid rgba(0,0,0,.03) |
| body-font-size  | string | 0.875em |
| box_shadow  | string | 0 2px 2px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12) |
| source-font-size  | string | 0.875em |


## Usage

Now, import new installed modules into your, like in below `@angular/cli` example:

File `app.module.ts`, forms are added only for this example:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // added
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @angular-package
import { ApDocsExampleModule } from '@angular-package/docs'; // added

// internal
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule, // added
    BrowserModule,
    FormsModule, // added
    ReactiveFormsModule,

    // @angular-package/docs
    ApDocsExampleModule.forRoot({
      border: '1px solid red',
      box_shadow: '0 0 225px red'
    }), // added

    // or just simple
    // ApDocsExampleModule,

    MatButtonModule, // added
    MatInputModule // added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then, in component, and this `@angular/cli` example `app.component.ts` file, do:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config = { box_shadow: '0 0 15px #bfbfbf', border: '1px solid #d72000' };
  title = 'Inputs in a form';
  launch = { location: 'https://plnkr.co/edit/?p=preview', tooltip: `Edit in plunker` };
  html = `
<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Company (disabled)" disabled value="Google">
  </mat-form-field>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="First name">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="Long Last Name That Will Be Truncated">
    </mat-form-field></td>
  </tr></table>

  <p>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address">1600 Amphitheatre Pkwy</textarea>
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <textarea matInput placeholder="Address 2"></textarea>
    </mat-form-field>
  </p>

  <table class="example-full-width" cellspacing="0"><tr>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="City">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput placeholder="State">
    </mat-form-field></td>
    <td><mat-form-field class="example-full-width">
      <input matInput #postalCode maxlength="5" placeholder="Postal Code" value="94043">
      <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
    </mat-form-field></td>
  </tr></table>
</form>
  `;
  ts = `
import {Component} from '@angular/core';

/**
 * @title Inputs in a form
 */
@Component({
  selector: 'input-form-example',
  templateUrl: 'input-form-example.html',
  styleUrls: ['input-form-example.css'],
})
export class InputFormExample {}
  `;
  css = `
.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}
  `;

  form: FormGroup;
  payload: string;

  constructor(public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstname: 'Ścibor',
      lastname: 'Rudnicki',
      address: 'Głuszyna',
      city: 'Poznań',
      postalCode: '61-329'
    });

  submit(form) {
    this.payload = JSON.stringify(form.value);
    console.log(JSON.stringify(form.value));
    return false;
  }
}

```

Finally, in your html, and in this `@angular/cli` example `app.component.html`, write the following code:

```html
<ngx-docs-example
  [config]="config"
  [css]="css"
  [html]="html"
  [launch]="launch"
  [title]="title"
  [ts]="ts"
>
  <div class="body">
    <form class="example-form" (ngSubmit)="submit(form)" [formGroup]="form">
      <mat-form-field class="example-full-width">
        <input type="text" matInput placeholder="Company (disabled)" disabled value="Google">
      </mat-form-field>

      <table class="example-full-width" cellspacing="0"><tr>
        <td><mat-form-field class="example-full-width">
          <input type="text" name="firstname" matInput placeholder="First name" formControlName="firstname" required>
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="Long Last Name That Will Be Truncated" formControlName="lastname">
        </mat-form-field></td>
      </tr></table>

      <p>
        <mat-form-field class="example-full-width">
          <textarea matInput placeholder="Address" formControlName="address">1600 Amphitheatre Pkwy</textarea>
        </mat-form-field>
        <mat-form-field class="example-full-width">
          <textarea matInput placeholder="Address 2"></textarea>
        </mat-form-field>
      </p>

      <table class="example-full-width" cellspacing="0"><tr>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="City" formControlName="city">
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput placeholder="State">
        </mat-form-field></td>
        <td><mat-form-field class="example-full-width">
          <input matInput #postalCode maxlength="5" placeholder="Postal Code" formControlName="postalCode">
          <mat-hint align="end">{{postalCode.value.length}} / 5</mat-hint>
        </mat-form-field></td>
      </tr>
      </table>
      <button type="submit" mat-raised-button color="primary">Submit</button>
    </form>
  </div>
  <div class="debug">
    <h3>Submitted data:</h3>
    {{payload}}
  </div>
</ngx-docs-example>
```

If everything has been done perfectly, you have examples to create **code** documentation.
If you still have any problems to integrate it in your project, check `demo` folder in this repository, perhaps it will help you figure it out.


## Style guide

[Angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html) 

## GIT

### Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153
- http://karma-runner.github.io/0.10/dev/git-commit-msg.html

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

MIT © angular-package

## Donate

[Click to donate](https://donorbox.org/help-creating-open-source-software)
