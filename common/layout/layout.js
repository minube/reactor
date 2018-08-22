import { Dimensions, Platform } from 'react-native';

import { isMobile, screenStyle, screenType } from './modules';

const DEFAULT = { WIDTH: 360, HEIGHT: 640 };

class Layout {
  constructor() {
    if (!Layout.instance) {
      const { height, width } = Dimensions.get('window');
      Layout.instance = this;
      this.height = height;
      this.width = width;
      this.style = screenStyle(width);
    }
    return Layout.instance;
  }

  get STYLE() {
    return this.style;
  }

  get VIEWPORT() {
    const H = this.height || DEFAULT.HEIGHT;
    const W = this.width || DEFAULT.WIDTH;
    const PORTRAIT = H > W;

    return {
      H,
      W,

      PORTRAIT,
      LANDSCAPE: W > H,
      IPHONEX: PORTRAIT && H === 812 && Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS,

      ...screenType(W),
    };
  }

  calc({ height = DEFAULT.HEIGHT, width = DEFAULT.WIDTH } = Dimensions.get('window'), userAgent) {
    // @TODO: If we have userAgent;
    console.log('userAgent', isMobile(navigator.userAgent), navigator.userAgent);

    this.height = height;
    this.width = width;
    this.style = screenStyle(width);
  }
}

export default new Layout();
