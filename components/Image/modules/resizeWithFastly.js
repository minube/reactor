import { LAYOUT } from '../../../common';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';
const LOW = { W: 375, H: 736 };
const REGULAR = { W: 1024, H: 768 };
const HIGH = { W: 1920, H: 1200 };

export default ({ uri = '', width = null, height = null }) => {
  if (!uri.includes(AKAMAI_DOMAIN)) return uri;
  let pixelDensity = PixelRatio.get();
  if (width == null || height == null) {
      const {VIEWPORT: {TINY, PHONE, LARGE}} = LAYOUT;
      let {width, height} = REGULAR;

      if (TINY || PHONE) {
          width = LOW.W; // eslint-disable-line
          height = LOW.H; // eslint-disable-line
      } else if (LARGE) {
          width = HIGH.W; // eslint-disable-line
          height = HIGH.H; // eslint-disable-line
      }
  }

  return `${uri}?quality=75&format=pjpg&fit=crop` +
    `&width=${parseInt(width * pixelDensity, 10)}` +
    `&height=${parseInt(height * pixelDensity, 10)}`;
};
