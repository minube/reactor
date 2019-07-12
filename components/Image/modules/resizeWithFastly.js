import { LAYOUT } from '../../../common';

const AKAMAI_DOMAIN = 'imgs-akamai.mnstatic.com';
const LOW = { W: 375, H: 736 };
const REGULAR = { W: 1024, H: 768 };
const HIGH = { W: 1920, H: 1200 };

export default ({ uri = '', ratio = 1, width = null, height = null }) => {
    if (!uri.includes(AKAMAI_DOMAIN)) return uri;
    let pixelDensity = typeof window != "undefined" ? window.devicePixelRatio : 1;
    if (width == null || height == null) {
        const {VIEWPORT: {TINY, PHONE, LARGE}} = LAYOUT;
        if (TINY || PHONE) {
            width = LOW.W; // eslint-disable-line
            height = LOW.H; // eslint-disable-line
        } else if (LARGE) {
            width = HIGH.W; // eslint-disable-line
            height = HIGH.H; // eslint-disable-line
        } else {
            width = REGULAR.W; // eslint-disable-line
            height = REGULAR.H; // eslint-disable-line
        }
    }
    if (ratio != 1) {
        return `${uri}?fit=around|${parseInt(width / ratio, 10)}:${parseInt(height / ratio, 10)}`;
    } else {
        return `${uri}?quality=75&format=pjpg&fit=crop` +
          `&width=${parseInt(width * pixelDensity, 10)}` +
          `&height=${parseInt(height * pixelDensity, 10)}`;
    }

};
