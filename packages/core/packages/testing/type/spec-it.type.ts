import { Spec, SpecSettings } from '../interface';

export type SpecIt = (specsName: Array<string>, specs: Spec, settings: SpecSettings, execution: (number: number) => boolean) => any;
