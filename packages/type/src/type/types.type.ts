import { Constructor } from './constructor.type';
import { Primitives } from './primitives.type';
/**
 * The main types as string values, besides the `Constructor` which is an instance of an Obj.
 */
export type Types<Obj> = Constructor<Obj> | 'function' | 'object' | Primitives;
