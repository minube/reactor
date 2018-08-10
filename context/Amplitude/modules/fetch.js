import ENV from '../../../common/environment';
import queryString from './queryString';

const { IS_PRODUCTION } = ENV;

export default async (key, event) => {
  if (!IS_PRODUCTION) console.info('⚡️ProviderAmplitude.LogEvent', event);

  fetch('https://api.amplitude.com/httpapi', {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    method: 'POST',
    body: queryString({ api_key: key, event: JSON.stringify(event) }),
  });
};
