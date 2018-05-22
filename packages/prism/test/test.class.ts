import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/**
 * @export
 * @class TestingClass
 */
export class TestingClass {

  private lastResult: DebugElement;

  /**
   * Creates an instance of TestingClass.
   * @param {DebugElement} [debugElement] 
   * @memberof TestingClass
   */
  constructor(private debugElement?: DebugElement) { }

  /**
   * @param {string} name 
   * @param {string} value 
   * @param {DebugElement} [debugElement] 
   * @returns {this} 
   * @memberof TestingClass
   */
  attribute(name: string, value: string, debugElement?: DebugElement): this {
    this.run(`[${name}="${value}"]`, debugElement);
    return this;
  }

  // attributes(attributes: ApObject<string>, debugElement?: DebugElement): void { }

  /**
   * Find HTML Element with specified class and invoke expect test to check if it exists.
   * Each item of Array separate looking for HTML Element.
   * @param {string} name Class to find in debugElement.
   * @param {DebugElement} [debugElement] Element to find HTMLElement with specified class or list of classes.
   * @returns {this} 
   * @memberof TestingClass
   */
  class(name: string, debugElement?: DebugElement): this {
    this.run(`[class~="${name}"]`, debugElement);
    return this;
  }

  // classes(name: string, debugElement?: DebugElement): void { }

  /**
   * @param {string} selector 
   * @param {DebugElement} [debugElement] 
   * @returns {this} 
   * @memberof TestingClass
   */
  selector(selector: string, debugElement?: DebugElement): this {
    this.run(`${selector}`, debugElement);
    return this;
  }

  /**
   * @param {string} contain 
   * @param {DebugElement} [debugElement] 
   * @returns {this} 
   * @memberof TestingClass
   */
  toContain(contain: string, debugElement?: DebugElement): this {
    expect(this.getDebugElement(debugElement).nativeElement.innerHTML).toContain(contain);
    return this;
  }

  /**
   * @private
   * @param {string} selector 
   * @param {DebugElement} debugElement 
   * @memberof TestingClass
   */
  private run(selector: string, debugElement: DebugElement): void {
    this.lastResult = undefined;
    this.lastResult = this.getDebugElement(debugElement).query(By.css(selector));
    expect(this.lastResult).not.toBeNull();
  }

  /**
   * @private
   * @param {(DebugElement | undefined)} debugElement 
   * @returns {DebugElement} 
   * @memberof TestingClass
   */
  private getDebugElement(debugElement: DebugElement): DebugElement {
    return (debugElement) ? debugElement : (this.lastResult) ? this.lastResult : this.debugElement;
  }
}
