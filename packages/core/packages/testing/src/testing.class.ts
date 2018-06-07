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
    let tests = {};
    args.forEach(set => {
      tests = { ...tests, ...set };
    });
    let i = 1;
    for (const name in tests) {
      if (tests.hasOwnProperty(name) && tests[name].hasOwnProperty('true')) {
        let run = true;
        if (this.options.run.length > 0 && this.options.run.includes(i)) {
          run = false;
        }

        // Information console.
        if (this.options.info === true) {
          console.info(`#${i}. ${name}`);
        }

        // Do test.
        if (run === true) {
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
