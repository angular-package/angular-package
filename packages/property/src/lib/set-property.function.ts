import { typeGuard, typeObjectGuard } from '@angular-package/type/guard';
import { Types } from '@angular-package/type';

export function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K], type?: Types<T>): void {
  if (typeObjectGuard<T>(obj)) {
    if (typeof type === 'string') {
      if (typeGuard(value, type) === false) {
        throw new Error(`Object (${obj}) property (${key}) value (${value}) must be type '${type}'`);
      }
    }
    Object.assign(obj, { [key]: value });
  } else {
    throw new Error(`Argument(obj type T): must be type T`);
  }
}
