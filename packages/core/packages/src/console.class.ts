
export class ConsoleClass {
  private colors = {
    use: '',
    defined: {
      reset: '\x1b[0m',
      faint: '\x1b[2m',
  
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
    }
  };
  private _text = '';

  blue(text: string): this {
    this.text(text, 'blue');

    return this;
  }

  faint(text: string): this {
    this.text(text, 'faint');

    return this;
  }

  green(text: string): this {
    this.text(text, 'green');

    return this;
  }

  info(): this {
    console.info(`${ this._text }`);
    this._text = '';

    return this;
  }

  log(): this {
    console.log(`${this.colors.defined.reset} ${ this._text } ${this.colors.defined.reset}`);
    this._text = '';

    return this;
  }

  red(text: string): this {
    this.text(text, 'red');

    return this;
  }

  yellow(text: string): this {
    this.text(text, 'yellow');

    return this;
  }

  private text(text: string, color: string = ''): string {
    return this._text = `${this._text}${this.colors.defined[color]}${text}${this.colors.defined.reset}`;
  }
}
