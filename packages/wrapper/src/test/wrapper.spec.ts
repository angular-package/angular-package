import { typeOf } from '@angular-package/type';
import { Testing, TestingToBeMatchers } from '@angular-package/testing';

import { Wrap } from '../lib/wrap.class';
import { Wrapper } from '../lib/wrapper.class';

const testing = new Testing(true, true);
const toBe = new TestingToBeMatchers();

testing.describe(`Wrapper`, () => {
  const opening = `<`;
  const replaceOpening = '{{';
  const closing = `>`;
  const replaceClosing = '}}';
  const text = `There is a text to be wrapped`;
  const wrapper = new Wrapper(opening, closing, text);
  testing
    .describe(`static methods`, () => {
      testing

        .it(`Wrapper.define()`, () => {
          const definedWrapper = Wrapper.define(opening, closing, text);

          expect(definedWrapper.closing).toEqual(closing);
          toBe.string(definedWrapper.closing);

          expect(definedWrapper.opening).toEqual(opening);
          toBe.string(definedWrapper.opening);

          expect(definedWrapper.text).toEqual(text);
          toBe.string(definedWrapper.text);
        })
        .it(`Wrapper.isWrapper()`, () => {
          expect(Wrapper.isWrapper(wrapper)).toBeTrue();
          expect(Wrapper.isWrapper(wrapper, opening)).toBeTrue();

          expect(Wrapper.isWrapper(wrapper, undefined, closing)).toBeTrue();
          expect(Wrapper.isWrapper(wrapper, opening, closing)).toBeTrue();

          expect(Wrapper.isWrapper(new Wrap(`[`, `]`))).toBeFalse();
          expect(Wrapper.isWrapper(wrapper, `{{{{{}}}}}`)).toBeFalse();

          expect(Wrapper.isWrapper(wrapper, undefined, `)`)).toBeFalse();
          expect(Wrapper.isWrapper(wrapper, `(`, `)`)).toBeFalse();
        })
        .it(`Wrapper.replaceClosing()`, () => {
          expect(Wrapper.replaceClosing(`${opening}${text}${closing}`, closing, replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
          expect(Wrapper.replaceClosing(new Wrap(opening, closing, text).valueOf(), closing, replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
          expect(Wrapper.replaceClosing(new Wrapper(opening, closing, text).valueOf(), closing, replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
        })
        .it(`Wrapper.replaceOpening()`, () => {
          expect(Wrapper.replaceOpening(`${opening}${text}`, opening, replaceOpening)).toEqual(`${replaceOpening}${text}`);
          expect(Wrapper.replaceOpening(new Wrap(opening, closing, text).valueOf(), opening, replaceOpening)).toEqual(`${replaceOpening}${text}${closing}`);
          expect(Wrapper.replaceOpening(new Wrapper(opening, closing, text).valueOf(), opening, replaceOpening)).toEqual(`${replaceOpening}${text}${closing}`);
        })
        .it(`Wrapper.unwrap()`, () => {
          expect(Wrapper.unwrap(`${opening}${text}${closing}`, opening, closing)).toEqual(text);
          expect(Wrapper.unwrap(`${opening}${text}${closing}`, undefined as any, closing)).toEqual(`${opening}${text}${''}`);
          expect(Wrapper.unwrap(`${opening}${text}${closing}`, opening, undefined as any)).toEqual(`${''}${text}${closing}`);
        })

        ;
    })

    .describe(`instance accessors`, () => {
      testing
      .it(`[Symbol.toStringTag]`, () => {
        expect(typeOf(wrapper)).toEqual('wrapper');
        expect(Object.prototype.toString.call(wrapper)).toEqual('[object Wrapper]');
      });
    })

    .describe(`instance methods`, () => {
      testing

      .it(`Wrapper.prototype.isClosingIn()`, () => {
        expect(wrapper.isClosingIn(`${opening}text${closing}`)).toBeTrue();
        expect(wrapper.isClosingIn(`${closing}text${opening}`)).toBeFalse();
      })
      .it(`Wrapper.prototype.isOpeningIn()`, () => {
        expect(wrapper.isOpeningIn(`${opening}text${closing}`)).toBeTrue();
        expect(wrapper.isOpeningIn(`${closing}text${closing}`)).toBeFalse();
      })
      .it(`Wrapper.prototype.replaceClosingIn()`, () => {
        expect(wrapper.replaceClosingIn(wrapper.valueOf(), replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
        expect(wrapper.replaceClosingIn(wrapper.valueOf(), replaceOpening)).not.toEqual(`${opening}${text}${replaceClosing}`);
      })
      .it(`Wrapper.prototype.replaceOpeningIn()`, () => {
        expect(wrapper.replaceOpeningIn(wrapper.valueOf(), replaceOpening)).toEqual(`${replaceOpening}${text}${closing}`);
        expect(wrapper.replaceOpeningIn(wrapper.valueOf(), replaceClosing)).not.toEqual(`${replaceOpening}${text}${closing}`);
      })
      .it(`Wrapper.prototype.removeWrapIn()`, () => {
        expect(wrapper.removeWrapIn(`${opening}text is ok${closing}`)).toEqual(`text is ok`);
        expect(wrapper.removeWrapIn(wrapper.valueOf())).toEqual(text);
      })
      .it(`Wrapper.prototype.textReplaceClosing()`, () => {
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textReplaceClosing(replaceClosing)).toEqual(`${opening}${text}${replaceClosing}`);
      })
      .it(`Wrapper.prototype.textReplaceOpening()`, () => {
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textReplaceOpening(replaceOpening)).toEqual(`${replaceOpening}${text}${closing}`);
      })
      .it(`Wrapper.prototype.textUnwrap()`, () => {
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textUnwrap()).toEqual(text);
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textUnwrap(opening)).toEqual(text);
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textUnwrap(undefined, closing)).toEqual(text);
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textUnwrap(replaceOpening, replaceClosing)).not.toEqual(text);
      })
      .it(`Wrapper.prototype.textWrap()`, () => {
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textWrap(replaceOpening, replaceClosing)).toEqual(`${replaceOpening}${opening}${text}${closing}${replaceClosing}`);
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textWrap(opening, replaceClosing)).toEqual(`${opening}${opening}${text}${closing}${replaceClosing}`);
        expect(new Wrapper(opening, closing, `${opening}${text}${closing}`).textWrap(replaceOpening, closing)).toEqual(`${replaceOpening}${opening}${text}${closing}${closing}`);
      })
      .it(`Wrapper.prototype.toArray()`, () => {
        expect(wrapper.toArray()).toEqual([ opening, text, closing]);
        expect(wrapper.toArray()).not.toEqual([ text, opening, closing]);
      })
      .it(`Wrapper.prototype.toWrap()`, () => {
        expect(wrapper.toWrap().closing).toEqual(closing);
        expect(wrapper.toWrap().opening).toEqual(opening);
        expect(wrapper.toWrap().text).toEqual(text);
      })
      .it(`Wrapper.prototype.unwrap()`, () => {
        expect(wrapper.unwrap()).toEqual(text);
      })
      .it(`Wrapper.prototype.unwrapText()`, () => {
        expect(wrapper.unwrapText()).toEqual(`${opening}${text}${closing}`);
        expect(new Wrapper(opening, closing, wrapper.valueOf()).unwrapText()).toEqual(`${opening}${text}${closing}`);
        expect(new Wrapper(opening, closing, wrapper.valueOf()).unwrapText(opening)).toEqual(`${opening}${text}${closing}`);
        expect(new Wrapper(opening, closing, wrapper.valueOf()).unwrapText(undefined, closing)).toEqual(`${opening}${text}${closing}`);
        expect(new Wrapper(opening, closing, wrapper.valueOf()).unwrapText(replaceOpening, replaceClosing)).not.toEqual(`${opening}${text}${closing}`);
      })
      .it(`Wrapper.prototype.wrap()`, () => {
        expect(wrapper.wrap()).toEqual(`${opening}${opening}${text}${closing}${closing}`);
        expect(wrapper.wrap(replaceOpening, replaceClosing)).toEqual(`${replaceOpening}${opening}${text}${closing}${replaceClosing}`);
      })
      .it(`Wrapper.prototype.wrapOn()`, () => {
        expect(wrapper.wrapOn(text)).toEqual(`${opening}${text}${closing}`);
        expect(wrapper.wrapOn(wrapper.valueOf())).toEqual(`${opening}${opening}${text}${closing}${closing}`);
      })
      .it(`Wrapper.prototype.wrapText()`, () => {
        expect(wrapper.wrapText(opening, closing)).toEqual(`${opening}${opening}${text}${closing}${closing}`);
        expect(wrapper.wrapText(replaceOpening, replaceClosing)).toEqual(`${opening}${replaceOpening}${text}${replaceClosing}${closing}`);
      });
    });
});
