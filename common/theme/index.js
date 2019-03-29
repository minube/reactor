import deepMerge from './modules/deepMerge';
import defaultTheme from './theme';
require('es6-object-assign/auto');

class Theme {
  constructor(theme) {
    Object.assign(this, theme);
  }

  extend(theme = {}) {
    const newTheme = deepMerge(defaultTheme, theme);

    Object.assign(this, newTheme);
    return newTheme;
  }
}

export default new Theme(defaultTheme);
