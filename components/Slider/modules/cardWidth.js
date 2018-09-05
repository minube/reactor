import { LAYOUT, THEME } from '../../../common';

const { UNIT } = THEME;

export default () => {
  const {
    TINY, PHONE, SMALL, TABLET, REGULAR,
  } = LAYOUT.VIEWPORT;

  if (TINY) return UNIT * 13;
  if (PHONE || SMALL) return UNIT * 15;
  if (TABLET || REGULAR) return UNIT * 16.8;

  return UNIT * 23.6;
};
