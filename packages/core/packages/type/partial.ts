export type Partial<T> = {
  [P in keyof T]?: T[P];
};
// type PartialPerson = Partial<Person>;
