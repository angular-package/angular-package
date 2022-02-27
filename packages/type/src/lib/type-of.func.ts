/**
 * Gets the specific object class type of any value.
 * @param value Any value to check its object class type.
 * @author https://javascript.plainenglish.io/the-best-way-to-type-check-in-vanilla-js-55197b4f45ec
 * @returns The return value is a `string` of the object class name.
 */
export const typeOf = (value: any): string =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
