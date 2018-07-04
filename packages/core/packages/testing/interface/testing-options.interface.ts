import { ConsoleLog } from './console-log.inteface';
import { Execute } from '../type';
export interface TestingOptions {
  console?: ConsoleLog;
  execute: Execute;
}
