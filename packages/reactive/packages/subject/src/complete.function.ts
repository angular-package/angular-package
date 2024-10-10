import * as _ from 'lodash-es';
export const completeFunction = function (target: Function): void {
  Object.defineProperty(target.prototype, 'complete', {
    value: function (properties: string | string[]): void {
      if (properties instanceof Array) {
        _.each(properties, (propertyName: string): void => {
          if (this[`${propertyName}$`]) {
            this[`${propertyName}$`].complete();
          }
        });
      } else {
        if (this[`${properties}$`]) {
          this[`${properties}$`].complete();
        }
      }
    }
  });
};
