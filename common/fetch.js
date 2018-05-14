const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

export default async (endpoint, props = {}) => {
  const { headers, method = 'GET', ...others } = props;

  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      headers: { ...DEFAULT_HEADERS, ...headers },
      method,
      ...others,
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
  });
};
