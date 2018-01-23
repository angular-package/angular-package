export interface GetterSetterStoreInterface {
  getter: {
    [property: string]: Function
  };
  setter: {
    [property: string]: Function
  };
}
