// internal
import {
  accesskey, autocomplete, autofocus,
  classType, contenteditable, contextmenu,
  dir, disabled, dragabble, dropzone,
  element,
  hidden,
  id, input,
  lang,
  name,
  readonly, required,
  spellcheck, style,
  tabindex, translate, title,
  value
} from '../type';

/**
 * Some html attributes
 * http://w3c.github.io/html-reference/elements.html
 * @export
 * @interface HtmlAttributesInterface
 */
export interface HtmlAttributesInterface {
  accesskey?: accesskey;  // core

  autocomplete?: autocomplete;
  autofocus?: autofocus;

  class?: classType; // core
  contenteditable?: contenteditable; // core
  contextmenu?: contextmenu; // core

  dir?: dir;  // core
  dragabble?: dragabble; // core
  dropzone?: dropzone; // core
  disabled?: disabled;

  hidden?: hidden; // core
  id?: id; // core
  lang?: lang; // core

  max?: number;
  min?: number;
  maxlength?: number;
  minlength?: number;

  name?: name;

  pattern?: string;
  placeholder?: string;
  readonly?: readonly;
  required?: required;

  spellcheck?: spellcheck; // core
  step?: number;
  style?: style; // core

  tabindex?: tabindex; // core
  translate?: translate; // core
  title?: title; // core
  type?: input;

  value?: value;
}
