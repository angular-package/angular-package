/**
 * The type of generic object that takes generic type variable `Value`.
 */
export type GenericObject<Value = any> = {
  [index: string]: Value;
};
