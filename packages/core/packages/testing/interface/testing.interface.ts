
import { ConsoleLog, Execute } from '../type';
import { Spec } from './spec.interface';

export interface Testing<T> {
  execute(execute?: Execute, log?: ConsoleLog): this;
  spec(description: string, spec: Spec<T>, reset: boolean): this;
}
