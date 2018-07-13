import { Spec, SpecSettings } from '../interface';

/**
 * Type of callback function executed when using `eachIt()` method.
 */
export type SpecIt = (specsName: Array<string>, specs: Spec, settings: SpecSettings, execution: (number: number) => boolean) => any;
