import { some, none, fold, Option } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/function';

const some1 = (s: string): Option<number> => (s === 'one' ? some(1) : none);

const print = (opt: Option<number>): string => {
  return pipe(
    opt,
    fold(
      () => 'failed',
      (a: number) => `success ${a}`
    )
  );
};

export { print, some1 };
