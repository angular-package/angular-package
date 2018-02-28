// external
import * as _ from 'lodash-es';

// internal
import { CycleHookType } from '../../type';
import { CycleHookInterface } from '../../interface';
import { StoreGetterSetterInterface } from '../interface';

/**
 * Class to store original `setter`, `getter` and cycle hooks for decorator.
 * @export
 * @class StoreOriginalClass
 * @implements {CycleHookInterface}
 * @implements {StoreGetterSetterInterface}
 */
export class StoreOriginalClass implements CycleHookInterface, StoreGetterSetterInterface {

  getter = {};
  setter = {};

  ngAfterContentInit?: Function;
  ngAfterContentChecked?: Function;
  ngAfterViewInit?: Function;
  ngAfterViewChecked?: Function;
  ngDoCheck?: Function;
  ngOnInit?: Function;
  ngOnDestroy?: Function;
  ngOnChanges?: Function;

  /**
   *
   *
   * @param {Function} t
   * @param {CycleHookType[]} names
   * @returns {StoreOriginalClass}
   * @memberof StoreOriginalClass
   */
  public cycleHook(t: Function, names: CycleHookType[]): StoreOriginalClass {
    if (names instanceof Array) {
      _.each(names, (name: string) => {
        if (name) {
          this[name] = t.prototype[name];
        }
      });
    }
    return this;
  }

  /**
   *
   *
   * @param {Function} t
   * @param {(string | string[])} p
   * @returns {StoreOriginalClass}
   * @memberof StoreOriginalClass
   */
  public setterGetter(t: Function, p: string | string[]): StoreOriginalClass {
    if (p instanceof Array) {
      _.each(p, (property: string) => this.merge(t, property));
    } else {
      this.merge(t, p);
    }
    return this;
  }

  /**
   *
   *
   * @private
   * @param {Function} t
   * @param {string} p
   * @memberof StoreOriginalClass
   */
  private merge(t: Function, p: string): void {
    _.merge(this, {
      getter: {
        [p]: t.prototype.__lookupGetter__(p)
      },
      setter: {
        [p]: t.prototype.__lookupSetter__(p)
      }
    });
  }
}
