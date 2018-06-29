import { By } from '@angular/platform-browser';

// internal.
import { MatchersClass } from './matchers.class';

/**
 * @export
 */
export abstract class SelectorClass<T> extends MatchersClass<T> {

  /**
   * Look for specific attribute by using `DebugElement` with pattern `[${name}="${value}"]` : `[${name}]`.
   * @param name Attribue name to look for.
   * @param [value] Attribute value to look for.
   */
  attribute(name: string, value?: string): this {
    this.query((value) ? `[${name}="${value}"]` : `[${name}]`);

    return this;
  }

  /**
   * Look for specific class by using `DebugElement`.
   * @param name Class to look for by using `DebugElement`.
   */
  class(name: string): this {
    this.query(`[class~="${name}"]`);

    return this;
  }

  /**
   * Typical `By.css` query.
   * @param selector Find HTMLElement by selector.
   */
  selector(selector: string): this {
    this.query(`${selector}`);

    return this;
  }

  /**
   * @param selector Find HTMLElement by selector.
   */
  private query(selector: string): void {
    this.clear('query');
    this.result.query = this.debugElement.query(By.css(selector));
    this.result.name = 'query';
    expect(this.result.query)
      .not
      .toBeNull();
  }
}
