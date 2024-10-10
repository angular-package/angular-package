// external
import * as _ from 'lodash-es';

// internal
import { LookupInterface } from './lookup.interface';

export const originalGetterSetter = (lookup: LookupInterface, target: Function, property: string): any => {
  _.merge(lookup, {
    getter: { [property]: target.prototype.__lookupGetter__(property) },
    setter: { [property]: target.prototype.__lookupSetter__(property) },
  });
  return lookup;
};
