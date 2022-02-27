
import { Callback } from '..//lib/result-callback.class';

typeof Callback;

// // @angular-package/type.
// import { are, is, ForEachCallback, ResultCallback } from '@angular-package/type';
// // @angular-package/testing.
// import { Testing, TestingToBeMatchers } from '@angular-package/testing';
// /**
//  * ValidationError
//  */
// import { ValidationError } from '@angular-package/error';
// /**
//  * Callback.
//  */
// import { Callback } from '../lib/callback.class';
// // Constants.
// import {
//   TESTING_FALSE,
//   TESTING_OBJECT,
//   TESTING_TRUE,
// } from '@angular-package/testing';
// /**
//  * Initialize Testing.
//  */
// const testing = new Testing(false, false);
// const toBe = new TestingToBeMatchers();
// /**
//  * Static ValidationError.
//  */
// // Callback.validationError.setTemplate('[problem], got [value]. [fix]');

// // const callback = Callback.defineErrorCallback({
// //   fix: 'Please provide a string type value',
// //   problem: 'The given value must be a string type',
// // }, false, (result, value) => {
// //   // Console returns false, 3
// //   console.log(result, value);
// // }, undefined);

// // try {
// //   // callback(typeof 27 === 'string', [27, NaN, null, undefined, {age: 27}, ['something']]);
// //   // callback(typeof 27 === 'string', Symbol(123));
// //   callback(typeof 27 === 'string', [Symbol(123)]);
// // } catch (e) {
// //   console.log(e.message);
// //   // console.log(e.value);
// // }

// /**
//  * ValidationError passed by parameter to static method.
//  */
// // const validationError = new ValidationError().setTemplate('[problem], got [value]. [fix]');

// // const callback = Callback.defineErrorCallback({
// //   fix: 'Please provide a string type value',
// //   problem: 'The given value must be a string type',
// //   value: JSON.stringify({ age: 27 })
// // }, false, (result, value) => {
// //   // Console returns false, 3
// //   console.log(result, value);
// // }, undefined, validationError);

// // try {
// //   callback(typeof 3 === 'string', 3);
// // } catch (e) {
// //   // console.log(e.message);
// //   // console.log(e.value);
// // }

// /**
//  * Instance ValidationError.
//  */
// // const callback = new Callback('error.isAge');

// // const fix = 'Please provide a string type value';
// // const problem = 'The given value must be a string type';
// // const value = JSON.stringify({ age: 27 });

// // callback.setValidationError(new ValidationError().setTemplate('[problem], got [value]. [fix]'));

// // callback.setErrorCallback('error.isAge', { fix, problem }, false, (result, val) => {
// //   console.log(result, val);
// // });

// // callback.getResultCallback('error.isAge')(false, 3);

// /**
//  * Tests.
//  */
// testing.describe(`Callback`, () => {
//   let callback = new Callback('firstName', 'setCallback');
//   let fix = '';
//   let forEachCallback: ForEachCallback;
//   let id = 0;
//   let problem = '';
//   let stringCallback: ResultCallback;
//   let stringErrorCallback: ResultCallback;
//   let message = '';
//   let template = '';
//   let value: any;

//   // Prepare the values.
//   fix = 'Provide string type value. Read more: https://duckduckgo.com/';
//   id = 427;
//   problem = 'The value must be a string type.';
//   template = `Problem(VE[id]): [problem]\nGot: [value]\nFix: [fix]`;
//   value = Symbol(123);

//   beforeEach(() => (callback = new Callback('setCallback')));

//   testing
//     .it(`defined`, () => toBe.defined(Callback).defined(callback).instance(callback, Callback))

//     .toBeClass(Callback)

//     .toBeInstanceOfFunction(
//       Callback.defineErrorCallback({ fix, problem }, TESTING_TRUE),
//       TESTING_TRUE,
//       `Callback.defineErrorCallback({ fix, problem }, TESTING_TRUE) returns a function `
//     )

//     .describe(`Callback.guard()`, () =>
//       testing.toEqual(
//         'method should have guard provided function',
//         Callback.guard((result) => result),
//         TESTING_TRUE
//       )
//     )

//   //#region Callback static methods

