
export type element = 'checkbox' | 'input' | 'select';
export type event = 'cancelled' | 'changed' | 'submitted';

/*
  With html specification
  http://w3c.github.io/html-reference/elements.html
*/

/*
  Global/Core Attributes
  -----
  START
*/
/**
 * A key label or list of key labels with which to associate the element;
 * each key label represents a keyboard shortcut which UAs can use to activate the element or give focus to the element.
 */
export type accesskeyType = string;
export type accesskey = string;

// A name of a classification, or list of names of classifications, to which the element belongs.
export type classType = string;

// Specifies whether the contents of the element are editable.
export type contenteditableType = 'true' | 'false' | '' | undefined | boolean;
export type contenteditable = 'true' | 'false' | '' | undefined;

// The value of the id attribute on the menu with which to associate the element as a context menu.
export type contextmenuType = string;
export type contextmenu = string;

// Specifies the element’s text directionality.
export type dirType = 'ltr' | 'rtl' | 'auto' | undefined;
export type dir = 'ltr' | 'rtl' | 'auto' | undefined;

// Specifies whether the element is draggable.
export type dragabbleType = 'true' | 'false' | true | false;
export type dragabble = 'true' | 'false' | true | false;

/**
 * Specifies what types of content can be dropped on the element,
 * and instructs the UA about which actions to take with content when it is dropped on the element.
 */
export type dropzoneType = 'copy' | 'move' | 'link' | string;
export type dropzone = 'copy' | 'move' | 'link' | string;

// Specifies that the element represents an element that is not yet, or is no longer, relevant.
export type hiddenType = 'hidden' | '' | undefined;
export type hidden = 'hidden' | '' | undefined;

// A unique identifier for the element.
export type idType = string;
export type id = string;

// Specifies the primary language for the contents of the element and for any of the element’s attributes that contain text.
// https://tools.ietf.org/html/bcp47
export type langType = string;
export type lang = string;

/**
 * @value: A valid ID reference to an element of type type is a string that exactly matches the
 * value of the id attribute of an element of type type anywhere in the document.
 */
export type listType = string;
export type list = string;

// Specifies whether the element represents an element whose contents are subject to spell checking and grammar checking.
export type spellcheckType = 'true' | 'false' | boolean | '' | undefined;
export type spellcheck = 'true' | 'false' | boolean | '' | undefined;

// Specifies zero or more CSS declarations that apply to the element [CSS].
export type styleType = string;
export type style = string;

/**
 * Specifies whether the element represents an element that is is
 * focusable (that is, an element which is part of the sequence of focusable elements in the document),
 * and the relative order of the element in the sequence of focusable elements in the document.
 */
export type tabindexType = number;
export type tabindex = number;

// Advisory information associated with the element.
export type titleType = any;
export type title = any;

/**
 * Specifies whether an element’s attribute values and contents of its children are to be translated
 * when the page is localized, or whether to leave them unchanged.
 */
export type translateType = 'yes' | 'no';
export type translate = 'yes' | 'no';


/*
  Global/Core Attributes
  ---
  END
*/


/**
 * Provides the UA with a hint of what file types the server is able to accept.
 * @value: A set of comma-separated strings, each of which is a valid MIME type, with no parameters.
 */
export type acceptType = string;
export type accept = string;

/**
 * Provides a textual label for an alternative button for users and UAs who cannot use the image specified by the src attribute.
 * @value: Any string that is not empty.
 */
export type altType = string;
export type alt = string;

/**
 * Specifies whether the element represents an input control for which a UA is meant to store the
 * value entered by the user (so that the UA can prefill the form later).
 */
export type autocompleteType = 'on' | 'off';
export type autocomplete = 'on' | 'off';

// Specifies that the element represents a control to which a UA is meant to give focus as soon as the document is loaded.
export type autofocusType = 'autofocus' | '' | boolean;
export type autofocus = 'autofocus' | '' | boolean;

// Specifies that the element represents a selected control.
export type checkedType = 'checked' | '' | boolean | undefined;
export type checked = 'checked' | '' | boolean | undefined;

