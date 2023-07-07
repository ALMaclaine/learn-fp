import * as O from '@effect-ts/core/Option';
import * as S from '@effect/stream/Stream';
import * as T from '@effect/io/Effect';
import * as N from '@effect/data/Number';
import * as A from '@effect/data/ReadonlyArray';
import { pipe, flow } from '@effect-ts/core/Function';
import { Effect } from '@effect/io/Effect';
//
// const out = pipe(
//   O.some(1),
//   O.map((n) => n + 1)
// );
//
// const add1Multiply2 = flow(N.sum(1), N.multiply(2));
//
// const divideBy2add1 = flow(N.divide(2), N.sum(1));
// //
// const out2 = add1Multiply2(2);
// const out3 = divideBy2add1(2);
// console.log(out2);
// console.log(out3);

// const fibonacci = (n: number): Array<number> =>
//   pipe(
//     A.range(0, n - 1),
//     A.scan([0, 1], (a) => [a[1], a[0] + a[1]]),
//     A.map((a) => a[0])
//   );

const fibonacci = pipe(
  S.iterate([0, 1], ([a, b]) => [b, a + b]),
  S.map(([a]) => a)
);

const out = pipe(
  fibonacci,
  S.takeWhile((n) => n < 4000000),
  S.scan(0, (a, b) => a + b),
  S.filter((n) => n % 2 === 0),
  S.runLast
);
