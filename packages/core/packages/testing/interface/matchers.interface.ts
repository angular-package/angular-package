import { Argument } from '../../type';

export interface Matchers {
  be<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this;
  contain<E>(actualOrExpected: Argument<E>, expected?: E, expectationFailOutput?: any): this;
  defined<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this;
  equal<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this;
  falsy<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this;
  match<TYPE>(actualOrExpected: Argument<TYPE>, expected?: TYPE, expectationFailOutput?: any): this;
  null<V>(actualOrPropertyName?: Argument<V>, expectationFailOutput?: any): this;
  truthy<TYPE>(actualOrPropertyName?: Argument<TYPE>, expectationFailOutput?: any): this;
  undefined<TYPE>(actualOrPropertyName?: Argument<TYPE>, expectationFailOutput?: any): this;
}
