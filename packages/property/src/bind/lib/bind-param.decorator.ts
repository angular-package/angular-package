import { FunctionType, typeObjectGuard } from '@angular-package/type';

export function BindParam<T = any>(param: string | Array<string>): MethodDecorator {
  return (target: FunctionType, key: string, descriptor: any): any => {

    const originalMethod = descriptor.value;

    descriptor.value =  function(): void {
      if (typeof param === 'string') {
        param = [param];
      }

      if (Array.isArray(param) && Array.isArray(arguments)) {
        param.forEach((name: string, index: number) => {
          if (typeObjectGuard<T>(arguments[index])) {
            this[name] = arguments[index];
          } else {
            throw new Error(`Argument(${param}): must be type <T>`);
          }
        });
      }
      const result = originalMethod.apply(this, arguments);


      return result;
    };

    return descriptor;
  };
}
