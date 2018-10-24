import { Adt } from '@ephox/katamari';

export interface Methods {
  fold: <T>(
    getHandler: () => T,
    postHandler: () => T,
    putHandler: () => T,
    delHandler: () => T,
  ) => T;
  match: <T>(branches: {
    get: () => T,
    post: () => T,
    put: () => T,
    del: () => T,
  }) => T;
  log: (label: string) => void;
};

const adt: {
  get: () => Methods;
  post: () => Methods;
  put: () => Methods;
  del: () => Methods;
} = Adt.generate([
  { get: [ ] },
  { post: [ ] },
  { put: [ ] },
  { del: [ ] }
]);

export const Methods = {
  get: adt.get,
  post: adt.post,
  put: adt.put,
  del: adt.del
};