import { BindPropertiesClass } from './bind-properties.class';

export function BindProperties(properties: Array<string> | string, to?: string): BindPropertiesClass {
  return new BindPropertiesClass(properties);
}
