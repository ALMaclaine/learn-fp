import { print, some1 } from './examples-misc-option-example01';

describe('examplesMiscOptionExample01', () => {
  it('should work', () => {
    expect(print(some1('one'))).toEqual('success 1');
    expect(print(some1('not one'))).toEqual('failed');
  });
});
