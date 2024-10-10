import { PropertyService } from './property.service';
import { PREFIX } from './prefix.token';
import { SUFFIX } from './suffix.token';

export function PropertyProvider(prefix = '_', suffix = ''): Array<{}> {
  return [
    { provide: PREFIX, useValue: prefix },
    { provide: SUFFIX, useValue: suffix },
    { provide: PropertyService, useClass: PropertyService, deps: [PREFIX, SUFFIX] }
  ];
}
