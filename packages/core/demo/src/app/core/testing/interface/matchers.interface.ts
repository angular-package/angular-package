import { Argument } from '../../type';

export interface Matchers {
  be<TYPE>(actual: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this;
  contain<E>(nameOrExpected: Argument<E>, expected?: E, expectationFailOutput?: any): this;
  defined<V>(actualOrExpected?: Argument<V>, expectationFailOutput?: any): this;
  equal<TYPE>(actual: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this;
  falsy<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this;
  null<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this;
  truthy<TYPE>(propertyName?: Argument<TYPE>, expectationFailOutput?: any): this;
  undefined<TYPE>(actualOrPropertyName?: Argument<TYPE>, expectationFailOutput?: any): this;
}
