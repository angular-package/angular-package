/**
 * @export
 */
export class PrefixSuffixClass {
  /**
   * Creates an instance of PrefixSuffixClass.
   * @param [prefix='_'] Source property prefix - property that will be connected with targeted dynamic component.
   * @param [suffix=''] Source property suffix - property that will be connected with targeted dynamic component.
   */
  constructor(private prefix: string = '_', private suffix: string = '') { }

  /**
   * @param property x
   */
  propertyName(property: string): string {
    return `${this.prefix}${property}${this.suffix}`;
  }
}
