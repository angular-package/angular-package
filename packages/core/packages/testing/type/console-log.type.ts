/**
 * Four Options are available:
 * 1. boolean `true` = Both executed and skipped specs are logged.
 * 2. boolean `false` = Executed and skipped specs are'nt logged.
 * 3. string `executed` = Executed specs are logged.
 * 4. string `skipped` = skipped specs are logged.
 */ 
export type ConsoleLog = boolean | 'executed' | 'skipped';
