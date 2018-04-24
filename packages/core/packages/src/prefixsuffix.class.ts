/**
 * @export
 * @class PrefixSuffixClass
 */
export class PrefixSuffixClass {
   /**
   * Creates an instance of PrefixSuffixClass.
   * @param {string} [prefix='_'] Source property prefix - property that will be connected with targeted dynamic component.
   * @param {string} [suffix=''] Source property suffix - property that will be connected with targeted dynamic component.
   * @memberof PrefixSuffixClass
   */
  constructor(private prefix: string = '_', private suffix: string = '') { }

  /**
   * @param {string} property
   * @returns {string}
   * @memberof PrefixSuffixClass
   */
  public propertyName(property: string): string {
    return `${this.prefix}${property}${this.suffix}`;
  }
}
