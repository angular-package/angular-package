import { Constructor } from './constructor.type';

export type Types<T> = Constructor<T> | 'string' | 'number' | 'boolean';
