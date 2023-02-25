import { pay, turn } from './examples-misc-state-example01';
import { some, none } from 'fp-ts/lib/Option';
import type { Gumball, Paid, Unpaid } from './examples-misc-state-example01';

describe('examplesMiscStateExample01', () => {
  it('should work', () => {
    expect(pay(50)('Unpaid')).toMatchObject([none, 'Paid']);
    expect(turn('Paid')).toMatchObject([some('Gumball'), 'Unpaid']);
  });
});
