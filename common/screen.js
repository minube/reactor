import { Dimensions } from 'react-native';

export default () => {
  const { height, width } = Dimensions.get('window');

  return {
    PORTRAIT: height > width,

    TINY: width < 360,
    PHONE: width >= 360 && width < 376,
    TABLET: width >= 376 && width < 510,
    SMALL: width >= 510 && width < 720,
    REGULAR: width >= 720 && width < 1024,
    LARGE: width >= 1024,
  };
};
