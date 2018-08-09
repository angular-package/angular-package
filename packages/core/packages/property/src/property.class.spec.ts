// internal
import { PropertyClassComponent } from '../test/class.component';
import { TestingClass } from '../../testing';
import { PropertyClass } from './property.class';
import { testModuleMetadata } from '../test/config/testmodulemetadata.config';
import { options } from '../test/config/options.config';

const testingClass: TestingClass<PropertyClassComponent> =
  new TestingClass<PropertyClassComponent>('PropertyClass', testModuleMetadata, PropertyClassComponent, options);

const name = 'propertyClass';

testingClass
  .spec('should have prefix and suffix', {
    '`propertyClass`, `propertyClass` instance.': testing => testing
      .before(comp => comp[name] instanceof PropertyClass)
      .truthy()
  })
  .execute(true)

  .spec('should have prefix and suffix', {
    'working.': testing => {
      testing
        .before(component => {
          component[name]
            .setPrefix('__')
            .setSuffix('__');

          return component[name].propertyName('test');
        })
        .equal('__test__')
        .before(component => {
          component[name].wrap<PropertyClassComponent, number>(component, 'age',
            (property: string, source?: PropertyClassComponent, sourcePropertyName?: string): number => {
              source['target'][property] = source[sourcePropertyName];
              source['target'][sourcePropertyName] = source[sourcePropertyName];

              return source[sourcePropertyName];
            });
          component.age = 37;
        })
        .equal<number>(['age', '__age__', 'target.age', 'target.__age__'], 37);
    }
  })
  .execute()

  .spec('should have `string()` method', {
    'properly working.': testing => {
      testing
        .before(component => component[name].string(component.firstname))
        .truthy()
        .before(component => component[name].string(component._setAge))
        .not
        .truthy()
        .before(component => component[name].string(component.age))
        .falsy();
    }
  })
  .execute()

  .spec('should have `set()` method', {
    'properly working.': testing => {
      testing
        .before(component => {
          component[name].set(component, 'age', 27);
        })
        .equal<number>('age', 27);
    }
  })
  .execute()

  .spec('should have `get()` method', {
    'properly working.': testing => {
      testing
        .before(component => component[name].get(component, 'data.age'))
        .equal<number>(27);
    }
  })
  .execute()

  .spec('should have `clear()` method', {
    'properly remove and restore.': testing => {
      testing
        .before(component => {
          component[name].bind<PropertyClassComponent, string>(component, 'age', 'target');
          component.age = 27;
        })
        .equal<number>(['age', '_setAge'], 27)
        .before(component => {
          component[name].unbind(component, 'age');
          component.age = 37;
        })
        .equal<number>(['age', '_setAge'], 37);
    }
  })
  .execute()

  .spec('should have `bind()` method', {
    'with `String` argument.': testing => testing
      .before(comp => {
        comp[name].bind<PropertyClassComponent, string>(comp, 'firstname', 'target');
        comp.firstname = 'Lucas';
        comp[name].bind<PropertyClassComponent, string>(comp, 'surname', 'target');
        comp.surname = 'Natko';
      })
      .equal<string>('target.firstname', 'Lucas')
      .equal<string>('surname', 'Natko'),
    'with `Array` argument.': testing => {
      testing
        .before(comp => {
          comp[name].bind<PropertyClassComponent, string>(comp, ['firstname', 'surname'], 'target');
          comp.firstname = 'Lucas';
          comp.surname = 'Tramp';
        })
        .equal<string>(['firstname', 'target.firstname'], 'Lucas')
        .equal<string>(['surname', 'target.surname'], 'Tramp')
        .before(comp => {
          comp[name]
            .unbind(comp, ['firstname', 'surname'])
            .bind<PropertyClassComponent, any>(comp, 'firstname', comp.targetObject)
            .bind<PropertyClassComponent, any>(comp, 'surname', comp.targetObject);
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
          comp[name]
            .unbind(comp, ['firstname', 'surname'])
            .bind<PropertyClassComponent, string>(comp, ['firstname', 'surname'], 'target');

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
          comp[name]
            .unbind(comp, ['firstname', 'surname'])
            .bind<PropertyClassComponent, {}>(comp, ['firstname', 'surname'], comp.targetObject);

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
        comp[name].bind<PropertyClassComponent, string>(comp, ['firstname', 'surname'], 'target');
        if (comp[name].binded instanceof Array) {
          const index: number = comp[name].binded.indexOf('surname');
          if (index > -1) {
            comp[name].binded = index;
          }
        }
        if (comp[name].binded instanceof Array) {
          return comp[name].binded.indexOf('surname');
        }
      })
      .equal<number>(-1)
  })
  .execute()

  /*
    wrap()
  */
  .spec('should have `wrap`()` method', {
    'without defining `setter` or `getter` `String` argument.': testing => testing
      .before(comp => {
        comp[name]
          .unbind(comp, 'firstname')
          .wrap<PropertyClassComponent, string>(comp, 'firstname');

        comp.firstname = 'Michael string';
      })
      .equal(['_firstname', 'firstname'], 'Michael string'),

    'with `String` argument.': testing => testing
      .before(comp => {
        comp[name]
          .unbind(comp, 'firstname')
          .wrap<PropertyClassComponent, string>(comp, 'firstname',
            (property, source): string => source['target'][property] = source[property],
            (property, source) => source['target'][property]
          );

        return comp.firstname = 'Michael string';
      })
      .equal('Michael string'),

    ' with `Array` argument.': testing => testing
      .before(comp => {
        comp[name]
          .unbind(comp, ['firstname', 'surname'])
          .wrap<PropertyClassComponent, string>(
            comp,
            'firstname',
            (property, source) => source['target'][property] = source[property],
            (property, source) => source['target'][property]
          )
          .wrap<PropertyClassComponent, string>(
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
  .execute();
