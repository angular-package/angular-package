export type Getter<S, R = any> = (property: string, source?: Function | S) => R;
