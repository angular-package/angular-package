
// internal
import { TestPropertyComponent } from '../test/component';
import { TestModule } from '../test/test.module';

import { TestingClass } from '../../testing';
import { Options } from '../../testing/interface';
import { PropertyService } from './property.service';

const TESTING_OPTIONS: Options = {
  log: true,
  execute: false
};

const testingClass: TestingClass<TestPropertyComponent> =
  new TestingClass<TestPropertyComponent>('TestPropertyComponent', {
    imports: [
      TestModule
    ]
  },
    TestPropertyComponent,
    TESTING_OPTIONS);

testingClass
  .spec('should have prefix and suffix', {
    '`propertyService`, `propertyService` instance.': testing => testing
      .before(comp => comp.propertyService instanceof PropertyService)
      .truthy()
  })
  .execute(true)

  .spec('should have prefix and suffix', {
    'working.': testing => {
      testing
        .before(component => {
          component.propertyService
            .setPrefix('__')
            .setSuffix('__');

          return component.propertyService.propertyName('test');
        })
        .equal('__test__')
        .before(component => {
          component.propertyService.wrap<TestPropertyComponent, number>(component, 'age',
            (property: string, source?: TestPropertyComponent, sourcePropertyName?: string): number => {
              source['target'][property] = source[sourcePropertyName];
              source['target'][sourcePropertyName] = source[sourcePropertyName];

              return source[sourcePropertyName];
            });
          component.age = 37;
        })
        .equal<number>(['age', '__age__', 'target.age', 'target.__age__'], 37);
    }
  })
  .execute(true)

  .spec('should have `string()` method', {
    'properly working.': testing => {
      testing
        .before(component => component.propertyService.string(component.firstname))
        .truthy()
        .before(component => component.propertyService.string(component._setAge))
        .not
        .truthy()
        .before(component => component.propertyService.string(component.age))
        .falsy();
    }
  })
  .execute(true)

  .spec('should have `set()` method', {
    'properly working.': testing => {
      testing
        .before(component => {
          component.propertyService.set(component, 'age', 27);
        })
        .equal<number>('age', 27);
    }
  })
  .execute(true)

  .spec('should have `get()` method', {
    'properly working.': testing => {
      testing
        .before(component => component.propertyService.get(component, 'data.age'))
        .equal<number>(27);
    }
  })
  .execute(true)

  .spec('should have `clear()` method', {
    'properly remove and restore.': testing => {
      testing
        .before(component => {
          component.propertyService.bind<TestPropertyComponent, string>(component, 'age', 'target');
          component.age = 27;
        })
        .equal<number>(['age', '_setAge'], 27)
        .before(component => {
          component.propertyService.clear(component, 'age');
          component.age = 37;
        })
        .equal<number>(['age', '_setAge'], 37);
    }
  })
  .execute(true)

  .spec('should have `bind()` method', {
    'with `String` argument.': testing => testing
      .before(comp => {
        comp.propertyService.bind<TestPropertyComponent, string>(comp, 'firstname', 'target');
        comp.firstname = 'Lucas';
        comp.propertyService.bind<TestPropertyComponent, string>(comp, 'surname', 'target');
        comp.surname = 'Natko';
      })
      .equal<string>('target.firstname', 'Lucas')
      .equal<string>('surname', 'Natko'),
    'with `Array` argument.': testing => {
      testing
        .before(comp => {
          comp.propertyService.bind<TestPropertyComponent, string>(comp, ['firstname', 'surname'], 'target');
          comp.firstname = 'Lucas';
          comp.surname = 'Tramp';
        })
        .equal<string>(['firstname', 'target.firstname'], 'Lucas')
        .equal<string>(['surname', 'target.surname'], 'Tramp')
        .before(comp => {
          comp.propertyService
            .clear(comp, ['firstname', 'surname'])
            .bind<TestPropertyComponent, any>(comp, 'firstname', comp.targetObject)
            .bind<TestPropertyComponent, any>(comp, 'surname', comp.targetObject);
          comp.firstname = 'testfirstname';
          comp.surname = 'testsurname';
        })
        .equal<string>('targetObject.firstname', 'testfirstname')
        .equal<string>('targetObject.surname', 'testsurname');
    },
    'firstname changed after bind with `Array` of string and target as `String`.': testing => {
      const firstname = 'Lucas';
      const surname = 'Tramp';
      testing
        .before(comp => {
          comp.propertyService
            .clear(comp, ['firstname', 'surname'])
            .bind<TestPropertyComponent, string>(comp, ['firstname', 'surname'], 'target');

          comp.firstname = firstname;
          comp.surname = surname;
        })
        .equal<string>(['firstname', 'target.firstname'], firstname)
        .equal<string>(['surname', 'target.surname'], surname)
        .set<string>('firstname', 'Donald')
        .equal<string>(['firstname', 'target.firstname'], 'Donald');
    },
    'firstname changed after bind with `Array` of string and target as `Object`.': testing => {
      const firstname = 'Lucas string object';
      const surname = 'Tramp string object';
      testing
        .before(comp => {
          comp.propertyService
            .clear(comp, ['firstname', 'surname'])
            .bind<TestPropertyComponent, {}>(comp, ['firstname', 'surname'], comp.targetObject);

          comp.firstname = firstname;
          comp.surname = surname;
        })
        .equal<string>(['firstname', 'targetObject.firstname'], firstname)
        .equal<string>(['surname', 'targetObject.surname'], surname)
        .set<string>('firstname', 'Donald')
        .equal<string>(['firstname', 'targetObject.firstname'], 'Donald');
    },
    'Remove binded.': testing => testing
      .before(comp => {
        comp.propertyService.bind<TestPropertyComponent, string>(comp, ['firstname', 'surname'], 'target');
        if (comp.propertyService.binded instanceof Array) {
          const index: number = comp.propertyService.binded.indexOf('surname');
          if (index > -1) {
            comp.propertyService.binded = index;
          }
        }
        if (comp.propertyService.binded instanceof Array) {
          return comp.propertyService.binded.indexOf('surname');
        }
      })
      .equal<number>(-1)
  })
  .execute(true)

  /*
    wrap()
  */
  .spec('should have `wrap`()` method', {
    'with `String` argument.': testing => testing
      .before(comp => {
        comp.propertyService
          .clear(comp, 'firstname')
          .wrap<TestPropertyComponent, string>(comp, 'firstname',
            (property, source): string => source['target'][property] = source[property],
            (property, source) => source['target'][property]
          );

        return comp.firstname = 'Michael string';
      })
      .equal('Michael string'),

    ' with `Array` argument.': testing => testing
      .before(comp => {
        comp.propertyService
          .clear(comp, ['firstname', 'surname'])
          .wrap<TestPropertyComponent, string>(
            comp,
            'firstname',
            (property, source) => source['target'][property] = source[property],
            (property, source) => source['target'][property]
          )
          .wrap<TestPropertyComponent, string>(
            comp,
            'surname',
            (property, source) => source['target'][property] = source[property],
            (property, source) => source['target'][property]
          );

        comp.firstname = 'Michael array';
        comp.surname = 'Cors array';
      })
      .equal('firstname', 'Michael array')
      .equal('surname', 'Cors array')
  })
  .execute(true, true);
