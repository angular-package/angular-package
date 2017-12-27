
import { ViewInterface } from './docs-example.interface';

/**
 * @export
 * @abstract
 * @class DocsExampleClass
 */
export abstract class DocsExampleClass {
  public view: ViewInterface;

  /**
   * Creates an instance of DocsExampleClass.
   * @param {ViewInterface} view
   * @memberof DocsExampleClass
   */
  constructor(view: ViewInterface) {
    this.view = view;
  }

  /**
   * @param {string} property
   * @returns {boolean}
   * @memberof DocsExampleClass
   */
  switchActive(property: string): boolean {
    return this.view[property].active = (this.view[property].active === true) ? false : true;
  }
}
