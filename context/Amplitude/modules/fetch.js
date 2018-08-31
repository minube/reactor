import ENV from '../../../common/environment';
import queryString from '../../../common/queryString';
import PKG from '../../../package.json';

import entropy from './entropy';

const { IS_PRODUCTION, IS_WEB } = ENV;
const {
  browserName, browserVersion,
  deviceManufacturer, deviceModel,
  osName, osVersion,
  locale, platform, totalMemory, userAgent,
  ...userProperties
} = entropy;
const ENDPOINT_DEFAULT = 'httpapi';
const IDENTIFY = 'identify';
const ENDPOINT_PROPERTY = {
  httpapi: 'event',
  identify: 'identification',
};

export default async (key, event = {}, endpoint = ENDPOINT_DEFAULT) => {
  const props = {
    device_manufacturer: deviceManufacturer,
    device_model: deviceModel,
    language: locale,
    library: { name: PKG.name, version: PKG.version },
    ip: '$remote',
    os_name: IS_WEB ? browserName : osName,
    os_version: IS_WEB ? browserVersion : osVersion,
    platform: IS_WEB ? 'Web' : osName,
    timestamp: new Date().getTime(),
    user_agent: userAgent,
    // version_name: null // Used for determine the app, we'll use event_properties.pkg
    ...event,
    user_properties: endpoint === IDENTIFY
      ? {
        $set: {
          browser: { name: browserName, version: browserVersion },
          os: { name: osName, version: osVersion },
          screen: userProperties,
          totalMemory,
          ...event.userProperties,
        },
      }
      : {},
  };

  if (!IS_PRODUCTION) console.info(`⚡️ProviderAmplitude:${endpoint}`, props); // eslint-disable-line

  fetch(`https://api.amplitude.com/${endpoint}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    method: 'POST',
    body: queryString({
      api_key: key,
      // client: '68fcc232a01a8a3490a4b59c9b819137',
      [ENDPOINT_PROPERTY[endpoint]]: JSON.stringify(props),
      // v: 2,
      // upload_time: new Date().getTime(),
      // checksum: '46d63a17125ce9c96e70657869f7d203',
    }),
  });
};
