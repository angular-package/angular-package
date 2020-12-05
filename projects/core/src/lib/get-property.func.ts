export function getProperty<T, K extends keyof T>(obj: T, key: K): any {
  return obj[key];  // Inferred type is T[K]
}
