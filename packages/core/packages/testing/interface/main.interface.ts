import { MainClass } from '../src/main.class';
import { ResultName } from '../type';

export interface Main<T> {
  before(callback: (component: T, testingClass?: MainClass<T>) => any): this;
  clear(name?: ResultName): this;
  get<PT>(path: string): PT | undefined;
  set<PT>(path: string, value: PT): this;
  subscribe(propertyName: string, callback: Function): this;
}
