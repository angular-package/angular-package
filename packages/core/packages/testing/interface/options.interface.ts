import { ConsoleLog, Execute } from '../type';

export interface Options {
  // true = all, 'executed' = only executed, 'notExecuted' = only notExecued.
  log?: ConsoleLog;
  execute?: Execute;
}
