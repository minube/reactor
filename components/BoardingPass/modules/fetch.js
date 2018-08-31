import { ENV } from '../../../common';

const { IS_PRODUCTION } = ENV;
const ENDPOINT = IS_PRODUCTION ? 'mapi.minube.com' : 'staging.mapi.minube.com';
const DEFAULT_METHOD = 'GET';
const CONTENT_JSON = 'application/json';
const CONTENT_FORM = 'application/x-www-form-urlencoded; charset=UTF-8';

if (typeof global.self === 'undefined') global.self = global;

export default async ({
  endpoint = ENDPOINT, headers, method = DEFAULT_METHOD, secure = false, service, ...props
}) => (
  new Promise((resolve, reject) => {
    fetch(`${secure ? 'https' : 'http'}://${endpoint}/${service}`, {
      headers: {
        'Content-Type': DEFAULT_METHOD ? CONTENT_JSON : CONTENT_FORM,
        'X-Requested-With': 'XMLHttpRequest',
        ...headers,
      },
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