//   // Callback.defineErrorCallback()
//   .describe(`.defineErrorCallback()`, () => {
//     testing
//       .it('defining properly with message that throws an error on `true`',
//         () => {
//           stringErrorCallback = Callback.defineErrorCallback({ fix, problem });
//           toBe.function(stringErrorCallback);
//           try {
//             is.string(value, stringErrorCallback);
//           } catch (e) {
//             if (e instanceof ValidationError) {
//               toBe.string(e.message);
//               // expect(e.message).toContain(problem);
//             }
//           }
//         })
//       // .it('defining properly with message that throws an error on `true`',
//       //   () => stringErrorCallback = Callback.defineErrorCallback({ problem, fix }));
//   })

//   // Callback.defineForEachCallback()
//   .describe(`.()`, () => {
//     testing.it('defining `defineForEachCallback` properly', () => {
//       forEachCallback = Callback.defineForEachCallback(
//         (result: boolean, checkedValue) => {
//           if (is.false(result)) {
//             throw new ValidationError({ fix, problem, value: checkedValue });
//           }
//         }
//       );
//       toBe.function(forEachCallback);
//       try {
//         are.string(5, '6', 7, value).forEach(forEachCallback);
//       } catch (e) {
//         if (e instanceof ValidationError) {
//           toBe.string(e.message);
//           // expect(e.message).toContain(fix);
//           // expect(e.message).toContain(problem);
//           // expect(e.message).toContain(String(value));
//         }
//       }
//     });
//   })

//   // Callback.defineResultCallback()
//   .describe(`.defineResultCallback()`, () => {
//     testing.it('defining `ResultCallback` properly', () => {
//       stringCallback = Callback.defineResultCallback(
//         (result: boolean, checkedValue) => {
//           if (is.false(result)) {
//             throw new ValidationError({ fix, problem, value: checkedValue });
//           }
//         }
//       );
//       toBe.function(stringCallback);
//       try {
//         is.string(value, stringCallback);
//       } catch (e) {
//         if (e instanceof ValidationError) {
//           toBe.string(e.message);
//           // expect(e.message).toContain(fix);
//           // expect(e.message).toContain(problem);
//           // expect(e.message).toContain(String(value));
//         }
//       }
//     });

//     testing.it('defining `ResultCallback` not properly', () => {
//       const falseCallback: any = false;
//       // stringCallback = Callback.defineResultCallback(falseCallback);
//       // toBe.not.function(stringCallback);
//     });
//   })

//   // Callback.guard()
//   .describe(`.guard()`, () => {
//     stringCallback = (result: boolean) => result;
//     testing
//       .it('guards properly with true', () =>
//         toBe.true(Callback.guard(stringCallback))
//       )
//       .it('guards properly with false', () =>
//         toBe.false(Callback.guard(TESTING_OBJECT as any))
//       );
//   })

//   // Callback.isCallback()
//   .describe(`.isCallback()`, () =>
//     testing
//       .toEqual(
//         'method should have checked instance in `true` state',
//         Callback.isCallback(callback),
//         TESTING_TRUE
//       )
//       .toEqual(
//         'method should have checked instance in `false` state',
//         Callback.isCallback(new Object()),
//         TESTING_FALSE
//       )
//   )
//   //#endregion

//   // Constructor
//   .describe(`constructor()`, () => {
//     testing.describe(`properly instantiate`, () => {
//       const callbacks = new Callback('isString', 'isNumber');
//       testing.it('with allowedNames', () => {
//         toBe
//           .undefined(callbacks.getResultCallback('isString'))
//           .undefined(callbacks.getResultCallback('isNumber'));

//         callbacks
//           .setResultCallback('isString', (result: boolean) => result)
//           .setResultCallback('isNumber', (result: boolean) => result);
//         toBe
//           .function(callbacks.getResultCallback('isString'))
//           .function(callbacks.getResultCallback('isNumber'));
//       });

//       testing.it('and cannot set function with not allowed `firstName`', () => {
//         const storageName: any = 'firstName';
//         callbacks.setResultCallback(storageName, (result) => result);
//         toBe.undefined(callbacks.getResultCallback(storageName));
//       });
//     });
//   })

//   //#region Callback public methods
//   /**
//    * getForEachCallback()
//    */
//   .describe(`.prototype.getForEachCallback()`, () => testing.it(``, () => {}))

