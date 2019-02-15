import ENV from '../../../common/environment';
import PKG from '../../../package.json';
import { fetch } from '../../../components/BoardingPass';

import entropy from './entropy';

const { IS_PRODUCTION, IS_WEB, NODE_ENV } = ENV;
const {
  browserName, browserVersion,
  deviceManufacturer, deviceModel,
  osName, osVersion,
  locale, platform, totalMemory, userAgent,
  ...screenProperties
} = entropy;

export default async (event = {}, method = 'event') => {
  const props = {
    device_manufacturer: deviceManufacturer,
    device_model: deviceModel,
    language: locale,
    library: { name: PKG.name, version: PKG.version },
    os_name: IS_WEB ? browserName : osName,
    os_version: IS_WEB ? browserVersion : osVersion,
    platform: IS_WEB ? 'Web' : osName,
    ...event,
  };

  if (method === 'session') {
    props.user_properties = {
      $set: {
        browser: { name: browserName, version: browserVersion },
        os: { name: osName, version: osVersion },
        screen: screenProperties,
        totalMemory,
        ...event.userProperties,
      },
    };
  }

  if (!IS_PRODUCTION && !NODE_ENV) console.info(`⚡️ProviderAmplitude:${endpoint}`, props); // eslint-disable-line

  fetch({
    method: 'POST',
    service: `tracking/${method}`,
    body: JSON.stringify(props),
  });
};
