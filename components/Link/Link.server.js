import { createElement } from 'react';

export default ({ href, ...inherit }) => createElement('a', { href }, inherit.children);
