
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.0.0-rc] - 2022-02-16

### [3.0.0-rc] Added

- Add `define()`, `isValidationError()` static method to the `ValidationError` object. [b261662] [eb2d8e2]
- Add the generic type variable `Id` to the `ValidationError`. [eb2d8e2]
- Add `[Symbol.toStringTag]()` get accessor to return the object different class name. [eb2d8e2]
- Add `ValidationErrors` object that is is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of the `ValidationError` type are prepared to throw. [43a0162]
- Add `TypeErrors` object that is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of the `TypeError` type are prepared to throw. [ff2feeb]
- Add `TypeError` object that is an extension of the `CommonError` class and is thrown when an operation could not be performed, typically(but not exclusively) when a value is not of the expected type, with the message built from the described problem and its solution, optional an explicit identification and type, on the given or stored template. [8112c16]
- Add `RangeErrors` object that is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of the `RangeError` type are prepared to throw. [72b8582]
- Add `RangeError` object that is an extension of the `CommonError` class and is thrown when a value is not in the set or range of allowed values with the message built from the described problem and its solution, optional explicit identification and minimum/maximum range on the given or stored template. [77e4e0a]
- Add `Errors` object that is an extension of the `CommonErrors` object that represents multiple identification numbers under which the errors of the `Error` type are prepared to throw. [a5f391c]
- Add `Error` object that is an extension of the `CommonError` class and is thrown when a runtime error occurs with a message built from a solution to the described problem but with additional identification, on the template. [789083e]
- Add `CommonErrors` object that represents the storage of errors with unique identification numbers. [a17461b]
- Add `CommonError` abstract object to throw an identified error with a solution to the described problem, additional type, and range built on the template. [9089375]

### [3.0.0-rc] Changed

- Change the `constructor()` of the `ValidationError` to use direct parameters instead of object.
- Change `#tpl` property to `#template` and the default value to `Problem{id}: {problem} => Fix: {fix}`.
- Change the property `name` to `name` accessor.

### [3.0.0-rc] Removed

- Remove `#callback` private property from the `ValidationError` to simplify the object.
- Remove `VEAllowedCallback` type and `ErrorMessage` interface to simplify the object. [00229cd] [30716b2]
- Remove `set problem()`, `set message()`, `set fix()`, `set template()` accessors of an `ValidationError` instance. [b261662]
- Remove `#guardMessage()`, `#guardTemplate()`, `defineMessage()`,  static method from the `ValidationError()`. [b261662]
- Remove `updateMessage()`, `throw()`, `setTemplate()`, `setProblem()`, `setMessage()`, `setFix()` instance method from the `ValidationError()`. [b261662]

[eb2d8e2]: https://github.com/angular-package/error/commit/eb2d8e243ff6ee5f44fd00e4d462d2b2c175702a
[b261662]: https://github.com/angular-package/error/commit/b2616625bb80790f97da9138f75305ceb3c55af2
[30716b2]: https://github.com/angular-package/error/commit/30716b22970218bb4745d0482908e55138467833
[00229cd]: https://github.com/angular-package/error/commit/00229cda3f116766df5d1872519184332ee0402d
[43a0162]: https://github.com/angular-package/error/commit/43a01628af2a73aa428d7d6bcb48e9c3a1c755f3
[ff2feeb]: https://github.com/angular-package/error/commit/ff2feebe48fdb1b3f8bfe3c58cedc09c8b6402df
[8112c16]: https://github.com/angular-package/error/commit/8112c166a2a7848b166bd4a45996f6e24b42862e
[72b8582]: https://github.com/angular-package/error/commit/72b8582f848075c27bd97ae8a05bed29c287ffd9
[77e4e0a]: https://github.com/angular-package/error/commit/77e4e0a3760150a515f3a59b5efd5c779221427e
[a5f391c]: https://github.com/angular-package/error/commit/a5f391cbdb3a9a756b0f730bdc3c63232889ce0b
[789083e]: https://github.com/angular-package/error/commit/789083e5c79d6ee0f1f098bcc5a352a8dccf939b
[a17461b]: https://github.com/angular-package/error/commit/15a40397a17461bbd735079c3544c4c44f7b3f45
[9089375]: https://github.com/angular-package/error/commit/908937597024576ad5d47fd1f1af652c1a2cc265

## [2.0.2] - 2021-08-12

### 2.0.2 Fixed

- [`ff06f3a`][ff06f3a]  
  Fixed `package.json` peer dependencies cause of `@angular-package/callback`. 

[ff06f3a]: https://github.com/angular-package/error/commit/ff06f3ae1b5c922c7605a7fb6301dd238b9e1b7a

## [2.0.1] - 2021-08-12

### 2.0.1 Fixed

- [`c77f3cf`][c77f3cf]  
  Fix JS documentation of `ValidationError`.  

- [`bc8e965`][bc8e965]  
  Fix documentation of `README.md`.  

[c77f3cf]: https://github.com/angular-package/error/commit/c77f3cfc8f7958dbfa29022d2e564d6095c2dc65
[bc8e965]: https://github.com/angular-package/error/commit/bc8e9653bd5e5546f2a3df2d6d6f18bcefea192b

## [2.0.0] - 2021-08-12

### 2.0.0 Added

