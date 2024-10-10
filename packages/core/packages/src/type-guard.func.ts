
export const typeGuard = <T>(object: any): object is T => (typeof object === 'boolean') ? true : object;
