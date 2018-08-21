import { createElement } from 'react';

import { serverSideStyle, THEME } from '../../common';

const { COLOR } = THEME;
const STYLE = { color: COLOR.TEXT, marginTop: 0, marginBottom: 0 };

export default ({
  children, color, title, subtitle, large, small, style, tiny,
}) => {
  let tag = 'p';

  if (title) tag = 'h1';
  else if (subtitle) tag = 'h2';
  else if (large) tag = 'h3';
  else if (small || tiny) tag = 'small';

  return createElement(tag, {
    style: { ...STYLE, ...serverSideStyle(style), color },
  }, children);
};
