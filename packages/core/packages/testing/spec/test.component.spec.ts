// test.component.spec.ts
// Step 1. Create `test.component.spec.ts` file and import `TestingClass`, `TestComponent`
import { Observable } from 'rxjs';
import { TestingClass } from '..';
import { TestComponent } from './test.component';
// End Step 1.

// null
const varNull = null;
const varNullArray = [null, varNull];
const varNullJSON = {
  first: null,
  second: varNull
};
// undefined
const varUndefined = undefined;
const varUndefinedArray = [undefined, varUndefined];
const varUndefinedJSON = {
  first: undefined,
  second: varUndefined
};
// string
const varString = 'String';
// number
const varNumber = 27;
// boolean
const varBoolean = false;

// Step 2. Create new `TestingClass` instance with `TestComponent` declaration
const testingClass: TestingClass<TestComponent> =
  new TestingClass<TestComponent>({
    declarations: [
      TestComponent
    ]
  }, TestComponent, {
      log: 'executed',
      execute: false
  });
// End Step 2.

// Step 3. Add and execute some tests
testingClass
  .spec('TestComponent',
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
  })
  .execute(true, true);
