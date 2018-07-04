import { Platform } from 'react-native';

const IS_SERVER = typeof window === 'undefined';
const IS_WEB = Platform.OS === 'web';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  IS_NATIVE: !IS_WEB,
  IS_SERVER: IS_SERVER && IS_WEB,
  IS_WEB,

  IS_PRODUCTION,
  IS_DEVELOPMENT: !IS_PRODUCTION,
};
