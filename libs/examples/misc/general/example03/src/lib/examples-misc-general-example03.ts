import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/function';

type Theme = 'light' | 'dark' | 'neon';

type Settings = {
  theme: Theme;
};

const DEFAULT_THEME_SETTING: Theme = 'light';
const DEFAULT_SETTINGS: Settings = {
  theme: DEFAULT_THEME_SETTING,
};
Object.freeze(DEFAULT_SETTINGS);

const getThemeSetting = (
  getUserSettings: () => Settings | undefined,
  getCompanySettings: () => Settings | undefined
): Theme => {
  const userSettings = getUserSettings();
  const companySettings = getCompanySettings();
  if (userSettings) {
    return userSettings.theme;
  } else if (companySettings) {
    return companySettings.theme;
  } else {
    return DEFAULT_THEME_SETTING;
  }
};

const getThemeSettingFP = (
  getUserSettings: () => O.Option<Settings>,
  getCompanySettings: () => O.Option<Settings>
) => {
  return pipe(
    getUserSettings(),
    O.alt(getCompanySettings),
    O.getOrElse(() => DEFAULT_SETTINGS)
  ).theme;
};

export { getThemeSetting, DEFAULT_THEME_SETTING, getThemeSettingFP };
export type { Theme, Settings };
