export interface StoreGetterSetterInterface {
  getter: {
    [property: string]: Function
  };
  setter: {
    [property: string]: Function
  };
}
