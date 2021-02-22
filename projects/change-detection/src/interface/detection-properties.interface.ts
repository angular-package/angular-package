export interface GenericObject<T> {
  [name: string]: T;
}

export interface DetectionProperties extends GenericObject<boolean> {}
