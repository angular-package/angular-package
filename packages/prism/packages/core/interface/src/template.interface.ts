import { ApPrismAttributes } from '.';

export interface ApPrismTemplateElement {
  attributes?: ApPrismAttributes;
  className: string;
}

export interface ApPrismTemplate {
  pre?: ApPrismTemplateElement;
  code?: ApPrismTemplateElement;
}
