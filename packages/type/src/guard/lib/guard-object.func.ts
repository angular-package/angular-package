/**
 * Guard the `object` to be `Type` type and check by finding `property` in the `object`.
 * Use `isObject()` function for check ONLY.
 * @param object to guard and to find `property` in.
 * @param property to find in `object`.
 * @returns boolean
 * @example
 * interface Person { firstName: string; surname: string; }
 * interface Company { name: string; taxId: number; }
 * const person: Person = { firstName: 'Ścibor', surname: 'Rudnicki' };
 * const company: Company = { name: 'STER.Black', taxId: 7822239908 }
 * guardObject<Person>(person, 'firstName');
 * guardObject<Company>(company, 'taxId');
 * guardObject<Company>(person, 'firstName'); // Guarding parameter object as `person` with `Company` interface.
 * guardObject<Person>(company, 'taxId'); // Guarding parameter object as `company` with `Person` interface.
 */
export const guardObject = <Type>(object: Type, property: string): object is Type => property in object;
