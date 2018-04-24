// external
import * as _ from 'lodash-es';

// internal
import { CycleHookType } from '../../type';
import { CycleHookInterface } from '../../interface';
import { StoreGetterSetterInterface } from '../interface';

/**
 * Class to store original `setter`, `getter` and cycle hooks.
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
   * @param {Function} t Function or component.
   * @param {CycleHookType[]} names Name of cycleHook to store.
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
   * @param {Function} t Function or component.
   * @param {(string | string[])} p Properties to store getter/setter.
   * @returns {StoreOriginalClass}
   * @memberof StoreOriginalClass
   */
  public setterGetter<T>(t: Function | T, p: string | string[]): StoreOriginalClass {
    try {
      if (p instanceof Array) {
        if (t instanceof Function) {
          _.each(p, (property: string) => this.merge(t, property));
        }
      } else {
        this.merge(t, p);
      }
    } catch (e) {
    }
    return this;
  }

  /**
   * Method to merge found setter/getter in this object.
   * @private
   * @param {Function} t Function or component.
   * @param {string} p Properties to store getter/setter.
   * @memberof StoreOriginalClass
   */
  private merge<T>(t: Function | T, p: string): void {
    if (t) {
      _.merge(this, {
        getter: {
          [p]: (t instanceof Function) ? t.prototype.__lookupGetter__(p) : t['__proto__'].__lookupGetter__(p)
        },
        setter: {
          [p]: (t instanceof Function) ? t.prototype.__lookupSetter__(p) : t['__proto__'].__lookupSetter__(p)
        }
      });
    } else {
      throw new Error(`StoreOriginalClass.merge argument \`t\` is undefined.`);
    }
  }
}
