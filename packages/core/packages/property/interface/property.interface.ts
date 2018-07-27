import { Getter, Setter } from '../type';

export interface Property {
  binded: string | Array<string> | number;
  bind<S, T = string>(source: Function | S, properties: string | Array<string>, target: T): void;
  clear<S>(source: Function | S, properties?: string | Array<string>): void;
  define<S>(source: Function | S, property: string, descriptor: ThisType<any>): void;
  get<PT>(source: Object, path: string): PT;
  set<PT>(source: Object, path: string, value: PT): Object;
  string(object: any): object is string;
  wrap<S, R = any>(source: Function | S, properties: string | Array<string>, setter: Setter<S, R>, getter: Getter<S, R>): void;
}
