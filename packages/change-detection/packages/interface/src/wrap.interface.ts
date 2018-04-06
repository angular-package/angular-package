export interface WrapConfig {
  active: boolean;
  name?: string;
}

export interface ApChangeDetectionWrap {
  detach?: WrapConfig;
  detect?: WrapConfig;
  properties?: WrapConfig;
  reattach?: WrapConfig;
}
