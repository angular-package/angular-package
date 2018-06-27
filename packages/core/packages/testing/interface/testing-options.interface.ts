export interface TestingOptions {
  console?: {
    executed: boolean;
    notExecuted: boolean;
  };
  execute?: {
    default?: Array<number>;
    spec?: Array<number>;
  };
}
