import { ApCompleteType } from './complete.type';
import { ApSubscribeType } from './subscribe.type';

export interface ApSubjectInterface {
  complete: ApCompleteType;
  subscribe: ApSubscribeType;
}
