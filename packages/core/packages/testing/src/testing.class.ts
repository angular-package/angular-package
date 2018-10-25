// external.
import {

} from 'jasmine';

// internal.
import { SelectorClass } from './selector.class';
import { ConsoleLog, Execute, PickTesting } from '../type';
import { Spec, Testing } from '../interface';

/**
 * Class to instantiate spec to execute.
 * @export
 * @extends {SelectorClass<T>}
 * @template T Component type to test.
 */
export class TestingClass<T> extends SelectorClass<T> implements Testing<T> {
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
      .spec(this.description, this.beforeEach, this.specs)
      .eachIt();
    
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
  spec(description: string, beforeEach?: (component: T, done: any) => void, spec?: Spec<T>, reset = true): this {
    this.description = description;
    // Reset specs.
    if (reset === true) {
      this.specs = {};
    }
    // Add spec.
    this.specs = { ...this.specs, ...spec };
    this.beforeEach = beforeEach;

    return this;
  }

  /**
   * Uses jasmine function `it()` for asynchronous execution stored list of specs.
   * @author wwwdev.io
   * @date 2018-08-21
   */
  protected eachIt(): this {
    describe(this.description, () => {
      this.configure();

      let i = 0;
      let displayStart = true;
  
      ((this.settings.execute !== false && this.specs) ? Object.keys({ ...{}, ...this.specs }) : []).forEach(name => {
        i++;
        const number = i;

        if (this.beforeEach instanceof Function) {
          beforeEach(done => {
            if (this.componentInstance !== undefined && this.beforeEach instanceof Function) {
              this.beforeEach(this.componentInstance, done);
            }
          });
        }

        it(name, done => {
          // const a: T | undefined = this.originalComponentInstance;
          // this.componentInstance = a;
          // Display start.
          this.consoleClass
            .green(`Describe ${this.description} ${this.specDescription}`, ['bold'])
            .log(displayStart);
          
          if (this.specs[name] instanceof Function && this.execution(number) === true) {
            this.consoleClass
              .green(`#${number}. ${name}`)
              .log(this.settings.console.executed);
  
            // Run spec.
            const testing: PickTesting<T> = this;
            this.specs[name](testing, done);
          } else if (this.execution(number) === false) {
            this.consoleClass
              .text(`Skipped #${number}. ${name}`, undefined, ['faint'])
              .log(this.settings.console.skipped);
          }
          // Do not display start log anymore.
          displayStart = false;
  
          if (this.execution(number) === false) {
            pending(`Skipped #${number}. ${name}`);
          }
  
          done();
        });
      });  
    });

    return this;
  }

  /**
   * Instantiate class `TestingClass`.
   * @author wwwdev.io
   * @date 2018-08-21
   */
  private instance(): TestingClass<T> {
    const t = this;

    return new TestingClass<T>(
      { ...{}, ...t.moduleDef },
      t.componentTest,
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
