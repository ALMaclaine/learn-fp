import * as O from 'fp-ts/Option';
import {
  DEFAULT_THEME_SETTING,
  getThemeSetting,
  getThemeSettingFP,
  Settings,
} from './examples-misc-general-example03';

const settings1: Settings = {
  theme: 'light',
};

const settings3: Settings = {
  theme: 'dark',
};

describe('getThemeSetting', () => {
  it('should work', () => {
    expect(
      getThemeSetting(
        () => undefined,
        () => undefined
      )
    ).toEqual(DEFAULT_THEME_SETTING);

    expect(
      getThemeSetting(
        () => undefined,
        () => settings3
      )
    ).toEqual('dark');

    expect(
      getThemeSetting(
        () => settings1,
        () => settings3
      )
    ).toEqual('light');
  });

  it('should work FP', () => {
    expect(
      getThemeSettingFP(
        () => O.none,
        () => O.none
      )
    ).toEqual(DEFAULT_THEME_SETTING);

    expect(
      getThemeSettingFP(
        () => O.none,
        () => O.some(settings3)
      )
    ).toEqual('dark');
    expect(
      getThemeSettingFP(
        () => O.some(settings1),
        () => O.some(settings3)
      )
    ).toEqual('light');
  });
});
