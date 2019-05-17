import { AsyncStorage } from 'react-native';

export default {
  async get(key) {
    const store = await AsyncStorage.getItem(key);
    try {
      return JSON.parse(store);
    } catch (error) {
      return store;
    }
  },

  async set(key, value = {}) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
};
