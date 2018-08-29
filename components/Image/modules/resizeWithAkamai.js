import { LAYOUT } from '../../../common';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';
const LOW = { W: 375, H: 736 };
const REGULAR = { W: 1024, H: 768 };
const HIGH = { W: 1920, H: 1200 };

export default ({ uri = '', ratio = 1 }) => {
  if (!uri.includes(AKAMAI_DOMAIN)) return uri;

  const { VIEWPORT: { TINY, PHONE, LARGE } } = LAYOUT;
  let { W, H } = REGULAR;

  if (TINY || PHONE) {
    // ({ W, H } = LOW); // @TODO: Not supported natively by iOS
    W = LOW.W; // eslint-disable-line
    H = LOW.H; // eslint-disable-line
  } else if (LARGE) {
    // ({ W, H } = HIGH)();
    W = HIGH.W; // eslint-disable-line
    H = HIGH.H; // eslint-disable-line
  }

  return `${uri}?fit=around|${parseInt(W / ratio, 10)}:${parseInt(H / ratio, 10)}`;
};
