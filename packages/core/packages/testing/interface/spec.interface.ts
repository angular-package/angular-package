
/**
 * Structure of providing specs where key is specific spec name. For example `it(`key`, () => {});
 * @export
 */
export interface Spec {
  [name: string]: () => any;
}
