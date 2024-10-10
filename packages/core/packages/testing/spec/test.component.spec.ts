// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
// import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestModuleMetadata } from '@angular/core/testing';
import { TestingClass } from '..';
import { TestComponent } from './test.component';
import { Options } from '../interface';
import { TestManyComponent } from './test-many.component';
import { TestService } from './test.service';

// End Step 1.

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration.
const moduleDef: TestModuleMetadata = {
  declarations: [
    TestComponent,
    TestManyComponent
  ],
  providers: [
    TestService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
};
const options: Options = {
  log: 'executed',
  execute: false
};

const testingClass = new TestingClass(moduleDef, options);
// const firstname = 'Mark';

testingClass
  // End Step 2.

  // Step 3. Add and execute some tests.
  .spec({
    selector: {
      it: {
        'class() should select `getclass` div': test => test
          .selector('.getclass', TestComponent)
          .equal('Class')
          .not
          .equal('Class 1'),
          // .contain('Class')
        
        'class() should work with component()': test => test
          .clear()
          .equal({
            'tc.data.firstname': 'Eve',
            'tc.firstname': 'Eve',
            'tc.age': 127
          })
      }
    }
    /*
    ,equal: {
      // afterEach: (component: TestComponent) => {},
      beforeEach: (tc: TestComponent, tmc: TestComponent, done, ts: TestService) => {
        tc.setFirstname(firstname);
        tmc.firstname = firstname;
        ts._firstname = firstname;
        done();
      },
      it: {
        'service _firstname property should be undefined': test => test.equal({
          'ts._firstname': firstname
        }),
        'service _firstname property should be Mark': test => test.equal({
          'tc.firstname': firstname,
          'tmc.firstname': firstname
        })
      }
    }
    */
  }) 
  .execute(true, true)

  .spec({
    undefined: {
      // afterEach: (component: TestComponent) => {},
      beforeEach: (tc: TestComponent) => {
        tc.age = undefined;
      },
      it: {
        'TestComponent.place and TestManyComponent.componentUndefined': test => test.undefined('tc.place', 'tmc.componentUndefined')
        // 'service _firstname property should be undefined': test => test.undefined('ts._firstname')
      }
    }
  })
  .execute(false, true);

/*   .spec({
    TestComponentaaa: {
      // afterEach: (component: TestComponent) => {},
      // beforeEach: (component: TestComponent) => component.firstname = 'aaaa',
      it: {
        'place property should be undefined': test => test.undefined('place', 'componentUndefined')
      }
    }
  })
  .execute(true, true);
 */
  /*
  'TestComponent',
    (component, done) => {
      setTimeout(() => {
        component.firstname = 'testowo';
        done();
      }, 1000);
      component.firstname = 'testowo';
    }, {
      'contains spec with an expectation': (test, done) => test
        .mode(1)
        .before(component => component.firstname)
        .equal('testowo')
        .be(true, true)
        // .equal('firstname', 'testowo')
  }
  */
