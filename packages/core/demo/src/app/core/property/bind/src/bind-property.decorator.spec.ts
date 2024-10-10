// internal
import { TestingClass } from '../../../testing';
import { PropertyDecoratorComponent } from '../../test/decorator.component';
import { testModuleMetadata } from '../../test/config/testmodulemetadata.config';
import { options } from '../../test/config/options.config';

const testingClass: TestingClass<PropertyDecoratorComponent> =
  new TestingClass<PropertyDecoratorComponent>('BindProperty', testModuleMetadata, PropertyDecoratorComponent, options);

testingClass
  .spec('should have', {
    'binded firstname.': testing => testing
      .before(comp => {
        comp.firstname = 'alex';
      })
      .equal(['firstname', 'testService.firstname'], 'alex')
  })
  .execute(true);
