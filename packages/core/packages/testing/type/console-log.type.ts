/**
 * Four Options are available:
 * 1. boolean `true` = Both executed and notExecuted specs are logged.
 * 2. boolean `false` = Executed and notExecuted specs are'nt logged.
 * 3. string `executed` = Executed specs are logged.
 * 4. string `notExecuted` = notExecuted specs are logged.
 */ 
export type ConsoleLog = boolean | 'executed' | 'notExecuted';
