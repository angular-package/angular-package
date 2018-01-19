import { PartialObserver } from 'rxjs/Observer';
/**
 * Define property with Function to subscribe to component observable with name.
 * @param {Function} target
 */
export const subscribeFunction = function<T>(target: Function): void {
  Object.defineProperty(target.prototype, 'subscribe', {
    value: function (propertyName: string, observer?: PartialObserver<T>): void {
      if (this[`${propertyName}$`]) {
        this[`${propertyName}$`].subscribe(observer);
      }
    }
  });
};
