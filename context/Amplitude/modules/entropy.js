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
const { OS: platform } = Platform;
let deviceModel;
let osName = platform;
let osVersion;

if (IS_WEB && !IS_SERVER && window && window.navigator) {
  const { appVersion, vendor: navigatorVendor } = window.navigator;

  if (appVersion.indexOf('Win') !== -1) osName = 'windows';
  if (appVersion.indexOf('Mac') !== -1) osName = 'macos';
  if (appVersion.indexOf('X11') !== -1) osName = 'unix';
  if (appVersion.indexOf('Linux') !== -1) osName = 'linux';

  osName = navigatorVendor;
}

const connection = async () => {
  const { effectiveType, type } = await NetInfo.getConnectionInfo() || {};
  return { effectiveType, type };
};

export { connection };

export default {
  deviceModel,
  environment,
  height,
  fontScale,
  locale,
  osName,
  osVersion,
  pixelRatio,
  platform,
  totalMemory,
  userAgent,
  width,
};
