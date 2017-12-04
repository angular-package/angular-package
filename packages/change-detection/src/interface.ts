export interface PropertySettingsInterface {
  changeDetection: boolean;
}
export interface PropertiesInterface {
  [index: string]: PropertySettingsInterface;
}
export interface LookUpInterface {
  getter: Object;
  setter: Object;
}
