
// internal
import { TestPropertyComponent } from '../test/component';
import { TestModule } from '../test/test.module';

import { TestingClass } from '../../testing';
import { Options } from '../../testing/interface';
import { PropertyClass } from './property.class';

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
    '`propertyClass` instance.': testing => testing.before(comp => comp.propertyClass instanceof PropertyClass)
      .truthy()
  })
  .execute(true)

  .spec('should have prefix and suffix', {
    'working.': testing => {
      testing
        .before(component => {
          component.propertyClass = new PropertyClass('__', '__');

          return component.propertyClass.propertyName('test');
        })
        .equal('__test__')
        .before(component => {
          component.propertyClass.wrap<TestPropertyComponent, number>(component, 'age',
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
        .before(component => component.propertyClass.string(component.firstname))
        .truthy()
        .before(component => component.propertyClass.string(component._setAge))
        .not
        .truthy()
        .before(component => component.propertyClass.string(component.age))
        .falsy();
    }
  })
  .execute(false)

  .spec('should have `set()` method', {
    'properly working.': testing => {
      testing
        .before(component => {
          component.propertyClass.set(component, 'age', 27);
        })
        .equal<number>('age', 27);
    }
  })
  .execute(false)

  .spec('should have `get()` method', {
    'properly working.': testing => {
      testing
        .before(component => component.propertyClass.get(component, 'data.age'))
        .equal<number>(27);
    }
  })
  .execute(false)

  .spec('should have `clear()` method', {
    'properly remove and restore.': testing => {
      testing
        .before(component => {
          component.propertyClass.bind<TestPropertyComponent, string>(component, 'age', 'target');
          component.age = 27;
        })
        .equal<number>(['age', '_setAge'], 27)
        .before(component => {
          component.propertyClass.clear(component, 'age');
          component.age = 37;
        })
        .equal<number>(['age', '_setAge'], 37);
    }
  })
  .execute(false)

  .spec('should have `bind()` method', {
    'with `String` argument.': testing => testing
      .before(comp => {
        comp.propertyClass.bind<TestPropertyComponent, string>(comp, 'firstname', 'target');
        comp.firstname = 'Lucas';
        comp.propertyClass.bind<TestPropertyComponent, string>(comp, 'surname', 'target');
        comp.surname = 'Natko';
      })
      .equal<string>('target.firstname', 'Lucas')
      .equal<string>('surname', 'Natko'),
    'with `Array` argument.': testing => {
      testing
        .before(comp => {
          comp.propertyClass.bind<TestPropertyComponent, string>(comp, ['firstname', 'surname'], 'target');
          comp.firstname = 'Lucas';
          comp.surname = 'Tramp';
        })
        .equal<string>(['firstname', 'target.firstname'], 'Lucas')
        .equal<string>(['surname', 'target.surname'], 'Tramp')
        .before(comp => {
          comp.propertyClass
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
          comp.propertyClass
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
          comp.propertyClass
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
        comp.propertyClass.bind<TestPropertyComponent, string>(comp, ['firstname', 'surname'], 'target');
        if (comp.propertyClass.binded instanceof Array) {
          const index: number = comp.propertyClass.binded.indexOf('surname');
          if (index > -1) {
            comp.propertyClass.binded = index;
          }
        }
        if (comp.propertyClass.binded instanceof Array) {
          return comp.propertyClass.binded.indexOf('surname');
        }
      })
      .equal<number>(-1)
  })
  .execute(false)

  /*
    wrap()
  */
  .spec('should have `wrap`()` method', {
    'with `String` argument.': testing => testing
      .before(comp => {
        comp.propertyClass
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
        comp.propertyClass
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
