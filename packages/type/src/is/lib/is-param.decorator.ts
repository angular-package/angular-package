import { is } from './is.object';

export function isParam(...param: Array<string>): MethodDecorator {
  return (target: Function | object, key: string | symbol, descriptor: any): any => {
    const originalMethod = descriptor.value;

    descriptor.value =  function(): void {
      if (is.array(param) && is.defined(arguments)) {
        param.forEach((name: string, index: number) => {
          if (is.number(index) && index < arguments.length) {
            if (is.defined(arguments[index])) {
              switch (name) {
                case 'number':
                  if (is.number(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
                case 'object':
                  if (is.object(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
                case 'string':
                  if (is.string(arguments[index]) === false) {
                    arguments[index] = undefined;
                  }
                  break;
              }
            }
          }
        });
      }
      const result = originalMethod.apply(this, arguments);
      return result;
    };

    return descriptor;
  };
}
