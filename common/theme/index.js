import deepMerge from './modules/deepMerge';
import defaultTheme from './theme';

class Theme {
  constructor(value) {
    Object.assign(this, value);
  }

  extend(style = {}) {
    const newTheme = deepMerge(defaultTheme, style);

    Object.assign(this, newTheme);
    return newTheme;
  }
}

export default new Theme(defaultTheme);
