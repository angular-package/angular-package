# Changelog 'core' package

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- [[d4edb1b]][4] property `styles` to store console style in `ConsoleClass`.
- [[745adcd]][3] `ConsoleClass` class to handle `console`.
- [[b9f8249]][2] function to guard types.
- [[3beffaa]][1] type `GenericObject`, export `getProperty`, `PrefixSuffixClass`, `setProperty`.
- [[0869005]][0] features for handling arguments, attribute and class HTMLElement - `handler`.

### Changed

- [[b4e7b5f]][6] `ComponentLoaderConfigInterface` by adding `Type` to component.
- [[85521ad]][5] `PrefixSuffixClass` by extending it with `ArgumentHandlerClass`.
- [[d4edb1b]][4] `ConsoleClass` properties and methods.

### Removed

- [[d4edb1b]][4] `ConsoleClass` method `faint()` because it is style.

<!--- ## [0.0.1] - 2018-07-31 
[0]: https://github.com/angular-package/angular-package/commit/95062043c699d83ba8e3ddbce58cdcfef3a30bf8
-->

[Unreleased]: https://github.com/angular-package/angular-package/compare/core
[6]: https://github.com/angular-package/angular-package/commit/b4e7b5fd052e5a2a356803c05238332ebddd92f7#diff-f920a4a873d49229ef05aded882805fb
[5]: https://github.com/angular-package/angular-package/commit/85521ad4fe2c589b6d650dbffc63b4c847cf6629#diff-d36826e8d9c0d5eba4f3aa69193b33b2
[4]: https://github.com/angular-package/angular-package/commit/d4edb1b4da61a2db75820d701d15a6dd43f397c0#diff-d36826e8d9c0d5eba4f3aa69193b33b2
[3]: https://github.com/angular-package/angular-package/commit/745adcd5b3ed7b9b2433b08628a5533a56069000#diff-d36826e8d9c0d5eba4f3aa69193b33b2
[2]: https://github.com/angular-package/angular-package/commit/38b12f5b55d85be9b59751c6d89b2235b3f6a04f#diff-d36826e8d9c0d5eba4f3aa69193b33b2
[1]: https://github.com/angular-package/angular-package/commit/3beffaaaf2386e76fa87d149feaf175f6a1dbbcf#diff-d36826e8d9c0d5eba4f3aa69193b33b2
[0]: https://github.com/angular-package/angular-package/commit/0869005f02bc9f22a8f1a79a618776361419ec2d#diff-f9b75d3f4a86ce55f779e3d4c6c8f6bc
