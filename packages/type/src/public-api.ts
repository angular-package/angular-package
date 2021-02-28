/*
 * Public API Surface of type
 */

// Guard types
export { guardNumber, guardObject, guardPrimitive, guardString, guardType } from './guard/';

// Check types
export { isFunction, isNumber, isObject, isPrimitive, isString, isType } from './check/';

// Types
export { Constructor, CycleHook, FunctionType, Partial, Types } from './lib';
