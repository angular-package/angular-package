export interface PropertiesInterface<T> {
  [key: number]: { [propertyName: string]: T /* initialValue */ } | string;
}
