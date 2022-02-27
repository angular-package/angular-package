// import { Callback } from '../lib/callback.class';
// import { are, ForEachCallback, isString } from '@angular-package/type';
// import { is, ResultCallback } from '@angular-package/type';
// import { ValidationError } from '@angular-package/error';
// import { Storage } from '../storage/src/storage.class';
// import { ResultCallbacks } from '../lib/result-callback.class';

// const s = new Storage('name1');

// s.set('name1', 'bla');
// // console.log(s.get('name1'));

// s.set('name1', 6 as any, (result, value) => {
//   // console.log(result, value);
//   return result;
// });

// s.setOfType('name1', 6, 'number', (result, value, payload: any) => {
//   payload?.name === 'isNameAllowed' && console.log(result, value, payload);
//   payload?.name === 'isType' && console.log(result, value, payload);
//   return result;
// });

// // console.log(s.get('name1'));

// // const r = new ResultCallbacks('name');

// // r.setResultCallback('name' as any, (result) => {
// //   console.log(result);
// // });

// // r.getResultCallback('name' as any)(false, 5);
