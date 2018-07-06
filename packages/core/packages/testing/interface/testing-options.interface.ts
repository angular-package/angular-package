import { Log } from '../../testing/interface/log.interface';
import { Execute } from '../type';
export interface TestingOptions {
  console?: Log;
  execute: Execute;
}
