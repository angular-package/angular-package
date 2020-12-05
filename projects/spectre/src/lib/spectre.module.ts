import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpectreComponent } from './spectre.component';
import { SpectreInputModule } from '../input';

// define common
const COMMON_DECLARATIONS_EXPORTS = [
  SpectreComponent
];

// define imports
const imports = [
  SpectreInputModule
];

// assign common
const declarations = COMMON_DECLARATIONS_EXPORTS;
const exports = COMMON_DECLARATIONS_EXPORTS;

@NgModule({
  declarations,
  exports,
  imports
})
export class SpectreModule { }
