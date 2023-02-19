import {
  totalMaxElements,
  totalMaxElementsFP,
} from './examples-misc-arrays-example01';

describe('totalMaxElements', () => {
  it('should work', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [5, 4, 3, 2];
    expect(totalMaxElements(arr1, arr2)).toEqual(16);
  });

  it('should work', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [5, 4, 3, 2];
    expect(totalMaxElementsFP(arr1, arr2)).toEqual(16);
  });
});
