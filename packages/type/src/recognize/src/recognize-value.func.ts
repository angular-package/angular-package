// Object.
import { is } from '../../is/lib/is.object';
// Function.
import { typeOf } from '../../lib/type-of.func';
// Type.
import { OfRecognized } from '../type/of-recognized.type';
// Const.
import { RECOGNIZE_INSTANCES } from './recognize-instances.const';
/**
 * Gets recognized types and instances of given `value`.
 * @param value The value of any type to recognize.
 * @param onlyTrue Determines whether or not show only recognized as `true`.
 * @param instances An optional array of objects to check by using `instanceof` operator.
 * @returns The return value is an object of types and instances recognized as `true` or all even those recognized as `false`.
 */
export const recognizeValue = (
  value: any,
  onlyTrue: boolean = true,
  instances: any[] = []
): OfRecognized => {
  // Recognize types.
  const ofRecognized: OfRecognized = {
    'Array.isArray': Array.isArray(value),
    isClass: is.class(value),
    isFunction: is.function(value),
    'Number.isInteger': Number.isInteger(value),
    'Number.isFinite': Number.isFinite(value),
    'Number.isNaN': Number.isNaN(value),
    'Number.isSafeInteger': Number.isSafeInteger(value),
    typeOf: typeOf(value),
    typeof: typeof value,
  };

  try { Object.assign(ofRecognized, { isFinite: isFinite(value) }); } catch (e) {}
  try { Object.assign(ofRecognized, { isNaN: isNaN(value) }); } catch (e) {}

  // Recognize instances.
  RECOGNIZE_INSTANCES.concat(instances as any).forEach((instance) => (
    Object.assign(ofRecognized, { [instance.name]: value instanceof instance })
  ));

  // If only true remove false.
  if (is.true(onlyTrue)) {
    Object.keys(ofRecognized).filter((type: string) =>
      is.false(ofRecognized[type as keyof OfRecognized])
        ? delete ofRecognized[type as keyof OfRecognized]
        : true
    );
  }
  return ofRecognized;
};
