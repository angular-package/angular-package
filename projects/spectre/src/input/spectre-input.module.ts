import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SpectreInputComponent } from './spectre-input.component';

// define common
const COMMON_DECLARATIONS_EXPORTS = [
  SpectreInputComponent
 ];

// define imports
const imports = [
  CommonModule
];

// define schemas
const schemas = [
  CUSTOM_ELEMENTS_SCHEMA
];

// assign common
const declarations = COMMON_DECLARATIONS_EXPORTS;
const exports = COMMON_DECLARATIONS_EXPORTS;

@NgModule({
  declarations,
  exports,
  imports,
  schemas
})
export class SpectreInputModule { }
