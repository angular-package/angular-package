# Changelog 'property' package

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- [[530b708]][12] tokens for `prefix` and `suffix` properties.
- [[c1c7ff0]][11] methods `setPrefix()` `setSuffix()` to set `prefix` and `suffix` property to `PrefixSuffixClass`.
- [[c1b95d4]][4] [[541344c]][5] `Property` interface to `PropertyClass`.
- [[5e0a7e2]][1] [[1c7d729]][2] new tslint rules.

## Changed

- [[517d502]][9][[8230364]][10] class name to `PropertyService` and added `@Inject()` to constructor.
- [[a16fd50]][8] `matcher()` method by changing one of `result` condition to include `null` or `undefined`.
- [[f8ced2f]][7] argument order in `setter()` function.
- [[8bb7fcc]][6] `Setter` type parameters order to have optional `source` as second.
- [[788be88]][3] the way of testing package.
- [[3ef0443]][0] directory from property-wrapper to property.

<!--- ## [0.0.1] - 2018-07-31 -->

[Unreleased]: https://github.com/angular-package/angular-package/compare/core
<!--- [0.0.1]:  -->

[12]: https://github.com/angular-package/angular-package/commit/530b70857e2c22a69de740de323fd14a9cab0bae
[11]: https://github.com/angular-package/angular-package/commit/c1c7ff093bfcd6d8b9cabe494592b81cdae22ec5
[10]: https://github.com/angular-package/angular-package/commit/8230364b60a08cfb8eef9846269bf542c07107c2
[9]: https://github.com/angular-package/angular-package/commit/517d50276a41b6784ec133e0caa0b98927985fae
[8]: https://github.com/angular-package/angular-package/commit/a16fd50f1d2e19c942f0c3c6e749a61ead7b5eb4
[7]: https://github.com/angular-package/angular-package/commit/f8ced2f29bb87cb77be9c8961986354e883abdea
[6]: https://github.com/angular-package/angular-package/commit/8bb7fcc7576eba609a908b264418aba1416eb406
[5]: https://github.com/angular-package/angular-package/commit/541344ca2eb569be01a1d7225ecd61af956f444d
[4]: https://github.com/angular-package/angular-package/commit/c1b95d42f14a6acb5b0ce35457f2580a24b675d5
[3]: https://github.com/angular-package/angular-package/commit/788be88ccdfed5eb2f648a3b9ece25908cb4a254#diff-6bd2c2696cf9923be4fed157d9039ffa
[2]: https://github.com/angular-package/angular-package/commit/1c7d729be5a4ac53b4583483803a847d2c944bc3#diff-6bd2c2696cf9923be4fed157d9039ffa
[1]: https://github.com/angular-package/angular-package/commit/5e0a7e2bef1e4c21d88f02105b80fa0ca8314da6#diff-6bd2c2696cf9923be4fed157d9039ffa
[0]: https://github.com/angular-package/angular-package/commit/3ef044381cb905eafd0379113d44084b08c24afb#diff-6bd2c2696cf9923be4fed157d9039ffa
