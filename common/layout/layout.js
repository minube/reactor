import { Dimensions, Platform } from 'react-native';

import { isMobile, screenStyle, screenType } from './modules';

class Layout {
  constructor() {
    if (!Layout.instance) {
      const { height, width } = Dimensions.get('window');
      Layout.instance = this;
      this.height = height || 640;
      this.width = width || 360;
      this.style = screenStyle(width);
    }
    return Layout.instance;
  }

  get STYLE() {
    return this.style;
  }

  get VIEWPORT() {
    const { height: H, width: W } = this;
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

  calc(size, userAgent) {
    let { height, width } = this;

    if (!size && !userAgent) {
      ({ height, width } = Dimensions.get('window'));
    } else if (size) {
      ({ height, width } = size);
    } else if (userAgent) {
      height = 768;
      width = 1024;
      if (isMobile) {
        height = 640;
        width = 360;
      }
    }

    this.height = height;
    this.width = width;
    this.style = screenStyle(width);
  }
}

export default new Layout();