- [`069d111`][069d111]  
  Add static private property `#template` of a `string` type.  
  Add private instance `#callback` property of [`Callback`][package-callback] instance.  
  Add private instance `#fix`,  `#problem`, `#tpl` property.  
  Add pubic methods [`setFix()`][error-method-setfix], [`setMessage()`][error-method-setmessage], [`setProblem()`][error-method-setproblem], [`setTemplate()`][error-method-settemplate], [`throw()`][error-method-throw], [`updateMessage()`][error-method-updatemssage] of an instance.  
  Add static private methods `#guardMessage()`, `#guardTemplate()`.  
- [`4040750`][4040750]  
  Add an optional property `template` to the [`ErrorMessage`][error-interface-errormessage] interface.
- [`0d5cc92`][0d5cc92]  
  Add [`VEAllowedCallback`][error-type-veallowedcallback] type of allowed names for internal instance of [`Callback`][package-callback].

[069d111]: https://github.com/angular-package/error/commit/069d111220b63c2d2cdbffa499f3588121f14e16
[4040750]: https://github.com/angular-package/error/commit/40407503893484874e588b8b5b42c6e40a5fc3ab
[0d5cc92]: https://github.com/angular-package/error/commit/0d5cc920b7e5c750f77099580ec2f53070d3cac7

### 2.0.0 Changed

- [`069d111`][069d111]  
  Changed static public [`template`][error-static-template] property to use static private `#template` property that is guarded by the private static `#guardTemplate()` method.  
  Changed instance [`fix`][error-property-fix] property to use private `#fix`.  
  Changed instance [`problem`][error-property-problem] property to use private `#problem`.  
  Changed public static [`defineMessage()`][error-method-static-definemessage] method to use private static `#guardMessage()` to guards the provided `message`.  
  Changed constructor to use public [`setMessage()`][error-method-setmessage] method and add new `callback` parameter to handle private instance of [`Callback`][package-callback].  
- [`0708846`][0708846] [`bcc6521`][bcc6521] [`0bbd886`][0bbd886]  
  Updated [`README.md`](https://github.com/angular-package/error#readme).

[0bbd886]: https://github.com/angular-package/error/commit/0bbd88630e0a695ab4865903c83bda7b2e56dfef
[bcc6521]: https://github.com/angular-package/error/commit/bcc652139613a7f8ef721cd12bc076fde3edadb8
[0708846]: https://github.com/angular-package/error/commit/0708846f6bc3de0fa080e5f58fa4a36adfcb7dcd

## [1.0.3] - 2021-08-06

### 1.0.3 Added

- [`5752d9e`][5752d9e]  
  Tests for the `MessageFunctionBuilder`.
- [`488270d`][488270d]  
  Tests for the `MessageBuilder`.

[5752d9e]: https://github.com/angular-package/error/commit/5752d9e7b3631dcca0d6945e25a92d1fdfb9eee3
[488270d]: https://github.com/angular-package/error/commit/488270d4c88f8575c8289022559e4f8ce1de828b

### 1.0.3 Changed

- [`5bd6a2b`][5bd6a2b]  
  jsdoc description of the `MessageBuilder`.
- [`1dffd31`][1dffd31]
  Updated `README.md`.

[5bd6a2b]: https://github.com/angular-package/error/commit/5bd6a2bf8dc98db6666f8d84bb28771357f17105
[1dffd31]: https://github.com/angular-package/error/commit/1dffd31ab4db736a4f583ac4d3c1994c92da92ea

### 1.0.3 Fixed

- [`5427c65`][5427c65]  
  Add message builder to api.

[5427c65]: https://github.com/angular-package/error/commit/5427c6585ddebe01bc6e3733425e07b924ec0ca6

----

## [1.0.2] - 2021-08-04

### 1.0.2 Update

- Update `README.md`.

### 1.0.2 Fix

- [`253dda9`][253dda9]  
  Fixes the `homepage` link in the `package.json`.

[253dda9]: https://github.com/angular-package/error/commit/253dda9b0cd14d7766f7ac3da33e4aaf35af1193

## [1.0.1] - 2021-08-04

### 1.0.1 Fix

- [`ab8729f`][ab8729f]  
  Remove unnecessary peer dependencies.

[ab8729f]: https://github.com/angular-package/error/commit/ab8729f3627d63729326ddfd354296c2ae800c33

[error-method-static-definemessage]: https://github.com/angular-package/error#validationerrordefinemessage

[error-method-setfix]: https://github.com/angular-package/error#validationerrorprototypesetfix
[error-method-setmessage]: https://github.com/angular-package/error#validationerrorprototypesetmessage
[error-method-setproblem]: https://github.com/angular-package/error#validationerrorprototypesetproblem
[error-method-settemplate]: https://github.com/angular-package/error#validationerrorprototypesettemplate
[error-method-throw]: https://github.com/angular-package/error#validationerrorprototypethrow
[error-method-updatemssage]: https://github.com/angular-package/error#validationerrorprototypeupdatemssage

[error-static-template]: https://github.com/angular-package/error#validationerrortemplate
[error-type-veallowedcallback]: https://github.com/angular-package/error#veallowedcallback
[error-interface-errormessage]: https://github.com/angular-package/error#errormessage

[package-callback]: https://github.com/angular-package/callback

[error-property-fix]: https://github.com/angular-package/error#validationerrorprototypefix
[error-property-message]: https://github.com/angular-package/error#validationerrorprototypemessage
[error-property-problem]: https://github.com/angular-package/error#validationerrorprototypeproblem