//   /**
//    * `getResultCallback()`
//    */
//   .describe(`.prototype.getResultCallback()`, () => {
//     testing.it(`works with isString() function`, () => {
//       callback
//         .setResultCallback('setCallback', (result, checkedValue) =>
//           result === false && new ValidationError().throw({
//             fix, id, problem, value: checkedValue, template
//           }));
//       try {
//         is.string(value, callback.getResultCallback('setCallback'));
//       } catch (e) {
//         if (e instanceof ValidationError) {
//           toBe
//             .string(e.fix)
//             .number(e.id)
//             .string(e.problem)
//             .string(e.message)
//             .symbol(e.value)
//             .string(e.template);
//           expect(e.id).toEqual(id);
//           expect(e.fix).toEqual(fix);
//           expect(e.problem).toEqual(problem);
//           expect(e.value).toEqual(value);
//           expect(e.template).toEqual(template);
//           expect(e.message).toContain(fix);
//           expect(e.message).toContain(String(id));
//           expect(e.message).toContain(problem);
//           expect(e.message).toContain(String(value));
//         }
//       }
//     })
//     // .it(`works with 'firstName'`, () => {
//     //   callback
//     //     // Set the callback function of the `ResultCallback` type under the 'firstName' name.
//     //     .setResultCallback('firstName', result => result)
//     //     // Get the function of the `ResultCallback` type stored under the 'firstName' name.
//     //     .getResultCallback('firstName');
//     // });
//   })

//   /**
//    * `setErrorCallback()`
//    */
//   .describe(`.prototype.setErrorCallback()`, () => {
//     testing
//       .it('properly working with message of a string type', () => {
//         callback.setErrorCallback('setCallback', { fix, id, problem, template }, false);
//         toBe.function(callback.getResultCallback('setCallback'));
//         try {
//           is.string(value, callback.getResultCallback('setCallback'));
//         } catch (e) {
//           if (e instanceof ValidationError) {
//             console.log(e.value);
//             expect(e.id).toEqual(id);
//             expect(e.fix).toEqual(fix);
//             expect(e.problem).toEqual(problem);
//             expect(e.value).toEqual(value);
//             expect(e.message).toContain(fix);
//             expect(e.message).toContain(String(id));
//             expect(e.message).toContain(problem);
//             expect(e.message).toContain(String(value));
//           }
//         }
//       })

//       .it('properly working with message of an object', () => {
//         callback.setErrorCallback('setCallback', { problem, fix, }, true);
//         toBe.function(callback.getResultCallback('setCallback'));
//         try {
//           is.string('5', callback.getResultCallback('setCallback'));
//         } catch (e) {
//           if (e instanceof ValidationError) {
//             // expect(e.fix).toEqual('No fix for this error');
//             // expect(e.problem).toEqual('This is test error');
//             // expect(e.message).toEqual(
//             //   ValidationError.template
//             //     .replace('[problem]', problem)
//             //     .replace('[fix]', fix)
//             // );
//           }
//         }
//     });
//   })

//   /**
//    * setForEachCallback()
//    */
//   .describe(`.prototype.setForEachCallback()`, () => {
//     testing.it(`works with areString()`, () => {
//       // Define database with addresses.
//       const database: ({city: any, postCode: number})[] = [
//         { city: 'New York', postCode: 1 },
//         { city: 'Warsaw', postCode: 2 },
//         { city: 'London', postCode: 3 },
//         { city: undefined, postCode: 4 },
//         { city: null, postCode: 6 },
//         { city: 'San Francisco', postCode: 5 },
//       ];

//       // Define callback for `are` checking functions.
//       const checkAddress = new Callback('city');

//       // Set callback function for checking the city against the string type.
//       checkAddress.setForEachCallback(
//         'city',
//         (result, value, index, array, addresses) => {
//           if (index === 3 || index === 4) {
//             // expect(result).toBeFalse();
//             // toBe
//             //   .array(array)
//             //   .false(result);
//           }
//           if (addresses){
//             // expect(value).toEqual(addresses[index].city);
//           }
//         },
//         database
//       );
//       // Execute the check.
//       are
//         .string(...database.map((v) => v.city))
//         .forEach(checkAddress.getForEachCallback('city'), database);
//     });
//   })

//   /**
//    * setResultCallback()
//    */
//   .describe(`.prototype.setResultCallback()`, () => {
//     testing.it(
//       'should properly sets the callback function under the `setCallback` name',
//       () => {
//         toBe.undefined(callback.getResultCallback('setCallback'));
//         callback.setResultCallback(
//           'setCallback',
//           (result: boolean, value: any) => {
//             if (is.false(result)) {
//               throw new ValidationError({ fix, problem });
//             }
//           }
//         );
//         toBe.function(callback.getResultCallback('setCallback'));
//       }
//     );
//   });
//   //#endregion
// });
