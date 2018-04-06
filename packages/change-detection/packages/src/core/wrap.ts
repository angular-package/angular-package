import { ApChangeDetectionWrap } from '../../interface';

export const WRAP_DEFAULT: ApChangeDetectionWrap = {
  detach: {
    name: '_detach',
    active: true
  },
  detect: {
    name: '_detect',
    active: true
  },
  properties: {
    name: '_properties',
    active: true
  },
  reattach: {
    name: '_reattach',
    active: true
  }
};
