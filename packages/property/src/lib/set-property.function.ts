import { Constructor, isObject, Primitives, isPrimitiveType } from '@angular-package/type';

export function setProperty<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key], type?: Primitives): void {
  if (isObject<Obj>(obj)) {
    if (type && isPrimitiveType(value, type) === false) {
      throw new Error(`Object (${obj}) property (${key}) value (${value}) must be type '${type}'`);
    }
    Object.assign(obj, { [key]: value });
  } else {
    throw new Error(`setProperty<Obj, Key extends keyof Obj>(obj: Obj): must be type Obj`);
  }
}
