export interface StoreGetterSetter {
  getter: {
    [property: string]: (...param: any) => any
  };
  setter: {
    [property: string]: (...param: any) => any
  };
}
