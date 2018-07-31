import { PropertyService } from './property.service';
import { PREFIX } from './prefix.token';
import { SUFFIX } from './suffix.token';

export function PropertyProvider(prefix = '_', suffix = ''): Array<{}> {
  return [
    PropertyService,
    { provide: PREFIX, useValue: prefix },
    { provide: SUFFIX, useValue: suffix }
  ];
}
