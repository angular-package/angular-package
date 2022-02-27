/**
 * Guards the value of string to includes the given `tags`.
 * @param template The template of `string` type to guard.
 * @param tagNames The tag names of an array type to check whether the given `template` includes.
 * @returns The return value is a `boolean` indicating whether the given `template` includes the given `tags`.
 * @angularpackage
 */
// export const guardTemplate = (
//   template: string,
//   tagNames = ['problem', 'fix']
// ): template is string => {
//   return (
//     typeof template === 'string' &&
//     (Array.isArray(tagNames)
//       ? tagNames.every((name) => template.includes(`{${name}}`))
//       : true)
//   );
// };
