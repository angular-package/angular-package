import { PartialObserver } from 'rxjs/Observer';
export type ApSubscribeType = <T>(propertyName: string, observer: PartialObserver<T>) => void;

