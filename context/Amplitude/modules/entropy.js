import {
  DeviceInfo, Dimensions, NetInfo, PixelRatio, Platform,
} from 'react-native';

import { ENV } from '../../../common';

const { IS_NATIVE, IS_WEB, IS_SERVER } = ENV;
const { height, width } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
const fontScale = PixelRatio.getFontScale();
const { locale, totalMemory, userAgent } = DeviceInfo;
const { OS } = Platform;

const CLIENT_STRINGS = [
  { s: 'windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
  { s: 'windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
  { s: 'windows 8', r: /(Windows 8|Windows NT 6.2)/ },
  { s: 'windows 7', r: /(Windows 7|Windows NT 6.1)/ },
  { s: 'windows vista', r: /Windows NT 6.0/ },
  { s: 'windows server 2003', r: /Windows NT 5.2/ },
  { s: 'windows xp', r: /(Windows NT 5.1|Windows XP)/ },
  { s: 'windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
  { s: 'windows me', r: /(Win 9x 4.90|Windows ME)/ },
  { s: 'windows 98', r: /(Windows 98|Win98)/ },
  { s: 'windows 95', r: /(Windows 95|Win95|Windows_95)/ },
  { s: 'windows nt 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
  { s: 'windows ce', r: /Windows CE/ },
  { s: 'windows 3.11', r: /Win16/ },
  { s: 'android', r: /Android/ },
  { s: 'open bsd', r: /OpenBSD/ },
  { s: 'sun os', r: /SunOS/ },
  { s: 'linux', r: /(Linux|X11)/ },
  { s: 'ios', r: /(iPhone|iPad|iPod)/ },
  { s: 'mac os x', r: /Mac OS X/ },
  { s: 'mac os', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
  { s: 'qnx', r: /QNX/ },
  { s: 'unix', r: /UNIX/ },
  { s: 'beos', r: /BeOS/ },
  { s: 'os/2', r: /OS\/2/ },
  { s: 'search bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ },
];

let deviceModel;
let osName = IS_NATIVE ? OS : undefined;
let osVersion;
let browserName;
let browserVersion;

if (IS_WEB && !IS_SERVER && window && window.navigator) {
  const { appVersion } = window.navigator;

  // -- Determine OS -----------------------------------------------------------
  CLIENT_STRINGS.some((client) => {
    const found = client.r.test(userAgent);
    if (found) osName = client.s;
    return found;
  });

  if (/windows/.test(osName)) {
    osVersion = /windows (.*)/.exec(osName)[1]; // eslint-disable-line
    osName = 'windows';
  }

  switch (osName) {
    case 'mac os x':
      // osVersion = /Mac OS X (10[\.\_\d]+)/.exec(userAgent)[1];
      osVersion = /Mac OS X 10_(\d+)_?(\d+)?/.exec(appVersion);
      osVersion = `${osVersion[1]}.${osVersion[2]}`;
      break;

    case 'android':
      osVersion = /Android ([\.\_\d]+)/.exec(userAgent)[1]; // eslint-disable-line
      break;

    case 'ios':
      osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(appVersion);
      osVersion = `${osVersion[1]}.${osVersion[2]}.${osVersion[3] || 0}`;
      break;

    default:
      break;
  }

  // -- Determine browser ------------------------------------------------------
  if (userAgent.indexOf('Edge') !== -1) { // Microsoft Edge
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.substring(userAgent.indexOf('Edge') + 5);
  } else if (userAgent.indexOf('Chrome') !== -1) { // Chrome
    browserName = 'chrome';
    browserVersion = userAgent.substring(userAgent.indexOf('Chrome') + 7);
  } else if (userAgent.indexOf('Trident/') !== -1) { // MSIE 11+
    browserName = 'Microsoft Internet Explorer';
    browserVersion = userAgent.substring(userAgent.indexOf('rv:') + 3);
  } else if (userAgent.indexOf('MSIE') !== -1) { // MSIE
    browserName = 'Microsoft Internet Explorer';
    browserVersion = userAgent.substring(userAgent.indexOf('MSIE') + 5);
  } else if (userAgent.indexOf('Firefox') !== -1) { // Firefox
    browserName = 'firefox';
    browserVersion = userAgent.substring(userAgent.indexOf('Firefox') + 8);
  } else if (userAgent.indexOf('Safari') !== -1) { // Safari
    browserName = 'safari';
    browserVersion = userAgent.substring(userAgent.indexOf('Safari') + 7);
    if (userAgent.indexOf('Version') !== -1) browserVersion = userAgent.substring(userAgent.indexOf('Version') + 8);
  } else if (userAgent.indexOf('Opera') !== -1) { // Opera
    browserName = 'opera';
    browserName = userAgent.substring(userAgent.indexOf('Opera') + 6);
    if (userAgent.indexOf('Version') !== -1) browserVersion = userAgent.substring(userAgent.indexOf('Version') + 8);
  } else if (userAgent.indexOf('OPR') !== -1) { // Opera Next
    browserName = 'opera';
    browserVersion = userAgent.substring(userAgent.indexOf('OPR') + 4);
  }

  if (browserVersion) {
    [';', ' ', ')'].forEach((char) => {
      const offset = browserVersion.indexOf(char);
      if (offset !== -1) browserVersion = browserVersion.substring(0, offset);
    });
    const release = browserVersion.split('.');
    browserVersion = `${release[0]}.${release[1]}`;
  }
}

const connection = async () => {
  const { effectiveType, type } = await NetInfo.getConnectionInfo() || {};
  return { effectiveType, type };
};

export { connection };

export default {
  browserName,
  browserVersion,
  deviceModel,
  height,
  fontScale,
  locale,
  osName,
  osVersion,
  pixelRatio,
  totalMemory,
  userAgent,
  width,
};
