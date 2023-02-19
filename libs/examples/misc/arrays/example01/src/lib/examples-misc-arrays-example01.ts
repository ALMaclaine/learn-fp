import { pipe } from 'fp-ts/function';
import * as A from 'fp-ts/Array';

const totalMaxElements = (arr1: number[], arr2: number[]) => {
  const n = Math.min(arr1.length, arr2.length);
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += Math.max(arr1[i], arr2[i]);
  }
  return total;
};

const totalMaxElementsFP = (arr1: number[], arr2: number[]) => {
  return pipe(
    arr1,
    A.zip(arr2),
    A.map((pair) => Math.max(...pair)),
    A.reduce(0, (a, b) => a + b)
  );
};

export { totalMaxElements, totalMaxElementsFP };
