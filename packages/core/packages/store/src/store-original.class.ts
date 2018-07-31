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
   * @param source Function or component.
   * @param properties Properties to store getter/setter.
   */
  setterGetter<T>(source: Function | T, properties: string | Array<string>): StoreOriginalClass {
    try {
      if (properties instanceof Array) {
        if (source instanceof Function) {
          _.each(properties, (property: string) => this.merge(source, property));
        }
      } else {
        this.merge(source, properties);
      }
    } catch (e) {
    }

    return this;
  }

  /**
   * Method to merge found setter/getter in this object.
   * @param source Function or component.
   * @param property Properties to store getter/setter.
   */
  private merge<T>(source: Function | T, property: string): void {
    if (source) {
      _.merge(this, {
        getter: {
          [property]: (source instanceof Function)
            ? source.prototype.__lookupGetter__(property) : source['__proto__'].__lookupGetter__(property)
        },
        setter: {
          [property]: (source instanceof Function)
            ? source.prototype.__lookupSetter__(property) : source['__proto__'].__lookupSetter__(property)
        }
      });
    } else {
      throw new Error(`StoreOriginalClass.merge argument \`t\` is undefined.`);
    }
  }
}
