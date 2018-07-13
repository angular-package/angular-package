// external.
import {

} from 'jasmine';

// internal.
import { SelectorClass } from './selector.class';
import { ConsoleLog, Execute, SpecIt } from '../type';
import { Spec } from '../interface';

/**
 * Class to instantiate spec to execute.
 * @export
 * @extends {SelectorClass<T>}
 * @template T Component type to test.
 */
export class TestingClass<T> extends SelectorClass<T> {
  /**
   * Execute specs list declared before by using `spec()` method.
   * It also restores original settings before each execute and use settings from arguments.
   * @param [execute] Filter executed specs.
   * @param [consoleLog] What logs to display.
   */
  execute(execute?: Execute, consoleLog?: ConsoleLog): this {
    this
      .restoreSettings()
      .describe(
        () => this
        .setSettings({ log: consoleLog, execute })
        .eachIt()
      );

    return this;
  }

  /**
   * Add description only to selected spec and add spec to specs list for future executing.
   * It also reset stored specs list when argument `reset` is `true` which is defaultly `true`.
   * @param description Spec description that will be added to description.
   * @param spec Spec where key is its name.
   * @param [reset=true] Reset specs list for executing.
   */
  spec(description: string, spec: Spec, reset = true): this {
    this.specDescription = description;
    // Reset specs.
    if (reset === true) {
      this.specs = {};
    }
    // Add spec.
    this.specs = { ...this.specs, ...spec };

    return this;
  }

  /**
   * Uses jasmine function `it()` for asynchronous execution stored list of specs.
   */
  private eachIt(): this {
    (async (): Promise<any> => {
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
      */

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
              specs[name]();
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
    })();

    return this;
  }

  /**
   * Inject new - `private` instance of all requested parameters for execution list of specs.
   * It is used in `eachIt()` method, and is needed because of asynchronous executing.
   * @param specIt Callback function to use private requested arguments to execute list of specs.
   */
  private specIt(specIt: SpecIt): void {
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
  }

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
}
