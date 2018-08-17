import ENV from '../../../common/environment';
import PKG from '../../../package.json';

import entropy from './entropy';
import queryString from './queryString';

const { IS_PRODUCTION, IS_WEB } = ENV;
const {
  browserName, browserVersion, deviceModel, locale, osName, osVersion, platform, totalMemory, userAgent,
  ...userProperties
} = entropy;
const DEFAULT_ENDPOINT = 'httpapi';
const ENDPOINT_PROPERTY = {
  httpapi: 'event',
  identify: 'identification',
};

export default async (key, event = {}, endpoint = DEFAULT_ENDPOINT) => {
  if (!IS_PRODUCTION) console.info(`⚡️ProviderAmplitude:${endpoint}`, event); // eslint-disable-line

  const props = {
    // device_model: deviceModel, // iPhone
    language: locale,
    library: { name: PKG.name, version: PKG.version },
    os_name: IS_WEB ? browserName : osName,
    os_version: IS_WEB ? browserVersion : osVersion,
    platform: IS_WEB ? 'web' : osName,
    timestamp: new Date().getTime(),
    user_agent: userAgent,
    // version_name: null // Used for determine the app, we'll use event_properties.pkg
    ...event,
    user_properties: endpoint !== DEFAULT_ENDPOINT
      ? {
        $setOnce: {
          browser: { name: browserName, version: browserVersion },
          os: { name: osName, version: osVersion },
          screen: userProperties,
          totalMemory,
          ...event.user_properties,
        },
      }
      : undefined,
  };

  fetch(`https://api.amplitude.com/${endpoint}`, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    method: 'POST',
    body: queryString({
      api_key: key,
      [ENDPOINT_PROPERTY[endpoint]]: JSON.stringify(props),
    }),
  });
};
