export interface Spec {
  [index: string]: {
    false?: Function;
    true?: Function;
  };
}
