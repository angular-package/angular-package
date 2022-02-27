// Testing.
import { Testing } from '@angular-package/testing';
import { tests } from '../../execute-tests';
// Function.
import { recognizeValue } from '../src/recognize-value.func';
/*
  Initialize testing.
 */
const testing = new Testing(
  tests.recognize.recognizeValue.describe,
  tests.recognize.recognizeValue.it
);

class CustomClass {}
const customClass = new CustomClass();

const firstName = 'Artemis';


/*
  Tests.
*/
testing.describe(recognizeValue.name, () =>
  testing
    .toEqual(`NaN`, recognizeValue(NaN), {
      'Number.isNaN': true,
      isNaN: true,
      typeOf: 'number',
      typeof: 'number',
    })

    .toEqual(`Number.NaN`, recognizeValue(Number.NaN), {
      'Number.isNaN': true,
      isNaN: true,
      typeOf: 'number',
      typeof: 'number',
    })

    .toEqual(`0 / 0`, recognizeValue(0 / 0), {
      'Number.isNaN': true,
      isNaN: true,
      typeOf: 'number',
      typeof: 'number',
    })

    .toEqual(`true`, recognizeValue(true), {
      isFinite: true,
      typeOf: 'boolean',
      typeof: 'boolean',
    })

    .toEqual(`'NaN'`, recognizeValue('NaN'), {
      isNaN: true,
      typeOf: 'string',
      typeof: 'string',
    })

    .toEqual(`string = 2.0`, recognizeValue('2.0'), {
      isFinite: true,
      typeOf: 'string',
      typeof: 'string',
    })

    .toEqual(`new String(firstName)`, recognizeValue(new String(firstName)), {
      typeOf: 'string',
      typeof: 'object',
      isNaN: true,
      Object: true,
      String: true,
    })

    .toEqual(`CustomClass`, recognizeValue(customClass, true, [CustomClass]), {
      CustomClass: true,
      Object: true,
      isNaN: true,
      typeOf: 'object',
      typeof: 'object',
    })

    .toEqual(`CustomClass`, recognizeValue(CustomClass, true, [CustomClass]), {
      Function: true,
      Object: true,
      isClass: true,
      isNaN: true,
      typeOf: 'function',
      typeof: 'function',
    })

    .toEqual(`new Array()`, recognizeValue(new Array()), {
      Array: true,
      Object: true,
      'Array.isArray': true,
      isFinite: true,
      typeOf: 'array',
      typeof: 'object',
    })

    .toEqual(`Array`, recognizeValue(Array), {
      Function: true,
      Object: true,
      isFunction: true,
      isNaN: true,
      typeOf: 'function',
      typeof: 'function',
    })

    .toEqual(`new ArrayBuffer(50)`, recognizeValue(new ArrayBuffer(50)), {
      ArrayBuffer: true,
      Object: true,
      isNaN: true,
      typeOf: 'arraybuffer',
      typeof: 'object',
    })

    .toEqual(`new Boolean()`, recognizeValue(new Boolean()), {
      Boolean: true,
      Object: true,
      isFinite: true,
      typeOf: 'boolean',
      typeof: 'object',
    })

    .toEqual(
      `new DataView(new ArrayBuffer(16))`,
      recognizeValue(new DataView(new ArrayBuffer(16))), {
        DataView: true,
        Object: true,
        isNaN: true,
        typeOf: 'dataview',
        typeof: 'object'
      }
    )

    .toEqual(`new Date()`, recognizeValue(new Date()), {
      Date: true,
      Object: true,
      isFinite: true,
      typeOf: 'date',
      typeof: 'object',
    })

    .toEqual(`new Error()`, recognizeValue(new Error()), {
      Error: true,
      Object: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new EvalError()`, recognizeValue(new EvalError()), {
      Error: true,
      EvalError: true,
      Object: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new Int16Array()`, recognizeValue(new Int16Array()), {
      Int16Array: true,
      Object: true,
      isFinite: true,
      typeOf: 'int16array',
      typeof: 'object',
    })

    .toEqual(`new Int32Array()`, recognizeValue(new Int32Array()), {
      Int32Array: true,
      Object: true,
      isFinite: true,
      typeOf: 'int32array',
      typeof: 'object',
    })

    .toEqual(`new Int8Array()`, recognizeValue(new Int8Array()), {
      Int8Array: true,
      Object: true,
      isFinite: true,
      typeOf: 'int8array',
      typeof: 'object',
    })

    .toEqual(`new Map()`, recognizeValue(new Map()), {
      Map: true,
      Object: true,
      isNaN: true,
      typeOf: 'map',
      typeof: 'object',
    })

    // .toEqual(`new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('foo');
    //   }, 300);
    // })`, recognizeValue(new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('foo');
    //   }, 300);
    // })), {Promise: true, Object: true, typeOf: 'promise', typeof: 'object'})

    .toEqual(`new RangeError()`, recognizeValue(new RangeError()), {
      Error: true,
      Object: true,
      RangeError: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new ReferenceError()`, recognizeValue(new ReferenceError()), {
      Error: true,
      ReferenceError: true,
      Object: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new RegExp(/[^]/g)`, recognizeValue(new RegExp(/[^]/g)), {
      typeOf: 'regexp',
      typeof: 'object',
      isNaN: true,
      Object: true,
      RegExp: true,
    })

    .toEqual(`new Set()`, recognizeValue(new Set()), {
      Object: true,
      Set: true,
      isNaN: true,
      typeOf: 'set',
      typeof: 'object',
    })

    .toEqual(`new SyntaxError()`, recognizeValue(new SyntaxError()), {
      Error: true,
      SyntaxError: true,
      Object: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new Float32Array()`, recognizeValue(new Float32Array()), {
      Float32Array: true,
      Object: true,
      isFinite: true,
      typeOf: 'float32array',
      typeof: 'object',
    })

    .toEqual(`new Float64Array()`, recognizeValue(new Float64Array()), {
      Float64Array: true,
      Object: true,
      isFinite: true,
      typeOf: 'float64array',
      typeof: 'object',
    })

    .toEqual(`new Function()`, recognizeValue(new Function()), {
      Function: true,
      Object: true,
      isFunction: true,
      isNaN: true,
      typeOf: 'function',
      typeof: 'function',
    })

    .toEqual(`new Number(5)`, recognizeValue(new Number(5)), {
      Number: true,
      Object: true,
      isFinite: true,
      typeOf: 'number',
      typeof: 'object',
    })

    .toEqual(`new Object()`, recognizeValue(new Object()), {
      Object: true,
      isNaN: true,
      typeOf: 'object',
      typeof: 'object',
    })

    .toEqual(`new String()`, recognizeValue(new String()), {
      Object: true,
      String: true,
      isFinite: true,
      typeOf: 'string',
      typeof: 'object',
    })

    .toEqual(`new TypeError()`, recognizeValue(new TypeError()), {
      Error: true,
      Object: true,
      TypeError: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new Uint16Array()`, recognizeValue(new Uint16Array()), {
      Object: true,
      Uint16Array: true,
      isFinite: true,
      typeOf: 'uint16array',
      typeof: 'object',
    })

    .toEqual(`new Uint32Array()`, recognizeValue(new Uint32Array()), {
      Object: true,
      Uint32Array: true,
      isFinite: true,
      typeOf: 'uint32array',
      typeof: 'object',
    })

    .toEqual(`new Uint8Array()`, recognizeValue(new Uint8Array()), {
      Object: true,
      Uint8Array: true,
      isFinite: true,
      typeOf: 'uint8array',
      typeof: 'object',
    })

    .toEqual(
      `new Uint8ClampedArray()`,
      recognizeValue(new Uint8ClampedArray()), {
        Object: true,
        Uint8ClampedArray: true,
        isFinite: true,
        typeOf: 'uint8clampedarray',
        typeof: 'object',
      }
    )

    .toEqual(`new URIError()`, recognizeValue(new URIError()), {
      Error: true,
      Object: true,
      URIError: true,
      isNaN: true,
      typeOf: 'error',
      typeof: 'object',
    })

    .toEqual(`new WeakMap()`, recognizeValue(new WeakMap()), {
      Object: true,
      WeakMap: true,
      isNaN: true,
      typeOf: 'weakmap',
      typeof: 'object',
    })

    .toEqual(`new WeakSet()`, recognizeValue(new WeakSet()), {
      Object: true,
      WeakSet: true,
      isNaN: true,
      typeOf: 'weakset',
      typeof: 'object',
    })
);
