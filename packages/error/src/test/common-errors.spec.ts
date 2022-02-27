import { CommonErrors } from '../lib/common-errors.class';
import { Error } from '../lib/error.class';

export class TestClass<Id extends string> extends CommonErrors<Id> {
  public get errors(): Map<Id, any> {
    return super.errors;
  }
  public set<ErrorId extends Id>(
    problem: string,
    fix: string,
    id: ErrorId
  ): this {
    if (super.isAllowedId(id)) {
      this.errors.set(id, new Error(problem, fix, id));
    }
    return this;
  }
}

