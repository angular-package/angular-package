import { Injectable } from '@angular/core';

@Injectable()
export class DocsApiHoodClass {
  public objectKeys(obj): Array<string> {
    return Object.keys(obj);
  }
}
