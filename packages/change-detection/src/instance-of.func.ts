export function instanceOf<T>(object: any, find: string): object is T {
  return find in object;
}
