// external.
import {

} from 'jasmine';

// internal.
import { SelectorClass } from './selector.class';
import { ConsoleLog, Execute, PickTesting } from '../type';
import { Suites, Testing } from '../interface';
import { Describe, Spec } from '../interface/suites.interface';

/**
 * Class to instantiate spec to execute.
 * @export
 * @extends {SelectorClass}
 * @template T Component type to test.
 */
export class TestingClass extends SelectorClass implements Testing {
  /**
   * Execute spec expectations declared before by using `spec()` method. 
   * It also restores original settings before each execute and use settings from arguments.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param [execute] Filter executing specs by declaring its unique given number as array. When it is `[1, 5]` 
   * it executes number `1` and `5`, when `true` or `undefined` it executes all, when `false` it is not executing anything
   * @param [log] Which logs to display. Four Options are available: 
   * Boolean `true` = Both executed and skipped specs are logged. 
   * Boolean `false` = Executed and skipped specs are'nt logged. 
   * String `executed` = Executed specs are logged. 
   * String `skipped` = skipped specs are logged.
   */
  execute(execute?: Execute, log?: ConsoleLog): this {
    const instance = this.instance();
    instance
      .instance()
      .restoreSettings()
      .setSettings({ log, execute })
      .spec(this.specs)
      .each();
    
    return this;
  }

  /**
   * Add more information about actual spec to the main description and new specs to execute when `reset` is `true` 
   * or add to existing specs when reset is `false`.
   * @author wwwdev.io
   * @date 2018-08-21
   * @param description Describe description.
   * @param spec Specs to execute, where `key` is jasmine it description `it(key, () => {});`.
   * @param [reset=true] Reset the specs to execute, it means create new list.
   */
  spec(spec?: Suites, reset = true): this {
    // Reset specs.
    if (reset === true) {
      this.specs = {};
    }
    // Add spec.
    this.specs = { ...this.specs, ...spec };

    return this;
  }

  /**
   * Uses jasmine functions for asynchronous execution stored list of specs.
   * @author wwwdev.io
   * @date 2018-08-21
   */
  protected each(): this {
    (this.settings.execute !== false && this.specs ?
      Object
        .keys({ ...{}, ...this.specs }) : [])
        .forEach(description => this.describe(description, this.specs[description]));

    return this;
  }

  /**
   * @author wwwdev.io
   * @date 2018-11-28
   * @param [afterEachMethod] x
   * @param [timeout] x
   * @returns this
   */
  private afterEach(afterEachMethod?: any, timeout?: number): this {
    if (afterEachMethod instanceof Function) {
      if (afterEachMethod.toString()
        .indexOf('done') > -1) {
        // Execute jasmine afterEach function.
        afterEach((done: DoneFn) => {
          this.classHandler
            .method(afterEachMethod)
            .call(this, { done });
        }, timeout);
      } else {
        // Execute jasmine afterEach function.
        afterEach(() => {
          this.classHandler
            .method(afterEachMethod)
            .call(this);
        }, timeout);
      }
    }

    return this;
  }

  /**
   * @author wwwdev.io
   * @date 2018-11-28
   * @param [beforeEachMethod] x
   * @param [timeout] x
   * @returns this
   */
  private beforeEach(beforeEachMethod?: any, timeout?: number): this {
    if (beforeEachMethod instanceof Function) {
      // Execute jasmine beforeEach function.
      if (beforeEachMethod.toString()
        .indexOf('done') > -1) {
        beforeEach((done: DoneFn) => this.classHandler
          .method(beforeEachMethod)
          .call(this, { done }), timeout);
      } else {
        beforeEach(() => this.classHandler
          .method(beforeEachMethod)
          .call(this), timeout);
      }
    }

    return this;
  }

  /**
   * x
   * @author wwwdev.io
   * @date 2018-11-26
   * @param description x
   * @returns x
   */
  private describe(description: string, describes: Describe): this {
    // Check this method arguments values.
    this.errorHandler.checkMethodArguments(this, arguments);
    // Do `describe()` if execute is defined.
    if ('execute' in describes && describes.execute) {
      describe(description, () => {
        // Configure TestBed.
        this.configure();
        // Execute.
        if (describes.execute && describes.execute.constructor === {}.constructor) {
          this
            .afterEach(describes.afterEach, describes.timeout)
            .beforeEach(describes.beforeEach, describes.timeout);

          Object
            .keys(describes.execute)
            .forEach(expectation => describes.execute ?
              this.it(`${description} ${expectation}`, describes.execute[expectation]) : undefined);
        }
      });
    }

    return this;
  }

