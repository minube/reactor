import { ENV } from '../../../common';

const { IS_PRODUCTION } = ENV;
const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};
const ENDPOINT = IS_PRODUCTION ? 'mapi.minube.com' : 'staging.mapi.minube.com';

if (typeof global.self === 'undefined') global.self = global;

export default async ({
  endpoint = ENDPOINT, headers, method = 'GET', secure = false, service, ...props
}) => (
  new Promise((resolve, reject) => {
    fetch(`${secure ? 'https' : 'http'}://${endpoint}/${service}`, {
      headers: { ...DEFAULT_HEADERS, ...headers },
      method,
      ...props,
    })
      .then(async (response) => {
        const json = await response.json();

        if (response.status >= 400) reject({ code: response.status, message: json.message }); // eslint-disable-line
        else resolve(json);
      }).catch(({ message = 'ERROR_CONNECTION', response } = {}) => {
        reject({ // eslint-disable-line
          code: response ? response.status : 500,
          message,
        });
      });
  })
);
