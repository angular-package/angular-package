// external
import * as _ from 'lodash-es';

// internal
import { CycleHook } from '../../type';
import { CycleHookMethods } from '../../interface';
import { StoreGetterSetterInterface } from '../interface';

/**
 * Class to store original `setter`, `getter` and cycle hooks.
 * @export
 */
export class StoreOriginalClass implements CycleHookMethods, StoreGetterSetterInterface {

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
   * @param t Function or component.
   * @param names Name of cycleHook to store.
   */
  cycleHook(t: Function, names: Array<CycleHook>): StoreOriginalClass {
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
   * @param t Function or component.
   * @param p Properties to store getter/setter.
   */
  setterGetter<T>(t: Function | T, p: string | Array<string>): StoreOriginalClass {
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
   * @param t Function or component.
   * @param p Properties to store getter/setter.
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
