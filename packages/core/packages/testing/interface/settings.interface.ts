import { Log } from './log.interface';
import { Execute } from '../type';

/**
 * Settings structure.
 * @export
 */
export interface Settings {
  console: Log;
  execute: Execute;
}
