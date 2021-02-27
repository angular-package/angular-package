// TODO: Check ArgumentHandlerClass
// import { ArgumentHandlerClass } from '../../handler/src/argument-handler.class';

// core/interface
import { CycleHookMethods, StoreGetterSetter } from '../interface';

// @angular-package/type
import { CycleHook, isPrimitiveType } from '@angular-package/type';

/**
 * Class to store original `setter`, `getter` and angular cycle hooks.
 * @export
 */
export class StoreOriginalClass implements CycleHookMethods, StoreGetterSetter {

  getter = {};
  setter = {};

  ngAfterContentInit?: () => any;
  ngAfterContentChecked?: () => any;
  ngAfterViewInit?: () => any;
  ngAfterViewChecked?: () => any;
  ngDoCheck?: () => any;
  ngOnInit?: () => any;
  ngOnDestroy?: () => any;
  ngOnChanges?: () => any;

  /**
   * Constructor.
   * @param $$source Source of properties.
   */
  constructor() { }

  /**
   * @param source Function or component.
   * @param hooks List of name of cycleHook to store.
   */
  public cycleHook<Source>(hooks: Array<CycleHook>, source: Source): this {
    if (hooks instanceof Array) {
      hooks.forEach((hook: string) => {
        if (typeGuard(hook, 'string')) {
          Object.assign(this, {
            [hook]: (source instanceof Function) ? source.prototype[hook] : source[hook]
          });
        }
      });
    }

    return this;
  }

  /**
   * @param source Function or component.
   * @param properties Properties to store getter/setter.
   */
  public properties<Source>(properties: string | Array<string>, source: Source): this {
    if (isPrimitiveType<string>(properties, 'string')) {
      properties = [properties];
    }
    properties.forEach((property: string) => {
      this.$$merge(property, source);
    });

    return this;
  }

  /**
   * Merge found setter/getter in object.
   * @param source Function or component.
   * @param property Properties to store getter/setter.
   */
  private $$merge<Source>(property: string, source: Source): void {
    Object.assign(this, {
      getter: {
        [property]: (source instanceof Function)
          ? source.prototype.__lookupGetter__(property) // Function.
          : source['__proto__'].__lookupGetter__(property) // Component.
      },
      setter: {
        [property]: (source instanceof Function)
          ? source.prototype.__lookupSetter__(property)
          : source['__proto__'].__lookupSetter__(property)
      }
    });
  }
}

