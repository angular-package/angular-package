import { FunctionType } from '../../lib/function.type';
/**
 * Check function `func` by finding `name` in `func`.
 * @param name Value `string` to find in argument `func`.
 * @param func Function type value to find `name` in.
 * @returns boolean.
 */
export const isFunction = (name: string, func: FunctionType): func is FunctionType => name in func;
