# @angular-package/core/property

[![npm version](https://badge.fury.io/js/%40angular-package%2Fcore.svg)](https://badge.fury.io/js/%40angular-package%2Fcore)
[![Gitter join](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/angularpackage/core)
[![GitHub license](https://img.shields.io/github/license/angular-package/angular-package.svg)](https://github.com/angular-package/angular-package/blob/master/LICENSE)

[Class][407] to help link [component][501] [properties][406] with e.g. [service][407] [properties][406] by using [set][403]/[get][404].

```typescript
import { PropertyClass } from '@angular-package/core/property';
```

```typescript
new PropertyClass(
  prefix?: string,  // New property prefix name.
  suffix?: string   // New property suffix name.
);
```

 Parameter | Type | Description
-----------|------|-------------
 prefix? | string | New property **prefix** name e.g. `_` then `_name`.
 suffix? | string | New property **suffix** name e.g. `_` then `name_`.

**Pros(+):**

* Treeshake bundle with **[Rollup][400]** - module bundler for JavaScript.
* **AOT** (Ahead Of Time Compilation) package: *faster rendering*, *fewer asynchronous requests*, *smaller Angular framework download size*, *detect template errors earlier*, *better security*.
* **MIT** License: it can be used commercially.
* It uses `PrefixSuffixClass`.
* It uses `@angular-package/core/store` to store [set][403]/[get][404] and cycle hooks.
* Bind [component][501] [property][406] e.g. to [service][502] [property][406].
* Wrap [component][501] [property][406] with specific functionality. e.g. to [service][502] [property][406].
* Remove wrap/bind from [property][406] and return to original.
* [Decorator][500] [@BindProperty()][5] to easy handle bind method.
* Tested with [`@angular-package/core/testing`][4].

**Cons(-):**

* Methods `bind()`, `clear()`, `wrap` have "try catch" hack because of unrecognized error.
* It is possible to `wrap` only once. (Multiple wrapping should be in the next version)

**Important:**

* `PropertyClass` extends `PrefixSuffixClass` to handle new property name on use method `wrap()`. Default value for `prefix` is `_`, so without any changes new property wrapped name for `firstname` is `_firstname`.

*Please, give feedback about found any pros and especially cons.*

----

* [Demonstration](#demonstration)
* [Installation](#installation)
* [Methods](#methods)
  * [Bind()](#bind)
  * [Clear()](#clear)
  * [Get()](#get)
  * [Set()](#set)
  * [Wrap()](#wrap)
* [Usage](#usage)
* [Structure](#structure)
* [Style guide](#style-guide)
* [Git](#git)
* [License](#license)
* [Donate](#donate)

----

## Demonstration

## Installation

```bash
npm i @angular-package/core@latest --save
```

## Methods

Below listed all possible to use public methods.

### Bind()

Bind source [component][501] specified [properties][406] to the target [properties][406].
It uses `set`/`get` and original `set` is in use. It can be done **once**.

```typescript
bind<S, T = string>(source: Function | S, properties: string | Array<string>, target: T): this
```

Argument | Type | Description |
---------|------|-------------|
source | Function \| S | [Component][501] to bind its [properties][406] to the target. |
properties| string\|Array\<string\> | Source and target [properties][406] names to bind. |
target | T | Object that source is bind to. |

### Clear()

Return back specified properties to original `set`/`get` values.

```typescript
clear<S>(source: S, properties?: string | Array<string>): this
```

Argument | Type | Description |
---------|------|------------ |
source | S | [Component][501] object. |
properties| string\|Array\<string\> | Name or list of properties names. |

### Get()

Get component property value by using lodash `get()` function.

```typescript
get<PT>(source: Object, path: string): PT
```

Argument | Type | Description |
---------|------|------------ |
source | Object | The object to get path value from. |
path | string | The path of the property to get. |

### Set()

Set component property value by using lodash `set()` function.

```typescript
set<PT>(source: Object, path: string, value: PT): Object
```

Argument | Type | Description |
---------|------|------------ |
source | Object | The object to modify. |
path | string | The path of the property to set. |
value | PT | The value to set with specified `PT` type. |

### Wrap()

Method to wrap specified properties `set`/`get` with callback function.

```typescript
wrap<S, R = any>(source: Function | S, properties: string | Array<string>, setter?: Setter<S, R>, getter?: Getter<S, R>): this
```

Argument | Type | Description |
---------|------|------------ |
source | Object | Function or [component][501]. |
properties | string\|Array\<string\> | Names of properties to be wrapped. |
setter? | Setter\<S, R\> | Callback function invoked on set. |
getter? | Getter\<S, R\> | Callback function invoked on get. |

## Usage

Example **`PropertyClass`** usage:

```typescript
// external
import { Component, OnInit } from '@angular/core';
import { PropertyClass } from '@angular-package/core/property';

@Component({
  selector: 'your-component',
  template: ''
})
export class YourExistingComponent implements OnInit {

  propertyClass: PropertyClass = new PropertyClass(); // <--- Instantiate `PropertyClass`.
  checker = false;
  checker_true = true;
  checker_false = false;

  firstname = 'my firstname';
  surname = 'my surname';

  data = {
    firstname: 'my firstname',
    surname: 'my surname',
    age: 27
  };

  _age: number;
  _setAge: number = undefined;
  set age(age: number) {
    this._age = age;
    this._setAge = age;
  }
  get age(): number {
    return this._age;
  }

  target: Object = {
    firstname: undefined,
    surname: undefined
  };

  constructor() {
    this.age = 27;
  }

  ngOnInit(): void {
    // Bind `firstname` component property to component property `target.firstname`.
    this.propertyClass.bind<YourExistingComponent, Object>(this, ['firstname'], this.target);

    // Bind `firstname` component property to component property `target.firstname`.
    this.propertyClass.bind<YourExistingComponent, Object>(this, ['firstname'], this.target);
}
}
```

## Structure

Folders and files [structure][301].

## Style guide

Coding with included [style guides][302].

## GIT

Git commit conventions and versioning described [here][300].

## License

MIT © angular-package ([license][303])

## Donate

Package is under [MIT License][303]. Feel invited to help to maintain it with your programming skills, you can also [donate by Donorbox][100] or by [paypal][101].

**Why donate ?**
**wwwdev.io** organization is non-profit, has a volunteer board, no employees or any paid person. Its goal is to work on **javascript/typescript** software, especially dedicated to [angular.io][508] framework and to help open-source software grow by using [MIT License][303] which allows it to be used comercially. So, it is hope you consider supporting our efforts.

[![donate](https://www.paypalobjects.com/en_US/PL/i/btn/btn_donateCC_LG.gif)][101]

<!--- This package -->
[0]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/component-loader#readme
[1]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/handler#readme
[2]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/property#readme
[3]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/store#readme
[4]: https://github.com/angular-package/angular-package/tree/master/packages/core/packages/testing#readme
[5]: https://github.com/angular-package/angular-package/tree/core/packages/core/packages/property/bind

<!--- General -->
[100]: https://donorbox.org/help-creating-open-source-software
[101]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V98VLPSG6NQA6

<!--- @angular-package -->
[300]: https://github.com/angular-package/angular-package/blob/master/GIT.md
[301]: https://github.com/angular-package/angular-package/blob/master/ORGANIZATION.md
[302]: https://github.com/angular-package/angular-package/blob/master/STYLE-GUIDE.md
[303]: https://github.com/angular-package/angular-package/blob/master/LICENSE

<!--- Other -->
[400]: https://rollupjs.org/#introduction
[401]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
[402]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[403]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[404]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[405]: https://jasmine.github.io/2.0/introduction
[406]: https://www.w3schools.com/js/js_object_properties.asp
[407]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[408]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!--- @angular -->
[500]: https://angular-2-training-book.rangle.io/v/v2.3/handout/features/decorators.html
[501]: https://angular.io/api/core/Component
[502]: https://angular.io/tutorial/toh-pt4
[503]: https://angular.io/api/core/ChangeDetectorRef
[504]: https://angular.io/api/core/testing/TestModuleMetadata
[505]: https://angular.io/api/core/Type
[506]: https://angular.io/guide/dynamic-component-loader
[507]: https://angular.io/guide/lifecycle-hooks
[508]: https://angular.io/