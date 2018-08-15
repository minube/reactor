import ENV from '../../../common/environment';
import PKG from '../../../package.json';

import entropy from './entropy';
import queryString from './queryString';

const { IS_PRODUCTION } = ENV;
const {
  deviceModel, locale, osName, osVersion, platform, userAgent, ...userProperties
} = entropy;
const DEFAULT_ENDPOINT = 'httpapi';
const ENDPOINT_PROPERTY = {
  httpapi: 'event',
  identify: 'identification',
};

export default async (key, event = {}, endpoint = DEFAULT_ENDPOINT) => {
  if (!IS_PRODUCTION) console.info('⚡️ProviderAmplitude.LogEvent', event);

  const props = {
    device_model: deviceModel, // "Android",
    language: locale,
    library: { name: PKG.name, version: PKG.version },
    os_name: osName, // "Chrome Mobile"
    os_version: osVersion, // 70
    platform,
    timestamp: new Date().getTime(),
    user_agent: userAgent,
    // version_name: null
    ...event,
    user_properties: endpoint !== DEFAULT_ENDPOINT
      ? { $setOnce: { ...userProperties, ...event.user_properties } }
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
