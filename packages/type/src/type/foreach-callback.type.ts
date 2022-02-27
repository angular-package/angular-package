/**
 * Represents a callback function of `forEach()` method which is executed once for each element.
 * @param result The result of the check of a `boolean` type.
 * @param value The value that has been checked of a generic type variable `Value`.
 * @param index An optional `number` of checked `array` element.
 * @param array An optional `array` of `any` type that each element is checked.
 * @param payload An optional `object` of a generic type variable `Payload` to provide more data.
 * @returns The return value is void.
 */
export type ForEachCallback<Value = any, Payload = object> = (
  result: boolean,
  value: Value,
  index: number,
  array: any[],
  payload?: Payload
) => void;
