export type GetterCallback<Source, Key extends keyof Source> = (property?: Key, instance?: Source) => Source[Key];
