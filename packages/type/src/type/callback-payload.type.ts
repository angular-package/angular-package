import { GenericObject } from './generic-object.type';
/**
 * Experimental shape for a generic type variable `Payload`.
 */
export type CallbackPayload<Payload = object> = GenericObject & {

  /**
   * An optional action of a `string` type that describes the cause of performed callback.
   */
  action?: string;

  /**
   * An optional name of the function or method of a `string` type that performed callback.
   */
  name?: string;

  /**
   * An optional name of the parameter of a `string` type to which performed callback relates.
   */
  param?: string;

} & Payload;
