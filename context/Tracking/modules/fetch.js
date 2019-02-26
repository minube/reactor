import ENV from '../../../common/environment';
import { fetch } from '../../../components/BoardingPass';

import entropy from './entropy';

const { IS_PRODUCTION, IS_WEB, PKG } = ENV;
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

  fetch({
    method: 'POST',
    endpoint: IS_PRODUCTION ? 'api.minube.com' : 'dev.api.minube.com',
    secure: true,
    service: `tracking/${method}`,
    body: JSON.stringify(props),
  });
};
