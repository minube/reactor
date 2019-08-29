import { LAYOUT } from '../../../common';

const DOMAIN = 'imgs-akamai.mnstatic.com';
const LOW = { W: 375, H: 736 };
const REGULAR = { W: 1024, H: 768 };
const HIGH = { W: 1920, H: 1200 };
const PARAMETERS = 'quality=75&format=pjpg&fit=crop';

export default ({
  uri = '', ratio = 1, width = null, height = null,
}) => {
  if (!uri.includes(DOMAIN)) return uri;

  const pixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
  let h = height;
  let w = width;

  if (w == null || h == null) {
    const { VIEWPORT: { TINY, PHONE, LARGE } } = LAYOUT;

    if (TINY || PHONE) {
      w = LOW.W;
      h = LOW.H;
    } else if (LARGE) {
      w = HIGH.W;
      h = HIGH.H;
    } else {
      w = REGULAR.W;
      h = REGULAR.H;
    }

    return `${uri}?fit=around|${parseInt(w / ratio, 10)}:${parseInt(h / ratio, 10)}`;
  }

  if (ratio !== 1) return `${uri}?fit=around|${parseInt(w / ratio, 10)}:${parseInt(h / ratio, 10)}`;

  return `${uri}?${PARAMETERS}&width=${parseInt(w * pixelRatio, 10)}&height=${parseInt(h * pixelRatio, 10)}`;
};
