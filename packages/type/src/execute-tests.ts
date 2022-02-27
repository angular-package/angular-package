export const tests = {
  /**
   * Switches for the `are` prefixed functions.
   */
  are: {
    bigint: { describe: true, it: true },
    boolean: { describe: true, it: true },
    date: { describe: true, it: true },
    defined: { describe: true, it: true },
    false: { describe: true, it: true },
    null: { describe: true, it: true },
    number: { describe: true, it: true },
    regexp: { describe: true, it: true },
    string: { describe: true, it: true },
    symbol: { describe: true, it: true },
    true: { describe: true, it: true },
    undefined: { describe: true, it: true },
  },
  object: {
    guard: { describe: true, it: true },
    is: { describe: true, it: true },
    isNot: { describe: true, it: true },
  },

  /**
   * Switches for the experimental.
   */
  experimental: {
    bigint: { describe: true, it: true },
    boolean: { describe: true, it: true },
    number: { describe: true, it: true },
    string: { describe: true, it: true },
    symbol: { describe: true, it: true },
  },

  /**
   * Switches for the `guard` prefixed functions.
   */
  guard: {
    array: { describe: true, it: true },
    bigint: { describe: true, it: true },
    boolean: { describe: true, it: true },
    class: { describe: true, it: true },
    date: { describe: true, it: true },
    defined: { describe: true, it: true },
    false: { describe: true, it: true },
    function: { describe: true, it: true },
    instance: { describe: true, it: true },
    key: { describe: true, it: true },
    null: { describe: true, it: true },
    number: { describe: true, it: true },
    numberBetween: { describe: true, it: true },
    object: { describe: true, it: true },
    objectKey: { describe: true, it: true },
    objectKeyIn: { describe: true, it: true },
    objectKeys: { describe: true, it: true },
    objectKeysIn: { describe: true, it: true },
    objectSomeKeys: { describe: true, it: true },
    primitive: { describe: true, it: true },
    regexp: { describe: true, it: true },
    string: { describe: true, it: true },
    stringIncludes: { describe: true, it: true },
    stringIncludesSome: { describe: true, it: true },
    stringLength: { describe: true, it: true },
    stringLengthBetween: { describe: true, it: true },
    symbol: { describe: true, it: true },
    true: { describe: true, it: true },
    type: { describe: true, it: true },
    undefined: { describe: true, it: true },
  },

  /**
   * Switches for the `is` prefixed functions.
   */
  is: {
    array: { describe: true, it: true },
    bigint: { describe: true, it: true },
    boolean: { describe: true, it: true },
    booleanObject: { describe: true, it: true },
    booleanType: { describe: true, it: true },
    class: { describe: true, it: true },
    date: { describe: true, it: true },
    defined: { describe: true, it: true },
    false: { describe: true, it: true },
    function: { describe: true, it: true },
    instance: { describe: true, it: true },
    key: { describe: true, it: true },
    not: {
      boolean: { describe: true, it: true },
      defined: { describe: true, it: true },
      function: { describe: true, it: true },
      null: { describe: true, it: true },
      number: { describe: true, it: true },
      string: { describe: true, it: true },
      undefined: { describe: true, it: true },
    },
    null: { describe: true, it: true },
    number: { describe: true, it: true },
    numberBetween: { describe: true, it: true },
    numberObject: { describe: true, it: true },
    numberType: { describe: true, it: true },
    object: { describe: true, it: true },
    objectKey: { describe: true, it: true },
    objectKeyIn: { describe: true, it: true },
    objectKeys: { describe: true, it: true },
    objectKeysIn: { describe: true, it: true },
    objectSomeKeys: { describe: true, it: true },
    param: { describe: true, it: true },
    primitive: { describe: true, it: true },
    regexp: { describe: true, it: true },
    string: { describe: true, it: true },
    stringIncludes: { describe: true, it: true },
    stringIncludesSome: { describe: true, it: true },
    stringLength: { describe: true, it: true },
    stringLengthBetween: { describe: true, it: true },
    stringObject: { describe: true, it: true },
    stringType: { describe: true, it: true },
    symbol: { describe: true, it: true },
    true: { describe: true, it: true },
    type: { describe: true, it: true },
    undefined: { describe: true, it: true }
  },

  /**
   * Switches for the recognize.
   */
  recognize: {
    recognizeValue: { describe: true, it: true }
  },
};
