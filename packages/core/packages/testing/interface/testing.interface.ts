
import { ConsoleLog, Execute } from '../type';
import { Suites } from './suites.interface';

export interface Testing {
  execute(execute?: Execute, log?: ConsoleLog): this;
  spec(spec: Suites, reset: boolean): this;
}
