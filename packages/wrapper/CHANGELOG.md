# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0] - 2022-02-02

### [1.0.0] Changed

- Changed the parameters default values of `isWrapped()` instance method to private `#opening` and `#closing`. [44bd1f5]
- Changed the default values of the `opening` and `closing` parameters in the static `unwrap()` method by removing them. [d8d0f4b]
- Changed the default value for the generic type variable `Text` of the `isWrapper()` static method to `string`. [d8d0f4b]
- Changed the `toStringTag` name from the `wrapper` to `Wrapper`. [d8d0f4b]
- Changed the `toStringTag` name from the `wrap` to `Wrap`. [4049e2e]

[44bd1f5]: https://github.com/angular-package/wrapper/commit/44bd1f54d82700440012caa5414a02ff8687ffb2
[d8d0f4b]: https://github.com/angular-package/wrapper/commit/d8d0f4bb029395a2de180fc38246a9ea81d7eb58
[4049e2e]: https://github.com/angular-package/wrapper/commit/4049e2ea09104ac155bf7b385789b40ca7b923c1
