import { ComponentFixture, TestBed } from '@angular/core/testing';
// @angular-package/testing.
import {
  // Class.
  Testing,
  TestingToBeMatchers,
} from '@angular-package/testing';
// Module.
import { TestModule } from './module/test.module';
// Component.
import { ComponentLoaderComponent } from './module/component-loader.component';
import { ComponentLoader } from '../lib/component-loader.class';
import { DynamicComponent } from './module/dynamic.component';
/**
 * Testing instance.
 */
const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();
/**
 * Tests.
 */
testing.describe(ComponentLoader.name, () => {
  let component: ComponentLoaderComponent;
  let fixture: ComponentFixture<ComponentLoaderComponent>;

  //#region `beforeEach()`.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentLoaderComponent],
      imports: [TestModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //#endregion beforeEach().

  testing
    //#region Basic tests.
    .toBeClass(ComponentLoader)
    .it(`ComponentLoaderComponent to be created.`, () => {
      toBe.defined(component);
      expect(component).toBeTruthy();
    })
    //#endregion Basic tests.

    .describe(`.${ComponentLoader.findViewContainerKey.name}()`, () => {
      testing
        .it(`should find properly.`, () => (
          toBe.string(ComponentLoader.findViewContainerKey(component)),
          expect(ComponentLoader.findViewContainerKey(component)).toEqual('container')
        ))

        .it(`should not find a container properly.`, () => (
          (component.container = 'something else than container'),
          toBe.undefined(ComponentLoader.findViewContainerKey(component)),
          expect(ComponentLoader.findViewContainerKey(component)).toBeUndefined()
        ));
    })

    .describe(`.${ComponentLoader.isViewContainer.name}()`, () => {
      testing
        .it(`checks properly.`, () => (
          toBe.true(ComponentLoader.isViewContainer(component.container)),
          expect(ComponentLoader.isViewContainer(component.container)).toBeTrue()
        ))

        .it(`checks value is not a container properly.`, () => (
          (component.container = 'something else than container'),
          toBe.false(ComponentLoader.isViewContainer(component.container)),
          expect(ComponentLoader.isViewContainer(component.container)).toBeFalse()
        ));
      }
    )

    .describe(`.prototype`, () => {
      testing
        .describe(`.${ComponentLoader.prototype.createComponent.name}()`, () =>
          testing.it(`\`should create\`.`, () =>
            toBe
              .defined(
                component
                  .pickViewContainer(component)
                  .createComponent(DynamicComponent)
              )
              .defined(component.createdComponent)
              .defined(component.createdComponent?.instance)
              .instance(component.createdComponent?.instance, DynamicComponent)
              .true(component.isComponentCreated())
          )
        )

        .describe(`.${ComponentLoader.prototype.destroyComponent.name}()`, () =>
          testing.it(`\`should destroy\``, () =>
            toBe.true(
              component
                .pickViewContainer(component)
                .createComponent(DynamicComponent)
                .destroyComponent()
            )
            .undefined(component.createdComponent)
            .undefined(component.createdComponent?.instance)
            .not.instance(component.createdComponent?.instance, DynamicComponent)
            .false(component.isComponentCreated()),
          )
        )

        .describe(`.${ComponentLoader.prototype.getPropertyValue.name}()`, () =>
          testing.it(
            `should get property`,
            () => (
              toBe.number(component.getPropertyValue('age')),
              expect(component.getPropertyValue('age')).toEqual(27)
            )
          )
        )

      .describe(`.${ComponentLoader.prototype.isComponentCreated.name}()`, () =>
        testing.it(
          `should check the dynamic component is created and not created.`,
          () => (
            toBe.true(component.isComponentCreated()),
            component.destroyComponent(),
            toBe.false(component.isComponentCreated())
          )
        )
      )

      .describe(`.${ComponentLoader.prototype.linkProperties.name}()`, () =>
        testing.it(`should link properties age as \`true\` and \`firstName\` as \`false\``, () => (
          component.linkProperties(['age', 'firstName'], component),
          Object.assign(component, { age: 27, firstName: 'my new name' }),
          expect(component.createdComponent?.instance?.age).toEqual(27),
          expect(component.createdComponent?.instance.firstName).toEqual('my new name'),
          component.unlinkProperties('firstName'),
          Object.assign(component, { age: 127, firstName: 'not my new name' }),
          expect(component.createdComponent?.instance.age).toEqual(127),
          expect(component.createdComponent?.instance.firstName).toEqual('my new name')
        ))
      );
    });
});
