const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'mapi.minube.com' : 'staging.mapi.minube.com';

export default async ({
  headers, method = 'GET', secure = false, service, ...props
}) => (
  new Promise((resolve, reject) => {
    fetch(`${secure ? 'https' : 'http'}://${ENDPOINT}/${service}`, {
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
          code: response ? response.status : undefined,
          message,
        });
      });
  })
);
