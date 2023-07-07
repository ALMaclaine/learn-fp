import { pipe } from '@effect-ts/core/Function';
import * as A from '@effect/data/ReadonlyArray';
import * as N from '@effect/data/Number';

const out = pipe(
  A.range(1, 1000),
  A.filter((n) => n % 3 === 0 || n % 5 === 0),
  N.sumAll
);
console.log(out);
