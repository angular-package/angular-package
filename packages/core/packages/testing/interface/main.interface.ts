import { MainClass } from '../src/main.class';
import { ResultName } from '../type';

export interface Main {
  before(callbackfn: (component: any, testingClass?: MainClass) => any): this;
  clear(name?: ResultName): this;
  get<PT>(path: string): PT | undefined;
  set<PT>(path: string, value: PT): this;
  subscribe(propertyName: string, callbackfn: Function): this;
}
