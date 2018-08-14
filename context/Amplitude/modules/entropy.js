import {
  DeviceInfo, Dimensions, NetInfo, PixelRatio, Platform,
} from 'react-native';

import { ENV } from '../../../common';

const { IS_WEB, IS_SERVER } = ENV;
const { height, width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const fontScale = PixelRatio.getFontScale();
const { locale, totalMemory, userAgent } = DeviceInfo;
const environment = IS_WEB ? 'web' : 'native';
let { OS: platform } = Platform;

let vendor;
if (IS_WEB && !IS_SERVER && window && window.navigator) {
  const { appVersion, vendor: navigatorVendor } = window.navigator;

  platform = undefined;
  if (appVersion.indexOf('Win') !== -1) platform = 'windows';
  if (appVersion.indexOf('Mac') !== -1) platform = 'macos';
  if (appVersion.indexOf('X11') !== -1) platform = 'unix';
  if (appVersion.indexOf('Linux') !== -1) platform = 'linux';

  vendor = navigatorVendor;
}

const connection = async () => {
  const { effectiveType, type } = await NetInfo.getConnectionInfo() || {};
  return { effectiveType, type };
};

export { connection };

export default {
  platform,
  environment,
  width,
  height,
  pixelRatio,
  fontScale,
  locale,
  totalMemory,
  userAgent,
  vendor,
};
