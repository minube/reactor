import { createElement } from 'react';

const DEFAULT_ALT = 'Server Side Rendering';

export default ({ alt = DEFAULT_ALT, style, uri: src }) => createElement('img', { alt, src, style });
