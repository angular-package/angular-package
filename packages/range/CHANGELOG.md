
# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.0.0-rc.0] - 2022-02-27

### [1.0.0-rc.0] Fixed

- Fix the `setValueToStep()` method by removing defining the value property.

[04d2d32]: https://github.com/angular-package/range/commit/04d2d3218b544ff560aa248cdacbb60ad284bd5f

## [1.0.0-rc] - 2022-02-26

### [1.0.0-rc] Added

- `Number` object. [32c36d4]
- `value` parameter of number type to the static `create()` method and `constructor()`. [622847e]
- private `#value` property that indicates the range current value of the number type. [622847e]
- `get` accessor `value` to retrieve the range value. [622847e]
- `set` accessor `value` to set the `#range` property including range of specified object. [622847e]
- `get` accessor `steps` to retrieve the number of steps. [622847e]
- the `getCurrentRange()` `getCurrentStep()` `getValueOfStep()` `setValue()` `setValueToStep()` `valueDown()` `valueUp()` methods. [622847e]

### [1.0.0-rc] Changed

- Add the `step` parameter to check in the static `isRange()` method. [870c5e4]
- `get` accessor `range`  to use `getRange()` method of instance and its return type to readonly. [622847e]
- the `getRange()` method to obtains the range to the specified value. [622847e]
- the `isBetween()` `isBetweenEvery()` `isBetweenSome()` methods to include minimum and maximum. [622847e]
- `forEachStep()` method parameter names and set `range` parameter type to readonly. [622847e]

### [1.0.0-rc] Deprecated

- Deprecate the `getMin()` `getMax()` `valueOf()` `toArray()` methods. [622847e]

[870c5e4]: https://github.com/angular-package/range/commit/870c5e4abb6addf140d6ae85ad7018b8ea117280
[32c36d4]: https://github.com/angular-package/range/commit/32c36d4ea5f3b7745571cb4034cd8e887aac2a00
[622847e]: https://github.com/angular-package/range/commit/622847e0d3042da88137e8a36c69fdeb3a8b7054

## [1.0.0-beta.0] - 2022-02-22

### [1.0.0-beta.0] Added

- Generic type variable `Step` of default value 1 and the `step` parameter in the constructor that uses it [e0aaca9]
- The `stepByStep()` method that performs a callback function with the ability to decide when to move to the next step of the range. [e0aaca9]
- The `getRange()` method to return a range of numbers from minimum to maximum with the step. [e0aaca9]
- The `forEachStep()` method to perform the specified action for each step in the range of an array. [e0aaca9]
- The `get` accessor `range` that obtains the range of an `array` number from the minimum to the maximum with the step of a specified `Range` object. [e0aaca9]
- The `get` accessor `step` that obtains the step of a specified `Range` object. [e0aaca9]
- The `#step` private property of the generic type variable `Step` that indicates the range step. [e0aaca9]
- The`step` parameter to the static `create()` method of generic type variable `Step`. [e0aaca9]

[e0aaca9]: https://github.com/angular-package/range/commit/e0aaca9b5bc146e06278752979d825f4832c0502
