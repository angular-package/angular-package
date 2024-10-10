import { ConsoleColor, ConsoleStyle } from '../type';

export class ConsoleClass {
  private colors = {
    default: '\x1b[0m',
    reset: '\x1b[0m',

    // text color
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',

    // background color
    defaulgBG: '\x1b[39m',
    blackBg: '\x1b[40m',
    redBg: '\x1b[41m',
    greenBg: '\x1b[42m',
    yellowBg: '\x1b[43m',
    blueBg: '\x1b[44m',
    magentaBg: '\x1b[45m',
    cyanBg: '\x1b[46m',
    whiteBg: '\x1b[47m'
  };

  private styles = {
    bold: '\x1b[1m',
    reset: '\x1b[0m',
    faint: '\x1b[2m'
  };
  private _text = '';

  blue(text: string, style?: ConsoleStyle): this {
    this.prepare(text, 'blue', style);

    return this;
  }

  green(text: string, style?: ConsoleStyle): this {
    this.prepare(text, 'green', style);

    return this;
  }

  info(): this {
    console.info(`${ this._text }`);
    this._text = '';

    return this;
  }

  log(display: boolean = true): this {
    if (display === true) {
      console.log(`${this.styles.reset} ${ this._text } ${this.styles.reset}`);
    }
    this._text = '';

    return this;
  }

  red(text: string, style?: ConsoleStyle): this {
    this.prepare(text, 'red', style);

    return this;
  }

  text(text: string, color?: ConsoleColor, style?: ConsoleStyle): this {
    this.prepare(text, color, style);

    return this;
  }

  yellow(text: string, style?: ConsoleStyle): this {
    this.prepare(text, 'yellow', style);

    return this;
  }

  private prepare(text: string, color: ConsoleColor = 'reset', style?: ConsoleStyle): string {
    let styles = '';
    if (style) {
      style.forEach((s: string) => {
        styles = `${styles}${this.styles[s]}`;
      });  
    }

    return this._text = `${this._text}${this.colors[color]}${styles}${text}${this.styles.reset}`;
  }
}
