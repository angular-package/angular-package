import { Constructor } from './constructor.type';
import { Primitives } from './primitives.type';
export type Types<Obj> = Constructor<Obj> | Primitives;
