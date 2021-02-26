/**
 * Guard the `object` to be `Type` type and check by finding `property` in the `object`.
 * @param object to guard and to find `property` in.
 * @param property to find in `object`.
 * @returns boolean
 * @example
 * interface Person { firstName: string; surname: string; }
 * interface Company { name: string; taxId: number; }
 * const person: Person = { firstName: 'Ścibor', surname: 'Rudnicki' };
 * const company: Company = { name: 'STER.Black', taxId: 7822239908 }
 * isObjectType<Person>(person, 'firstName');
 * isObjectType<Company>(company, 'taxId');
 * isObjectType<Company>(person, 'firstName'); // Guarding parameter object as `person` with `Company` interface.
 * isObjectType<Person>(company, 'taxId'); // Guarding parameter object as `company` with `Person` interface.
 */
export const isObjectType = <Type>(object: Type, property: string): object is Type => property in object;
