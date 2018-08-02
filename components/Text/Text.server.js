import { createElement } from 'react';

import { THEME } from '../../common';

const { COLOR } = THEME;
const STYLE = { color: COLOR.TEXT, marginTop: 0, marginBottom: 0 };

export default ({
  color, title, subtitle, large, small, tiny, ...inherit
}) => {
  let tag = 'p';

  if (title) tag = 'h1';
  else if (subtitle) tag = 'h2';
  else if (large) tag = 'h3';
  else if (small || tiny) tag = 'small';

  return createElement(tag, { style: { ...STYLE, color } }, inherit.children);
};
