import { pipe } from '@effect-ts/core/Function';
import * as S from '@effect/stream/Stream';

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
