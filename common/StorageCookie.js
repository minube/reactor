export default {
  async get(key) {
    const store = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);

    if (store === undefined || store === null) return undefined;

    try {
      return JSON.parse(decodeURIComponent(store[2]));
    } catch (error) {
      return store[2];
    }
  },

  async set(key, value, domain, expires) {
    if (value) {
      document.cookie = `${key}=${encodeURIComponent(JSON.stringify(value))}${domain
        ? `;domain=${domain};path=/;expires=${expires};`
        : ''}`;
    } else {
      document.cookie = `${key}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;'`;
    }
    return value;
  },
};
