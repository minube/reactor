export default {
  async get(key) {
    const store = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);

    if (store === undefined || store === null) return undefined;

    try {
      return JSON.parse(store[2]);
    } catch (error) {
      return store[2];
    }
  },

  async set(key, value, domain) {
    value // eslint-disable-line
      ? document.cookie = `${key}=${JSON.stringify(value)}${domain ? ';domain=.minube.com:path=/' : ''}`
      : document.cookie = `${key}=${value};expires=${-1}`;

    return value;
  },
};
