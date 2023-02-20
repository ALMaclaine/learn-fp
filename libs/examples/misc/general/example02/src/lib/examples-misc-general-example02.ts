import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

type UserScore = {
  points: number;
};

type User = {
  multiplier: number;
};

const getUserLevel = (user: User, score: UserScore): number => {
  return user.multiplier * score.points;
};

const getUserLevelFP = (
  getUser: () => O.Option<User>,
  getScore: (u: User) => O.Option<UserScore>
): O.Option<number> => {
  return pipe(
    O.Do,
    O.bind('user', getUser),
    O.bind('score', ({ user }) => getScore(user)),
    O.map(({ user, score }) => getUserLevel(user, score))
  );
};

export { getUserLevel, getUserLevelFP };
export type { User, UserScore };
