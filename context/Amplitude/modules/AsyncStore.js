import { AsyncStorage } from 'react-native';

export default {
  async getItem(key) {
    const store = await AsyncStorage.getItem(key);
    return JSON.parse(store);
  },

  async setItem(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
};
