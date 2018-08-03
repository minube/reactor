import { LAYOUT } from '../../../common';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';

export default ({ uri = '', ratio = 1 }) => {
  if (!uri.includes(AKAMAI_DOMAIN)) return uri;

  return `${uri}?fit=around|${LAYOUT.VIEWPORT.W / ratio}:${LAYOUT.VIEWPORT.H / ratio}`;
};
