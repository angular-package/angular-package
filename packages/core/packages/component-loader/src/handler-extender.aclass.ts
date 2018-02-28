// import { ConfigInterface } from '../connect';

/**
 * @export
 * @abstract
 * @property {properties = '_properties'} - Properties store name by which source component is connected with the target component.
 * @property {propertyWrapper = `${this.prefix}${this.property}${this.suffix}`} - Full name of source property, with prefix and suffix.
 * @property {prefix = '_'} - Source property prefix - property that will be connected with targeted dynamic component.
 * @property {suffix = ''} - Source property prefix - property that will be connected with targeted dynamic component.
 * @class HandlerExtender
 */
export abstract class HandlerExtenderAClass {
  /**
   * Source property prefix - property that will be connected with targeted dynamic component.
   * @protected
   * @memberof HandlerExtender
   */
  protected prefix = `_`;

  protected property = '';

  /**
   * Store of properties that source component will be connecting with the target component.
   * @protected
   * @memberof HandlerExtender
   */
  protected propertiesHolderName = '__properties';

  /**
   * Full name of source property, with prefix and suffix.
   * @protected
   * @memberof HandlerExtender
   */
  protected propertyWrapper = '';

  /**
   * Source property suffix - means property that will be connected with targeted dynamic component.
   * @protected
   * @memberof HandlerExtender
   */
  protected suffix = ``;

  /**
   * Dynamic component property name - target;
   * @protected
   * @memberof PropertyHandlerClass
   */
  protected targetName = '__component';

  source: Function = () => { };

  /**
   * @param {PropertyInterface} config
   * @returns {this}
   * @memberof HandlerExtender
   */
  public config(config?: any): this {
    if (config) {
      Object.assign(this, config);
    }
    this.propertyWrapper = `${this.prefix}${this.property}${this.suffix}`;
    return this;
  }

  /**
   * Store property name in component to use it later.
   * @returns {this}
   * @memberof HandlerExtender
   */
  store(): this {
    setTimeout(() => {
      if (this.source.hasOwnProperty(this.propertiesHolderName)) {
        if (this.source[this.propertiesHolderName].filter((property: string) => property === this.property).length > 0) {
          this.source[this.propertiesHolderName].push(this.property);
        }
      } else {
        this.source[this.propertiesHolderName] = [this.property];
      }
    }, 0);
    return this;
  }

  /**
   * @template T
   * @returns {this}
   * @memberof HandlerExtender
   */
  wrap<T>(): this {
    const t = this;
    Object.defineProperty(this.source, t.property, {
      set: function (value: T) {
        this[t.propertyWrapper] = value; // Store in wrapped property.
        if (this[t.targetName]) {
          this[t.targetName].instance[t.property] = this[t.propertyWrapper]; // Connect source property to instance target property.
        }
      },
      get: function (): T | undefined {
        if (this[t.targetName].instance) {
          return this[t.targetName].instance[t.property];
        }
      }
    });
    return this;
  }

  /**
   * Create new property that to wrap original with specified `prefix` and `suffix`.
   * @returns {this}
   * @memberof HandlerExtender
   */
  public wrapper(): this {
    Object.defineProperty(this.source, this.propertyWrapper , {
      configurable: false,
      writable: true
    });
    return this;
  }
}
