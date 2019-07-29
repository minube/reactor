import { createElement } from 'react';

import { serverSideStyle } from '../../common';
import resize from './modules/resize';

const DEFAULT_ALT = 'minube.com';

export default ({
  alt = DEFAULT_ALT, source: { uri }, style, title,
}) => createElement('img', {
  alt,
  src: resize({ uri }),
  style: serverSideStyle(style),
  title,
});
