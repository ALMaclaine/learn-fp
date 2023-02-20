import { isDotCom, isDotComFP } from './examples-misc-general-example01';

describe('isDotCom', () => {
  it('should work', () => {
    expect(isDotCom('awd')).toBeFalsy();
    expect(isDotCom('awdawd.com')).toBeFalsy();
    expect(isDotCom('www.awdawd.com')).toBeFalsy();
    expect(isDotCom('https://www.awdawd.com')).toBeTruthy();
  });

  it('should work FP', () => {
    expect(isDotComFP('awd')).toBeFalsy();
    expect(isDotComFP('awdawd.com')).toBeFalsy();
    expect(isDotComFP('www.awdawd.com')).toBeFalsy();
    expect(isDotComFP('https://www.awdawd.com')).toBeTruthy();
  });
});
