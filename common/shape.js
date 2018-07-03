import {
  array, bool, number, oneOfType, string,
} from 'prop-types';

export default {
  RATING: {
    caption: string,
    color: string,
    count: number,
    showValue: bool,
    style: oneOfType([array, number]),
    textColor: string,
    value: number,
  },

  MOTION: {
    property: string,
    value: number,
  },

  SESSION: {
    device_id: string,
    user_id: string,
  },
};
