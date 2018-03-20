import { Inject, InjectionToken, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// @ngx
import { ApPrismModule } from '@angular-package/prism';

// internal
import { PackageConfigInterface } from './package-config.interface';
import { DocsExampleComponent } from './docs-example.component';

export let PACKAGE_CONFIG_TOKEN = new InjectionToken<PackageConfigInterface>('package.config');

const COMMON_DECLARATIONS_EXPORTS = [DocsExampleComponent];

/**
 * @export
 * @class DocsExampleModule
 */
//#region Module
@NgModule({
  declarations: COMMON_DECLARATIONS_EXPORTS,
  exports: COMMON_DECLARATIONS_EXPORTS,
  imports: [
    CommonModule,
    FlexLayoutModule,

    // material
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,

    // @ngx
    ApPrismModule
  ]
})
export class ApDocsExampleModule {

  /**
   * @static
   * @param {(PackageConfigInterface | undefined)} [config]
   * @returns {ModuleWithProviders}
   * @memberof ApDocsExampleModule
   */
  static forRoot( @Optional() config?: PackageConfigInterface | undefined): ModuleWithProviders {
    return {
      ngModule: ApDocsExampleModule,
      providers: [
        { provide: PACKAGE_CONFIG_TOKEN, useValue: config }
      ]
    };
  }
}
//#endregion
