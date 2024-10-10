export type Setter<S, R = any> = (property: string, source?: Function | S, sourcePropertyName?: string) => R;
