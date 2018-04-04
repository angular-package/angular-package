import { ErrorMessagesInterface } from './ngx-form-interface.error-messages';

export interface ValidatorHolderInterface {
  validator: any;
  value: any;
}

export interface ValidatorsHolderInterface {
  disabled?: ValidatorHolderInterface;
  email?: ValidatorHolderInterface;
  max?: ValidatorHolderInterface;
  min?: ValidatorHolderInterface;
  maxLength?: ValidatorHolderInterface;
  minLength?: ValidatorHolderInterface;
  nullValidator?: ValidatorHolderInterface;
  pattern?: ValidatorHolderInterface;
  required?: ValidatorHolderInterface;
  requiredTrue?: ValidatorHolderInterface;
}

export interface ValidatorsInterface {
  compose: Array<any>;
  errorMessage?: ErrorMessagesInterface;
}
