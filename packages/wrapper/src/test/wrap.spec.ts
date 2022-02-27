import { typeOf } from '@angular-package/type';
import { Testing, TestingToBeMatchers, TESTING_ARRAY_BIGINT } from '@angular-package/testing';
import { Wrap } from '../lib/wrap.class';

const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Wrap`, () => {

  const closing = `]`;
  const opening = `[`;
  const replaceClosing = '>';
  const replaceOpening = '<';
  const replaceText = 'span';
  const text = `quote`;
  const wrap = new Wrap(opening, closing, text);
  const wrapNull = new Wrap(null as any, null as any);
  const wrapUndefined = new Wrap(undefined as any, undefined as any, undefined as any);
  const wrapArrayBigInt = new Wrap(TESTING_ARRAY_BIGINT as any, TESTING_ARRAY_BIGINT as any);

  testing

    .describe(`accessors`, () => {
      testing

        .it(`Wrap.prototype.closing`, () => {
          expect(wrap.closing).toEqual(closing);
          expect(wrapNull.closing).toEqual('null');
          expect(wrapUndefined.closing).toEqual('undefined');
          toBe.stringIncludes(wrap.closing, [closing]);
          expect(wrapArrayBigInt.closing).toEqual('9007199254740991,9007199254740991');
        })

        .it(`Wrap.prototype.opening`, () => {
          expect(wrap.opening).toEqual(opening);
          expect(wrapNull.opening).toEqual('null');
          expect(wrapUndefined.opening).toEqual('undefined');
          toBe.stringIncludes(wrap.valueOf(), [opening]);
          expect(wrapArrayBigInt.opening).toEqual('9007199254740991,9007199254740991');
        })

        .it(`Wrap.prototype.text`, () => {
          expect(wrap.text).toEqual(text);
          expect(wrapNull.text).toEqual('');
          expect(wrapUndefined.text).toEqual('');
          toBe.stringIncludes(wrap.valueOf(), [text]);
        })

        .it(`Wrap.prototype.valueOf()`, () => {
          expect(wrap.valueOf()).toEqual(`${opening}${text}${closing}`);
          expect(wrapNull.valueOf()).toEqual('nullnull');
          expect(wrapUndefined.valueOf()).toEqual('undefinedundefined');
          toBe.stringIncludes(wrap.valueOf(), [opening, text, closing]);
        })

        .it(`[Symbol.toStringTag]`, () => {
          expect(typeOf(wrap)).toEqual('wrap');
          expect(Object.prototype.toString.call(wrap)).toEqual('[object Wrap]');
        });
    })

    .describe(`methods`, () => {
      testing

        .it(`Wrap.isWrap()`, () => {
          expect(Wrap.isWrap(wrap, opening, closing, text)).toEqual(true);
          expect(Wrap.isWrap(wrap, undefined, closing, text)).toEqual(true);
          expect(Wrap.isWrap(wrap, undefined, undefined, text)).toEqual(true);
          expect(Wrap.isWrap(wrap, undefined, undefined, undefined)).toEqual(true);
          expect(Wrap.isWrap(wrap, opening, undefined, undefined)).toEqual(true);
          expect(Wrap.isWrap(wrap, opening, closing, undefined)).toEqual(true);
        })

        .it(`Wrap.hasClosing()`, () => {
          expect(Wrap.hasClosing(`${opening}${text}${closing}`, closing)).toBeTrue();
          expect(Wrap.hasClosing(`${opening}${text}${closing}`, opening)).toBeFalse();
        })

        .it(`Wrap.hasOpening()`, () => {
          expect(Wrap.hasOpening(`${opening}${text}${closing}`, opening)).toBeTrue();
          expect(Wrap.hasOpening(`${opening}${text}${closing}`, closing)).toBeFalse();
        });

    })

    .describe(`methods`, () => {
      testing

        .it(`Wrap.prototype.getClosing()`, () => {
          expect(wrap.getClosing()).toEqual(closing);
          toBe.stringIncludes(wrap.getClosing(), [closing]);
        })

        .it(`Wrap.prototype.getContent()`, () => {
          expect(wrap.getText()).toEqual(text);
          toBe.stringIncludes(wrap.getText(), [text]);
        })

        .it(`Wrap.prototype.getOpening()`, () => {
          expect(wrap.getOpening()).toEqual(opening);
          toBe.stringIncludes(wrap.getOpening(), [opening]);
        })


        .it(`Wrap.prototype.hasClosing()`, () => {
          expect(wrap.hasClosing()).toBeTrue();
          expect(wrap.hasClosing(closing)).toBeTrue();

          toBe
            .true(wrap.hasClosing())
            .false(wrap.hasClosing(replaceClosing));

          expect(new Wrap('', '').hasClosing()).toBeFalse();
          expect(new Wrap('', '').hasClosing('')).toBeFalse();

          toBe
            .false(new Wrap('', '').hasClosing())
            .false(new Wrap('', '').hasClosing(''));

        })

        .it(`Wrap.prototype.hasOpening()`, () => {
          expect(wrap.hasOpening()).toBeTrue();
          expect(wrap.hasOpening(opening)).toBeTrue();
          expect(wrap.hasOpening('')).toBeFalse();
          expect(wrap.hasOpening(replaceOpening)).toBeFalse();

          toBe
            .true(wrap.hasOpening())
            .false(wrap.hasOpening(replaceOpening));

          expect(new Wrap('', '').hasOpening()).toBeFalse();
          expect(new Wrap('', '').hasOpening('')).toBeFalse();

          toBe
            .false(new Wrap('', '').hasOpening())
            .false(new Wrap('', '').hasOpening(''));
        })

        .it(`Wrap.prototype.hasText()`, () => {
          expect(wrap.hasText()).toBeTrue();
          expect(wrap.hasText(text)).toBeTrue();
          expect(wrap.hasText(replaceText)).toBeFalse();

          toBe
            .true(wrap.hasText())
            .true(wrap.hasText(text))
            .false(wrap.hasText(replaceText));

          expect(new Wrap('', '', '1').hasText()).toBeTrue();
          expect(new Wrap('', '', '1').hasText('1')).toBeTrue();
          expect(new Wrap('', '', '').hasText()).toBeFalse();
          expect(new Wrap('', '', '').hasText('')).toBeFalse();
          expect(new Wrap('', '').hasText('')).toBeFalse();

          toBe
            .true(new Wrap('', '', '1').hasText())
            .false(new Wrap('', '', '').hasText())
            .false(new Wrap('', '').hasText(''));
        })

        .it(`Wrap.prototype.isWrapped()`, () => {
          expect(wrap.isWrapped()).toBeTrue();
          expect(wrap.isWrapped(opening, closing)).toBeTrue();
          expect(wrap.isWrapped(replaceOpening, closing)).toBeFalse();
          expect(wrap.isWrapped(opening, replaceClosing)).toBeFalse();
          expect(new Wrap('', '').isWrapped()).toBeFalse();
          expect(new Wrap('<', '>').isWrapped()).toBeTrue();
          expect(new Wrap('<', '>').isWrapped('<')).toBeTrue();
          expect(new Wrap('<', '>').isWrapped(undefined, '>')).toBeTrue();
          expect(new Wrap('<', '>').isWrapped('', '>')).toBeFalse();
          expect(new Wrap('<', '>').isWrapped('<', '')).toBeFalse();
        })

        .it(`Wrap.prototype.replaceClosing()`, () => {
          expect(wrap.replaceClosing(replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
          expect(wrap.replaceClosing(replaceClosing)).toContain(text);
          expect(wrap.replaceClosing(replaceClosing)).toContain(opening);
          expect(wrap.replaceClosing(replaceClosing)).toContain(replaceClosing);
          toBe
            .stringIncludes(wrap.replaceClosing(replaceClosing), [replaceClosing, text, opening])
            .not.stringIncludes(wrap.replaceClosing(replaceClosing), [closing]);
        })

        .it(`Wrap.prototype.replaceOpening()`, () => {
          expect(wrap.replaceOpening(replaceOpening)).toEqual(`${replaceOpening}${text}${closing}`);
          expect(wrap.replaceOpening(replaceOpening)).toContain(text);
          expect(wrap.replaceOpening(replaceOpening)).toContain(closing);
          expect(wrap.replaceOpening(replaceOpening)).toContain(replaceOpening);
          toBe
            .stringIncludes(wrap.replaceOpening(replaceOpening), [replaceOpening, text, closing])
            .not.stringIncludes(wrap.replaceOpening(replaceOpening), [opening]);
        })

        .it(`Wrap.prototype.replaceText()`, () => {
          expect(wrap.replaceText(replaceText)).toEqual(`${opening}${replaceText}${closing}`);
          expect(wrap.replaceText(replaceText)).toContain(closing);
          expect(wrap.replaceText(replaceText)).toContain(opening);
          expect(wrap.replaceText(replaceText)).toContain(replaceText);
          toBe
            .stringIncludes(wrap.replaceText(replaceText), [opening, replaceText, closing])
            .not.stringIncludes(wrap.replaceText(replaceText), [text]);
        })

        .it(`Wrap.prototype.toString()`, () => {
          expect(wrap.toString()).toEqual(`${opening}${text}${closing}`);
          toBe.stringIncludes(wrap.toString(), [opening, text, closing]);
        })

        .it(`Wrap.prototype.valueOf()`, () => {
          expect(wrap.valueOf()).toEqual(`${opening}${text}${closing}`);
          toBe.stringIncludes(wrap.valueOf(), [opening, text, closing]);
        });
    });
});