  private it(expectation: string, spec: Spec): this {
    // Check this method arguments values.
    this.errorHandler.checkMethodArguments(this, arguments);
    // Execute jasmine `it()`.
    it(expectation, done => {
      // Do `it()` if execute is defined.
      if ('execute' in spec && spec.execute) {
        // Clear.
        this.clear();
        // Pick features.
        const testing: PickTesting = this;
        // Display console log about skipped `it()`.
        this.consoleClass
          .text(``)
          .green(`[Execute]: `)
          .text(expectation, 'default')
          .log(this.settings.console.executed);
        // Execute.
        spec.execute(testing, done ? done : undefined);
      } else if (spec.skip) {
        // Display console log about skipped `it()`.
        this.consoleClass
          .green('[Skip]: ', ['faint'])
          .text(expectation, 'default')
          .log(this.settings.console.skipped);

        pending(expectation);
      }
      // Display console with newline.
      this.consoleClass
        .text(``)
        .log();
      // Use `done()`.
      if (done) {
        done();
      }
    });

    return this;
  }

  /**
   * Instantiate class `TestingClass`.
   * @author wwwdev.io
   * @date 2018-08-21
   */
  private instance(): TestingClass {
    const t = this;

    return new TestingClass(
      { ...{}, ...t.moduleDef },
      { ...{}, ...t.options });
  }
}

      /* Default spec to check fixture and comp is defined.
      if (this.componentTest !== undefined) {
        it('should have fixture and comp defined.', async(() => {
          expect(this.fixture)
            .toBeDefined();
          expect(this.componentInstance)
            .toBeTruthy();
        }));  
      }
     */
      // Execute tests.
      /* if (specToExecute) {
        specToExecute();
      } */

      /*
      const finalResult = await Promise.all([specIt.specs].map(async (spec: Spec) => {
        it('aaa', done => {
          expect(false)
            .toBeFalsy();

          done();
        });

        return spec;
      }));
      console.info(finalResult);
      // return finalResult;

      this.specIt((specNames, specs, settings, execution) => {
        let i = 0;
        specNames.forEach(name => {
          i++;
          const number = i;

          it(name, done => {
            // Display start.
            this.consoleClass
              .green(`Describe ${settings.description} ${settings.specDescription}`, ['bold'])
              .log(settings.displayStart);

            if (specs[name] instanceof Function && execution(number) === true) {
              this.consoleClass
                .green(`#${number}. ${name}`)
                .log(settings.console.executed);

              // Run spec.
              specs[name](settings);
            } else if (execution(number) === false) {
              this.consoleClass
                .text(`Skipped #${number}. ${name}`, undefined, ['faint'])
                .log(settings.console.skipped);
            }
            // Do not display start log anymore.
            settings.displayStart = false;

            if (execution(number) === false) {
              pending(`Skipped #${number}. ${name}`);
            }

            done();
          });
        });
      });
      */
      // this.specIt((specNames, specs, settings, execution) => {

/*
  private displayLog(number?: number, specs?: Array<Spec>): {
    start: boolean,
    executed: {
      end: Function,
      spec: Function,
      start: Function
    }
  } {
    return {
      start: false,
      executed: {
        end: (): boolean => {
          // If user added custom specs.
          const customized: boolean = Array.isArray(this.options.execute);

          // Number of all specs.
          const all: number = Object.keys(specs).length;

          // Number of custom specs - choosed by user.
          const custom: number = (customized) ? Object.keys(this.options.execute).length : 0;

          // Number of actual spec minus number of all custom specs.
          const actual: number = number - custom;

          // Final number of specs.
          const final: number = all - custom;

          if (
            (typeof this.options.execute === 'boolean' && this.options.console.executed === true && number === all)
            ||
            (customized === true && custom > 0 && actual === final)
          ) {
            return true;
          }
        },
        spec: (): boolean => {
          if (this.options.console.executed !== false) {
            return true;
          }
        },
        start: (): boolean => {
          if (this.options.console.executed !== false && this.start) {
            return true;
          }
        }
      }
    };
  }
  */

  /**
   * Inject new - `private` instance of all requested parameters for execution list of specs.
   * It is used in `eachIt()` method, and is needed because of asynchronous executing.
   * @param specIt Callback function to use private requested arguments to execute list of specs.
   */
  /* private specIt(specIt: SpecIt): void {
    const settings = { ...{}, ...this.settings };

    specIt(
      (settings.execute !== false) ? Object.keys({ ...{}, ...this.specs }) : [], 
      { ...{}, ...this.specs }, 
      {
        ...{},
        ...this.settings,
        ...{
          description: this.description,
          displayStart: true,
          specDescription: this.specDescription
        }
      }, (number: number): boolean => {
        return this.execution(settings, number);
      });
  } */
