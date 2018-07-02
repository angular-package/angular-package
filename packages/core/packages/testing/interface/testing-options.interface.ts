import { ConsoleLog } from './console-log.interface';
import { Execute } from '../type';
export interface TestingOptions {
  console?: ConsoleLog;
  execute: Execute;
}
