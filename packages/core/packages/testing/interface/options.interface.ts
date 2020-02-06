import { ConsoleLog, Execute } from '../type';

/**
 * Options structure that applies to settings.
 * @export
 */
export interface Options {
  defaultComponent?: string;
  execute?: Execute;
  // true = all, 'executed' = only executed, 'skipped' = only notExecued.
  log?: ConsoleLog;
}
