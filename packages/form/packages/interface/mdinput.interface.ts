
import { HtmlAttributesInterface } from './ngx-form-interface.htmlattributes';

// MdInputContainer
export interface MdInputContainerInterface {
  color?: string;
  floatPlaceholder?: 'auto' | 'always' | 'never' | string;
  hintLabel?: string;
  hideRequiredMarker?: boolean;
}

export interface MdInputAttributesInterface extends MdInputContainerInterface, HtmlAttributesInterface { }
