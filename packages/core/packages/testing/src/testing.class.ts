// external.
import {

} from 'jasmine';

import { async } from '@angular/core/testing';
import { get } from 'lodash-es';

// internal.
import { SelectorClass } from './selector.class';

export class TestingClass<T> extends SelectorClass<T> {

  before(callback: (component: T, testingClass?: TestingClass<T>) => any): this {
    this.beforeResult = undefined;
    this.beforeResult = callback(this.comp, this);

    return this;
  }

  eachIt(...args: Array<{ [index: string]: { true: Function } }>): void {
    const tests = Object.assign({}, ...args);
    let i = 1;
    for (const name in tests) {
      if (tests.hasOwnProperty(name) && tests[name].hasOwnProperty('true')) {

        // Information console.
        if (this.options.console === true && this.options.execute.length > 0 && !this.options.execute.includes(i)) {
          console.info(`[Not executed] #${i}. ${name}`);
        }

        // Do test.
        if (this.options.execute.length === 0 || (this.options.execute.length > 0 && this.options.execute.includes(i))) {
          console.info((this.options.execute.length > 0 && this.options.execute.includes(i)));
          if (this.options.console === true) {
            console.info(`#${i}. ${name}`);
          }
          it(name, async(() => {
            tests[name].true();
          }));  
        }
        i++;
      }
    }
  }
 
  property<PT>(property?: string): PT {
    return (property) ? get(this.comp, property) : this.comp;
  }
}
