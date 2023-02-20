import * as O from 'fp-ts/Option';

import {
  getUserLevel,
  getUserLevelFP,
  User,
  UserScore,
} from './examples-misc-general-example02';

const user1: User = { multiplier: 2 };
const userScore1: UserScore = { points: 100 };

const user2: User = { multiplier: 14 };
const userScore2: UserScore = { points: 21 };

describe('getUserLevel', () => {
  it('should work', () => {
    expect(getUserLevel(user1, userScore1)).toEqual(200);
    expect(getUserLevel(user2, userScore2)).toEqual(294);
  });

  it('should work Fp', () => {
    expect(
      getUserLevelFP(
        () => O.fromNullable(user1),
        () => O.fromNullable(userScore1)
      )
    ).toMatchObject(O.some(200));
    expect(
      getUserLevelFP(
        () => O.fromNullable(user2),
        () => O.fromNullable(userScore2)
      )
    ).toMatchObject(O.some(294));
  });
});
