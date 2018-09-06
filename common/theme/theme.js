import deepMerge from './modules/deepMerge';
import THEME from './theme.style';

class Theme {
  constructor(value) {
    Object.assign(this, value);
  }

  extendTheme(style = {}) {
    const newTheme = deepMerge(THEME, style);

    Object.assign(this, newTheme);
    return newTheme;
  }
}

export default new Theme(THEME);
