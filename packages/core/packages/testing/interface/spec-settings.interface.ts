import { Settings } from './settings.interface';

export interface SpecSettings extends Settings { 
  description: string;
  displayStart: boolean;
  specDescription: string;
}
