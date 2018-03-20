
# @angular-package/docs/example

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
* [Usage](#usage)
* [Inputs](#inputs)
* [Style guide](#style-guide)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

[Live demonstration](http://angular-package.wwwdev.io/docs/example)

Clone this repository:

```bash
git clone https://github.com/angular-package/angular-package.git
```

Go to `packages/docs/src/example/demo` folder, in command line write the following:

```bash
npm i && npm start
```

Open [http://localhost:4200/](http://localhost:4200) in your browser.



## Installation

Install package `@angular-package/docs` with the following command:

```bash
npm i --save @angular-package/docs
```

Add `peerDependencies` packages with the following command:

```bash
npm i --save @angular/flex-layout@2.0.0-beta.12 @angular/material@5.0.3 @angukar/cdk@5.0.3 @angular-package/prism@2.0.0 @types/prismjs@1.9.0 prismjs@1.9.0 @ngx-markdown/core@0.2.2
```

You are ready to use it.



## Usage

Usage example on `@angular/cli`.

**Step 1.** Add to `style.scss` file:

```scss
@import "~@angular-package/docs/example/src/docs-example.scss"; // added
@import "~@angular-package/docs/api/src/docs-api.scss"; // added
@import "~prismjs/themes/prism.css"; // added
@import "~@angular/material/prebuilt-themes/indigo-pink.css"; // added
```

**Step 2.** File `app.module.ts` should look like below:

```typescript
```

**Step 3.** Then, in component `app.component.ts` file, do:

```typescript
```

**Step 4.** Finally, in your html `app.component.html`, write the following code:

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
  </div>
  <div class="debug">
  </div>
</ngx-docs-example>
```

If you still have any problems to integrate it with your project, check `demo` folder in this repository, perhaps it will help you figure it out.

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
