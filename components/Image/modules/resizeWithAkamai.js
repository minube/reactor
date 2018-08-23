import { LAYOUT } from '../../../common';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';
const LOW = { W: 375, H: 736 };
const REGULAR = { W: 1024, H: 768 };
const HIGH = { W: 1920, H: 1200 };

export default ({ uri = '', ratio = 1 }) => {
  if (!uri.includes(AKAMAI_DOMAIN)) return uri;

  const { VIEWPORT: { TINY, PHONE, LARGE } } = LAYOUT;
  let { VIEWPORT: { W, H } } = LAYOUT;

  if (TINY || PHONE) ({ W, H } = LOW);
  else if (LARGE) ({ W, H } = HIGH);
  else ({ W, H } = REGULAR);

  return `${uri}?fit=around|${parseInt(W / ratio, 10)}:${parseInt(H / ratio, 10)}`;
};
