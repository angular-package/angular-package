export interface LookupInterface {
  getter: {
    [property: string]: Function
  };
  setter: {
    [property: string]: Function
  };
}
