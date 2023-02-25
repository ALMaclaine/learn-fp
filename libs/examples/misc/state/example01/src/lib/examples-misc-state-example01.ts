import { some, none, Option } from 'fp-ts/lib/Option';
import { State } from 'fp-ts/lib/State';

type Unpaid = 'Unpaid';
type Paid = 'Paid';
type GumballState = Unpaid | Paid;
type Gumball = 'Gumball';
type Output = Option<Gumball>;

const pay =
  (amount: number): State<GumballState, Output> =>
  (state: GumballState) => {
    switch (amount) {
      case 50:
        return [none, 'Paid'];
      default:
        return [none, state];
    }
  };

const turn: State<GumballState, Output> = (state: GumballState) => {
  switch (state) {
    case 'Unpaid':
      return [none, state];
    case 'Paid':
      return [some('Gumball'), 'Unpaid'];
  }
};

export { pay, turn };
export type { Output, GumballState, Gumball, Paid, Unpaid };
