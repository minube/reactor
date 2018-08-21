import { createElement } from 'react';

import { serverSideStyle } from '../../common';
import resizeWithAkamai from './modules/resizeWithAkamai';

const DEFAULT_ALT = 'minube.com';

export default ({
  alt = DEFAULT_ALT, source: { uri }, style, title,
}) => createElement('img', {
  alt,
  src: resizeWithAkamai({ uri }),
  style: serverSideStyle(style),
  title,
});