// Specifies that the element represents a disabled control.
export type disabledType = 'disabled' | '' | boolean;
export type disabled = 'disabled' | '' | boolean;

/**
 * Enables submission of a value for the directionality of the element, and gives the name of the field that contains that value.
 * @value: Any string that is not empty
 */
export type dirnameType = string;
export type dirname = string;

// The value of the id attribute on the form with which to associate the element.
export type formType = string;
export type form = string;

/**
 * The form-submission action for the element.
 * @value: A URL that is not the empty string, optionally with leading and/or trailing space characters.
 */
export type formactionType = string;
export type formaction = string;

// A MIME type with which a UA is meant to associate this element for form submission.
export type formenctypeType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
export type formenctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';

// The HTTP method with which a UA is meant to associate this element for form submission.
export type formmethodType = 'get' | 'post';
export type formmethod = 'get' | 'post';

/**
 * A browsing context name or keyword that represents the target of the control.
 * @value: Any string that is either of the following:
 *         - a browsing-context name
 *         - any case-insensitive match for one of the following literal strings: "_blank", "_self", "_parent", or "_top".
 */
export type formtargetType = '_blank' | '_self' | '_parent' | '_top' | string;
export type formtarget = '_blank' | '_self' | '_parent' | '_top' | string;

// Specifies that the element represents a control whose value is not meant to be validated during form submission.
export type formnovalidateType = 'formnovalidate' | '' | undefined;
export type formnovalidate =  'formnovalidate' | '' | undefined;

// The height of the image, in CSS pixels.
export type heightType = string;
export type height = string;

// inputType
export type input = 'button' | 'color' | 'checkbox' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'file' | 'hidden' |
  'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

/**
 * The maximum allowed value length of the element.
 * @value: One or more characters in the range 0—9.
 */
export type maxlengthType = number;
export type maxlength = number;

// The expected upper bound for the element’s value.
export type maxType = string;
export type max = string;

// The expected lower bound for the element’s value.
export type minType = string;
export type min = string;

// Specifies that the element allows multiple values.
export type multipleType = 'multiple' | '' | undefined;
export type multiple = 'multiple' | '' | undefined;

// The name part of the name/value pair associated with this element for the purposes of form submission.
export type nameType = string;
export type name = string;

/**
 * Specifies a regular expression against which a UA is meant to check the value of the control represented by its element.
 * @value: A regular expression that must match the JavaScript Pattern production as specified in [ECMA 262].
 */
export type patternType = string;
export type pattern = string;

/**
 * A short hint (one word or a short phrase) intended to aid the user when entering data into the control represented by its element.
 * @value: Any string that contains no line feed (U+000A, “LF”) or carriage return (U+000D, “CR”) characters.
 */
export type placeholderType = string;
export type placeholder = string;

// Specifies that element represents a control whose value is not meant to be edited.
export type readonlyType = 'readonly' | '' | boolean;
export type readonly = 'readonly' | '' | boolean;

/**
 * Specifies that the element is a required part of form submission.
 * @value: A regular expression that must match the JavaScript Pattern production as specified in [ECMA 262].
 */
export type requiredType = 'required' | '' | boolean;
export type required = 'required' | '' | boolean;

/**
 * The number of options meant to be shown by the control represented by its element.
 * @value: Any non-negative integer, with the following restriction:
 *  - must be greater than zero
 */
export type sizeType = number;
export type size = number;

/**
 * Specifies the location of an image.
 * @value: A URL that is not the empty string, optionally with leading and/or trailing space characters.
 */
export type srcType = string;
export type src = string;

// Specifies the value granularity of the element’s value.
export type stepType = number;
export type step = number;

export type typeType = string;
export type type = string;

// The width of the image, in CSS pixels.
export type widthType = string;
export type width = string;


/**
 * Specifies a value for element.
 * @element: input
 * @value: Any string that contains no line feed (U+000A, “LF”) or carriage return (U+000D, “CR”) characters.
 */
export type valueType = string;
export type value = string;
