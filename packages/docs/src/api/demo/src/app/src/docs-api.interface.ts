export interface DocsApiKey {
  name?: string,
  selector?: string | Array<string>,
  exportedAs?: string | Array<string>,
  table?: Array<{
    name: string,
    description: string,
    header: Array<string>,
    body: Array<{
      [key: string]: string
    }>
  }>
};
