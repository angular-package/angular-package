export interface OfRecognized {
  // Proxy?: boolean;
  Array?: boolean;
  ArrayBuffer?: boolean;
  Boolean?: boolean;
  DataView?: boolean;
  Date?: boolean;
  Error?: boolean;
  EvalError?: boolean;
  Float32Array?: boolean;
  Float64Array?: boolean;
  Function?: boolean;
  Int16Array?: boolean;
  Int32Array?: boolean;
  Int8Array?: boolean;
  Map?: boolean;
  Number?: boolean;
  Object?: boolean;
  Promise?: boolean;
  RangeError?: boolean;
  ReferenceError?: boolean;
  RegExp?: boolean;
  Set?: boolean;
  SharedArrayBuffer?: boolean;
  Storage?: boolean;
  String?: boolean;
  Symbol?: boolean;
  SyntaxError?: boolean;
  TypeError?: boolean;
  URIError?: boolean;
  Uint16Array?: boolean;
  Uint32Array?: boolean;
  Uint8Array?: boolean;
  Uint8ClampedArray?: boolean;
  WeakMap?: boolean;
  WeakSet?: boolean;
  // Array.isArray()
  'Array.isArray'?: boolean;
  // isClass()
  isClass?: boolean;
  // isFunction()
  isFunction?: boolean;
  // isFinite()
  isFinite?: boolean;
  // isInteger()
  'Number.isInteger'?: boolean;
  // isNaN()
  isNaN?: boolean;
  // Number.isNaN()
  'Number.isNaN'?: boolean;
  // Number.isFinite()
  'Number.isFinite'?: boolean;
  // typeOf()
  typeOf?: string;
  // operator typeof
  typeof?: string;

  [index: string]: boolean | string | undefined;
}
