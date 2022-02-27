// Class.
import { Wrap } from './wrap.class';
// Type.
import { Wrapped } from '../type/wrapped.type';
/**
 * The `Wrapper` is an extension of the `Wrap` object, which means it represents the immutable wrap of the opening and closing with the
 * additional ability to use it to wrap strings.
 */
export class Wrapper<
  Opening extends string = string,
  Text extends string = '',
  Closing extends string = string
> extends Wrap<Opening, Text, Closing> {
  //#region instance accessors.
  /**
   * The property, with the help of `toStringTag`, changes the default tag to `Wrapper` in the `Wrapper` instance. It can be read by the
   * `typeOf()` function of `@angular-package/type`.
   */
  public get [Symbol.toStringTag](): string {
    return 'Wrapper';
  }
  //#endregion instance accessors.

  //#region static public methods.
  /**
   * Defines a new `Wrapper` instance with the provided `opening`, `closing` chars, and optional `text`.
   * @param opening The opening chars of generic type variable `Opening` for new `Wrapper` instance.
   * @param closing The closing chars of generic type variable `Closing` for new `Wrapper` instance.
   * @param text An optional text of generic type variable `Text` for new `Wrapper` instance.
   * @returns The return value is the `Wrapper` instance of given `opening`, `closing` chars, and optional `text`.
   * @angularpackage
   */
  public static define<
    Opening extends string,
    Closing extends string,
    Text extends string = ''
  >(
    opening: Opening,
    closing: Closing,
    text?: Text
  ): Wrapper<Opening, Text, Closing> {
    return new this(opening, closing, text);
  }

  /**
   * The method checks if the value of any type is an instance of the `Wrapper` of any, or the given `opening`, `closing` chars, and `text`.
   * @param value The value of any type to test against the `Wrapper` instance.
   * @param opening Optional opening chars of generic type variable `Opening` to check if the given `value` contains.
   * @param closing Optional closing chars of generic type variable `Closing` to check if the given `value` contains.
   * @param text An optional text of generic type variable `Text` to check if the given `value` contains.
   * @returns The return value is a `boolean` type indicating whether the value is an instance of `Wrapper` of any, or the given opening,
   * closing chars, and text.
   * @angularpackage
   */
  public static isWrapper<
    Opening extends string,
    Closing extends string,
    Text extends string = string
  >(
    value: any,
    opening?: Opening,
    closing?: Closing,
    text?: Text
  ): value is Wrapper<Opening, Text, Closing> {
    return (
      typeof value === 'object' &&
      value instanceof this &&
      super.isWrap(value, opening, closing, text)
    );
  }

  /**
   * Replaces given `closing` chars with a given replacement value at the end of the given `text`.
   * @param text The text of `string` type in which given `closing` characters are replaced by a given replacement value.
   * @param closing The closing chars of the `string` to replace by a given replacement value at the end of the given `text`.
   * @param replaceValue The replacement value of a string type for the given `closing` characters in the given `text`.
   * @returns The return value is the given `text` of `string` type with a replaced `closing` chars by a given replacement value or the
   * specified `text` unchanged if it does not contain the given `closing` chars.
   * @angularpackage
   */
  public static replaceClosing(
    text: string,
    closing: string,
    replaceValue: string
  ): string {
    return this.hasClosing(text, closing)
      ? text.slice(0, -closing.length) + replaceValue
      : text;
  }

  /**
   * Replaces given `opening` chars with a given replacement value at the beginning of the given `text`.
   * @param text The text of `string` type in which the given `opening` chars are replaced by a given replacement value.
   * @param opening The opening chars of the `string` to replace by a given replacement value at the beginning of the given `text`.
   * @param replaceValue The replacement value of a string type for the given `opening` characters in the given `text`.
   * @returns The return value is the given `text` of `string` type with a replaced `opening` chars by a given replacement value or the
   * specified `text` unchanged if it does not contain the given `opening` chars.
   * @angularpackage
   */
  public static replaceOpening(
    text: string,
    opening: string,
    replaceValue: string
  ): string {
    return this.hasOpening(text, opening)
      ? text.replace(opening, String(replaceValue))
      : text;
  }

  /**
   * The method returns the given `text` without the given `opening` and `closing` chars.
   * @param text The text of the `string` from which given opening and closing chars are removed.
   * @param opening The opening chars of the `string` to be removed in the given `text`.
   * @param closing The closing chars of the `string` to be removed in the given `text`.
   * @returns The return value is the given `text` of `string` type without the given `opening` and `closing` chars or unchanged `text` if
   * it does not contain the given `opening` and `closing` chars.
   * @angularpackage
   */
  public static unwrap(text: string, opening: string, closing: string): string {
    return (
      (text = this.replaceClosing(text, closing, '')),
      (text = this.replaceOpening(text, opening, '')),
      text
    );
  }
  //#endregion static public methods.

  //#region constructor.
  /**
   * Creates a new `Wrapper` instance with the opening and closing chars and optional text.
   * @param opening The opening chars of a generic type variable `Opening` placed before the given `text`.
   * @param closing The closing chars of a generic type variable `Closing` placed after the given `text`.
   * @param text Optional text of a generic type variable `Text` to wrap by given `opening` and `closing` chars.
   * @returns The return value is a new `Wrapper` instance.
   * @angularpackage
   */
  constructor(opening: Opening, closing: Closing, text: Text = '' as Text) {
    super(opening, closing, text);
  }
  //#endregion constructor.

  //#region instance public methods.
  /**
   * Determines whether the provided `text` has the closing chars of the specified `Wrapper` object at the end.
   * @param text The text of `string` to test for the existence of the closing chars at the end of it.
   * @returns The return value is a `boolean` indicating whether the given `text` has the closing chars of the wrap.
   * @angularpackage
   */
  public isClosingIn(text: string): boolean {
    return Wrapper.hasClosing(text, this.closing);
  }

  /**
   * Checks whether the provided `text` has the opening chars of a specified `Wrapper` object at the beginning.
   * @param text The text of `string` to test for the existence of the opening chars at the beginning of it.
   * @returns The return value is a `boolean` indicating whether the given `text` has the opening chars of the wrap.
   * @angularpackage
   */
  public isOpeningIn(text: string): boolean {
    return Wrapper.hasOpening(text, this.opening);
  }

  /**
   * Replaces the closing chars of the `Wrapper` object in the given `text` with a given replacement value.
   * The replacement succeeds if the closing characters exist at the end of the text.
   * @param text The text of `string` type in which the closing chars are replaced by given replacement value.
   * @param replaceValue The value of `string` type as a replacement for the closing chars at the end of the given `text`.
   * @returns The return value is the given `text` of `string` type with replaced closing chars by given replacement value.
   * @angularpackage
   */
  public replaceClosingIn(text: string, replaceValue: string): string {
    return Wrapper.replaceClosing(text, this.closing, replaceValue);
  }

  /**
   * Replaces the opening chars of the `Wrapper` object in the given `text` with a given replacement value.
   * The replacement succeeds if the opening characters exist at the beginning of the text.
   * @param text The text of `string` type in which the opening chars are replaced by given replacement value.
   * @param replaceValue The value of `string` type as a replacement for the opening chars at the beginning of the given `text`.
   * @returns The return value is the given `text` of `string` type with replaced opening chars by given replacement value.
   * @angularpackage
   */
  public replaceOpeningIn(text: string, replaceValue: string): string {
    return Wrapper.replaceOpening(text, this.opening, replaceValue);
  }

  /**
   * Returns given `text` without the opening and closing chars of the `Wrapper` object.
   * @param text The text of a `string` type to unwrap from the opening and closing chars of the `Wrapper` object.
   * @returns The return value is the text of `string` type unwrapped from the opening and closing chars of the `Wrapper` object.
   * @angularpackage
   */
  public removeWrapIn(text: string): string {
    return (
      (text = this.replaceClosingIn(text, '')),
      (text = this.replaceOpeningIn(text, '')),
      text
    );
  }

  /**
   * Replaces the closing chars of the `Wrapper` object in the text of the `Wrapper` object with the given `closing` chars.
   * The replacement succeeds if the closing characters exist at the end of the text.
   * @param closing The closing chars of `string` to replace in the text(part of the primitive value).
   * @returns The return value is the text of `string` type with replaced closing chars.
   * @angularpackage
   */
  public textReplaceClosing(closing: string): string {
    return Wrapper.replaceClosing(this.text, this.closing, closing);
  }

  /**
   * Replaces the opening chars of the `Wrapper` object in the text of the `Wrapper` object with the given `opening` chars. The replacement
   * succeeds if the opening characters exist at the beginning of the text.
   * @param opening The opening chars of `string` to replace in the text(part of the primitive value).
   * @returns The return value is the text of `string` type with replaced opening chars.
   * @angularpackage
   */
  public textReplaceOpening(opening: string): string {
    return Wrapper.replaceOpening(this.text, this.opening, opening);
  }

  /**
   * The method returns the text of the `Wrapper` object without its opening and closing chars or the given `opening` and `closing` chars.
   * @param opening Optional opening chars of `string` type to remove from the beginning of the text of the `Wrapper` instance. By default,
   * its value is equal to the opening chars of the `Wrapper` instance.
   * @param closing Optional closing chars of `string` type to remove from the end of the text of the `Wrapper` instance. By default, its
   * value is equal to the closing chars of the `Wrapper` instance.
   * @returns The return value is the text of `string` type without the opening and closing chars of the `Wrapper` object or given `opening`
   * and `closing` chars.
   * @angularpackage
   */
  public textUnwrap(
    opening: string = this.opening,
    closing: string = this.closing
  ): string {
    return Wrapper.unwrap(this.text, opening, closing);
  }

  /**
   * The method returns the text of the `Wrapper` object wrapped by the given `opening` and `closing` chars.
   * @param opening The opening chars of a generic type variable `TextOpening` to wrap the text of the `Wrapper` instance.
   * @param closing The closing chars of a generic type variable `TextClosing` to wrap the text of the `Wrapper` instance.
   * @returns The return value is the text wrapped by given `opening` and closing `chars` of generic type `Wrapped`.
   * @angularpackage
   */
  public textWrap<TextOpening extends string, TextClosing extends string>(
    opening: TextOpening,
    closing: TextClosing
  ): Wrapped<TextOpening, Text, TextClosing> {
    return new Wrap(opening, closing, this.text).valueOf();
  }

  /**
   * Returns an `array` consisting of the opening chars, text, and closing chars.
   * @returns The return value is a read-only `array` consisting of the opening chars, text, and closing chars.
   * @angularpackage
   */
  public toArray(): readonly [Opening, Text, Closing] {
    return [this.opening, this.text, this.closing];
  }

  /**
   * Returns the `Wrap` instance consists of the text, opening and closing chars of the `Wrapper` object.
   * @returns The return value is an instance of `Wrap` consisting of the text, opening, and closing chars of the `Wrapper` object.
   * @angularpackage
   */
  public toWrap(): Wrap<Opening, Text, Closing> {
    return new Wrap(this.opening, this.closing, this.text);
  }

  /**
   * Returns the text without the opening and closing chars.
   * @returns The return value is the text of a generic type variable `Text`.
   * @angularpackage
   */
  public unwrap(): Text {
    return this.text;
  }

  /**
   * The method returns the primitive value of a specified `Wrapper` object with text unwrapped from the opening and closing chars of the
   * `Wrapper` instance or given `opening` and `closing` chars.
   * @param opening Optional opening chars of `string` type to remove from the beginning of the text of the `Wrapper` instance. By default,
   * its value is equal to the opening chars of the `Wrapper` instance.
   * @param closing Optional closing chars of `string` type to remove from the end of the text of the `Wrapper` instance. By default, its
   * value is equal to the closing chars of the `Wrapper` instance.
   * @returns The return value is the primitive value of `string` type with text unwrapped from the opening and closing chars of the
   * `Wrapper` object or the given `opening` and `closing` chars.
   * @angularpackage
   */
  public unwrapText(
    opening: string = this.opening,
    closing: string = this.closing
  ): string {
    return `${this.opening}${Wrapper.unwrap(this.text, opening, closing)}${
      this.closing
    }`;
  }

  /**
   * The method wraps the primitive value of a specified `Wrapper` object by its opening and closing chars or given `opening` and `closing`
   * chars.
   * @param opening Optional opening chars of a generic type variable `CustomOpening` to wrap the primitive value of the `Wrapper` instance.
   * By default, its value is equal to the opening chars of the `Wrapper` instance.
   * @param closing Optional closing chars of a generic type variable `CustomClosing` to wrap the primitive value of the `Wrapper` instance.
   * By default, its value is equal to the closing chars of the `Wrapper` instance.
   * @returns The return value is a primitive value wrapped by the opening and closing chars of the `Wrapper` instance or the given
   * `opening` and `closing` chars.
   * @angularpackage
   */
  public wrap<
    CustomOpening extends string = Opening,
    CustomClosing extends string = Closing
  >(
    opening: CustomOpening = this.opening as any,
    closing: CustomClosing = this.closing as any
  ): Wrapped<CustomOpening, Wrapped<Opening, Text, Closing>, CustomClosing> {
    return new Wrap(opening, closing, this.valueOf()).valueOf();
  }

  /**
   * The method wraps the given `text` with the wrap, the `opening`, and `closing` chars of the `Wrapper` object.
   * @param text The text of generic type variable `CustomText` to wrap by the opening and closing chars of the `Wrapper` instance.
   * @returns The return value is the given `text` wrapped by the opening and closing chars of the `Wrapper` object of the generic type
   * `Wrapped`.
   * @angularpackage
   */
  public wrapOn<CustomText extends string = ''>(
    text: CustomText
  ): Wrapped<Opening, CustomText, Closing> {
    return new Wrap(this.opening, this.closing, text).valueOf();
  }

  /**
   * The method returns the primitive value of the `Wrapper` object with text wrapped by given `opening` and `closing` chars.
   * @param opening The opening chars of a generic type variable `TextOpening` to wrap the text of the `Wrapper` instance.
   * @param closing The closing chars of a generic type variable `TextClosing` to wrap the text of the `Wrapper` instance.
   * @returns The return value is the primitive value with wrapped text by given opening and closing characters of generic type `Wrapped`.
   * @angularpackage
   */
  public wrapText<
    TextOpening extends string = '',
    TextClosing extends string = ''
  >(
    opening: TextOpening,
    closing: TextClosing
  ): Wrapped<Opening, Wrapped<TextOpening, Text, TextClosing>, Closing> {
    return `${this.opening}${this.textWrap(opening, closing)}${this.closing}`;
  }
  //#endregion instance public methods.
}
