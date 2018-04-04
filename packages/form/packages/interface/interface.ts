import { element } from '../type';
import { HtmlAttributesInterface } from './htmlattributes.interface';
import { MdInputAttributesInterface } from './mdinput.interface';
import { ErrorMessagesInterface } from './error-messages.interface';
import { ValidatorsInterface } from './validators.interface';

export interface MdHintInterface {
  start?: 'maxlength' | string;
  end?: 'maxlength' | string;
}

export interface MdInterface {
  mdHint?: MdHintInterface;
  mdPlaceholder?: string;
  mdPrefix?: string;
  mdSuffix?: string;
}

/**
 * Destroy property `__component` instance on
 * @export
 * @interface DestroyInterface
 */
export interface DestroyInterface {
  onCancelled: boolean;
  onChanged: boolean;
  onSubmitted: boolean;
}

/**
 * @export
 * @interface FormElementInterface
 */
export interface FormElementInterface extends MdInterface {
  attributes: MdInputAttributesInterface;
  destroy?: DestroyInterface;
  element: element;
  focus?: boolean;
  key: string;
  label?: string;
  options?: Array<any>;
  validators?: ValidatorsInterface;
  viewValue?: Array<any>;
}

export interface ArrayFormElementInterface {
  [index: number]: FormElementInterface;
}
