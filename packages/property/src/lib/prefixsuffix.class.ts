
/**
 * @export
 */
export
  class PrefixSuffixClass {
  // TODO: Check ArgumentHandlerClass
  // extends ArgumentHandlerClass

  /**
   * Creates an instance of PrefixSuffixClass.
   * @param [$$prefix='_'] Source property prefix - property that will be connected with targeted dynamic component.
   * @param [$$suffix=''] Source property suffix - property that will be connected with targeted dynamic component.
   */
  constructor(private $$prefix: string = `__`, private $$suffix: string = ``) { }

  suffix(value?: string): string {
    if (typeof value === 'string') {
      this.$$suffix = value;
    }
    return this.$$suffix;
  }

  prefix(value?: string): string {
    if (typeof value === 'string') {
      this.$$prefix = value;
    }
    return this.$$prefix;
  }

  /**
   * @param property x
   */
  name(property: string): string {
    return `${this.$$prefix}${property}${this.$$suffix}`;
  }
}
