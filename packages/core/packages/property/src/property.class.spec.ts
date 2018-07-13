
// internal
import { TestPropertyComponent } from '../test/component';
import { PropertyClass } from '.';
import { TestingClass } from '../../testing';
import { Options } from '../../testing/interface';

const TESTING_OPTIONS: Options = {
  log: false,
  execute: true
};

const testing: TestingClass<TestPropertyComponent> =
  new TestingClass<TestPropertyComponent>('TestPropertyComponent', {
    declarations: [
      TestPropertyComponent
    ]
  },
    TestPropertyComponent,
    TESTING_OPTIONS);

testing
  .spec('should have', {
    '`propertyClass` instance.': () => testing
      .before(comp => comp.propertyClass instanceof PropertyClass)
      .truthy(),
    'bind working when properties is string.': () => testing
      .before(comp => {
        comp.propertyClass.bind(comp, 'firstname', 'target');
        comp.firstname = 'Lucas';
      })
      .equal('target.firstname', 'Lucas'),
    'bind working when properties is array of string.': () => {
      testing
        .before(comp => {
          comp.propertyClass.bind(comp, ['firstname', 'surname'], 'target');
          comp.firstname = 'Lucas';
          comp.surname = 'Tramp';
        })
        .equal(['firstname', 'target.firstname'], 'Lucas')
        .equal(['surname', 'target.surname'], 'Tramp');
    },
    'firstname changed after bind with array of string.': () => {
      const firstname = 'Lucas';
      const surname = 'Tramp';
      testing
        .before(comp => {
          comp.propertyClass.bind(comp, ['firstname', 'surname'], 'target');
          comp.firstname = firstname;
          comp.surname = surname;
        })
        .equal(['firstname', 'target.firstname'], firstname)
        .equal(['surname', 'target.surname'], surname)
        .set<string>('firstname', 'Donald')
        .equal(['firstname', 'target.firstname'], 'Donald');
    }
  })
  .execute(true, true);

testing
  .spec('', {
    'Remove binded.': () => testing
      .before(comp => {
        comp.propertyClass.bind(comp, ['firstname', 'surname'], 'target');
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
      .equal(-1),
    '': () => {}
  });

/*

/*

  /*
    `binded`

  it('#7. Do not remove binded when index is string.', async(() => {
    comp.propertyClass.bind(comp, ['firstname', 'surname'], 'target');

    if (comp.propertyClass.binded instanceof Array) {
      const index: number = comp.propertyClass.binded.indexOf('surname');
      if (index > -1) {
        comp.propertyClass.binded = `${index}`;
      }

      if (comp.propertyClass.binded instanceof Array) {
        expect(comp.propertyClass.binded.indexOf('surname'))
          .toEqual(index);
      }
    }
  }));

  it('#8. should have `clear()` method remove from binded and wrapped.', async(() => {
    comp.propertyClass.bind(comp, ['firstname', 'surname'], 'target');
    comp.firstname = 'Lucas';
    expect(comp.firstname)
      .toEqual(comp.target.firstname);
    comp.propertyClass.clear(comp, 'firstname');
  }));
});
*/
