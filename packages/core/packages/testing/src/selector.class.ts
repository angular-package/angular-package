// externals
import { Type } from '@angular/core';
import { By } from '@angular/platform-browser';

// internal.
import { MatchersClass } from './matchers.class';

/**
 * Chained query methods to use in `before()` method.
 * @export
 */
export abstract class SelectorClass extends MatchersClass {

  /**
   * Look for specific attribute by using `DebugElement` with pattern `[${name}="${value}"]` : `[${name}]`.
   * @param name Attribue name to look for.
   * @param [value] Attribute value to look for.
   */
  attribute(name: string, value?: string): this {
    // this.query((value) ? `[${name}="${value}"]` : `[${name}]`);

    return this;
  }

  /**
   * Look for specific class by using `DebugElement`.
   * @param name Class to look for by using `DebugElement`.
   */
  class(component: Type<any>, name: string): this {
    const shortName = this.getComponentShortName(component);
    if (shortName) {
      this.query(shortName, `[class~="${name}"]`);
    }

    return this;
  }

  /**
   * Typical `By.css` query.
   * @author wwwdev.io
   * @date 2018-11-09
   * @param selector Find HTMLElement by selector `By.css(selector)`.
   * @param component Angular component.
   * @returns this
   */
  selector(selector: string, ...components: Array<Type<any>>): this {
    if (components instanceof Array) {
      components.forEach((component: Type<any>) => {
        const shortName = component ? this.getComponentShortName(component) : this.selectedComponent;
        if (shortName) {
          this.query(shortName, `${selector}`);
        }
      });
    } else if (this.selectedComponent) {
      this.query(this.selectedComponent, `${selector}`);
    }

    return this;
  }

  /**
   * Use debugElement query to find HTMLElement.
   * @param selector Find HTMLElement by selector.
   */
  private query(shortName: string, selector: string): void {
    // Clear stored query result value.
    this.clear('query');

    // Store new query result.
    if (this[`${shortName}Fixture`].debugElement !== this.undefined) {
      this.result.query = this[`${shortName}Fixture`].debugElement.query(By.css(selector));
    }

    // Add last result store name.
    this.result.name = 'query';
    // Expectation.
    expect(this.result.query)
      .not
      .toBeNull();
  }
}
