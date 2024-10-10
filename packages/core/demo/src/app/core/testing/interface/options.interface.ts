import { ConsoleLog, Execute } from '../type';

/**
 * Options structure that applies to settings.
 * @export
 */
export interface Options {
  // true = all, 'executed' = only executed, 'skipped' = only notExecued.
  log?: ConsoleLog;
  execute?: Execute;
}
