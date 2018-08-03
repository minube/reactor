import { createElement } from 'react';

import resizeWithAkamai from './modules/resizeWithAkamai';

const DEFAULT_ALT = 'minube.com';

export default ({
  alt = DEFAULT_ALT, style, source: { uri },
}) => createElement('img', { alt, src: resizeWithAkamai({ uri }), style });
