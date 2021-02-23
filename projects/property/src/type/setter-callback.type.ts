export type SetterCallback<Source, Key extends keyof Source> = (value?: Source[Key], oldValue?: Source[Key], instance?: Source) => void;
