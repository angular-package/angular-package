// external.
import {

} from 'jasmine';

// internal.
import { MatchersClass } from './matchers.class';

/**
 * @export
 */
export class SelectorClass<T> extends MatchersClass<T> {

  /**
   * @param name [${name}="${value}"].
   * @param value [${name}="${value}"].
   */
  attribute(name: string, value: string): this {
    this.test(`[${name}="${value}"]`);

    return this;
  }

  /**
   * Find HTML Element with specified class and invoke expect test to check if it exists.
   * Each item of Array separate looking for HTML Element.
   * @param name Class to find in debugElement.
   */
  class(name: string): this {
    this.test(`[class~="${name}"]`);

    return this;
  }

  /**
   * @param selector Find HTMLElement by selector.
   */
  selector(selector: string): this {
    this.test(`${selector}`);

    return this;
  }
}
