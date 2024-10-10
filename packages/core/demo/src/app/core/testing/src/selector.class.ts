import { By } from '@angular/platform-browser';

// internal.
import { MatchersClass } from './matchers.class';

/**
 * Chained query methods to use in `before()` method.
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
   * Use debugElement query to find HTMLElement.
   * @param selector Find HTMLElement by selector.
   */
  private query(selector: string): void {
    // Clear stored query result value.
    this.clear('query');

    // Store new query result.
    if (this.debugElement !== undefined) {
      this.result.query = this.debugElement.query(By.css(selector));
    }

    // Add last result store name.
    this.result.name = 'query';
    expect(this.result.query)
      .not
      .toBeNull();
  }
}
