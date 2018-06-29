import { ConsoleLog } from './console-log.interface';
import { Execute } from '../type';
export interface TestingOptions {
  console?: {
    default?: ConsoleLog;
    spec: ConsoleLog;
  };
  execute: {
    default: Execute;
    spec: Execute;
  };
}
